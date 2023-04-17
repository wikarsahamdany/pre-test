import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCustomer } from "../actions/createactions";
import Swal from "sweetalert2";

export default function AddCustomer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dataCustomer, setDataCustomer] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    bank: {
      cardType: "",
      cardNumber: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("bank")) {
      const [field] = name.split(".");
      setDataCustomer({
        ...dataCustomer,
        bank: {
          ...dataCustomer.bank,
          [field]: value,
        },
      });
    } else {
      setDataCustomer({
        ...dataCustomer,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await dispatch(addCustomer(dataCustomer));

      if (!data) {
        throw data;
      }

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Success Add user with Name ${dataCustomer.firstName}`,
        showConfirmButton: false,
        timer: 2000,
      });

      navigate("/customer");
    } catch (err) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: err.message,
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  return (
    <div className="container">
      <h1 className="text-center mb-5">Add Customer</h1>
      <form onSubmit={handleSubmit} style={{ width: 500 }} className="mx-auto">
        <div className="form-group mb-3">
          <label htmlFor="firstName">First Name</label>
          <input onChange={handleChange} name="firstName" className="form-control" id="firstName" type="text" />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="lastName">Last Name</label>
          <input onChange={handleChange} name="lastName" className="form-control" id="lastName" type="text" />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="phone">Phone Number</label>
          <input onChange={handleChange} name="phone" className="form-control" id="phone" type="number" />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="bankCardType">Card Type</label>
          <input onChange={handleChange} name="bank.cardType" className="form-control" id="bankCardType" type="text" />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="bankCardNumber">Card Number</label>
          <input onChange={handleChange} name="bank.cardNumber" className="form-control" id="bankCardNumber" type="number" />
        </div>
        <div className="d-grid gap-2">
          <button className={!dataCustomer.firstName ? "btn btn-primary disabled" : "btn btn-primary"} type="submit">
            Add
          </button>
          <NavLink to={"/customer"} className="btn btn-outline-secondary">
            Cancel
          </NavLink>
        </div>
      </form>
    </div>
  );
}
