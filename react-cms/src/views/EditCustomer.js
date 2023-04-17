import React, { useEffect } from "react";
import { useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editCustomer, fetchDetailId } from "../actions/createactions";
import Swal from "sweetalert2";

export default function EditCustomer() {
  const id = useParams();
  
  const dataDetail = useSelector((state) => state.customerDetailReducer.detail);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleFetch = async () => {
      try {
          await dispatch(fetchDetailId(id));

        } catch (err) {
            console.log(err)
        }
    };
    
    useEffect(() => {
        handleFetch()
    },[]);

    
    
    const [dataCustomer, setDataCustomer] = useState({
        firstName: dataDetail.firstName,
        lastName: dataDetail.lastName,
        phone: dataDetail.phone,
        bank: {
            cardType: dataDetail.bank.cardType,
            cardNumber: dataDetail.bank.cardNumber,
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
      const data = await dispatch(editCustomer( {id , dataCustomer}));

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Success Update user with Name ${dataCustomer.firstName}`,
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
      <h1 className="text-center mb-5">Edit Customer</h1>
      <form onSubmit={handleSubmit} style={{ width: 500 }} className="mx-auto">
        <div className="form-group mb-3">
          <label htmlFor="firstName">First Name</label>
          <input onChange={handleChange} name="firstName" className="form-control" id="firstName" type="text" value={dataCustomer.firstName} />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="lastName">Last Name</label>
          <input onChange={handleChange} name="lastName" className="form-control" id="lastName" type="text" value={dataCustomer.lastName}/>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="phone">Phone Number</label>
          <input onChange={handleChange} name="phone" className="form-control" id="phone" type="text"  value={dataCustomer.phone}/>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="bankCardType">Card Type</label>
          <input onChange={handleChange} name="bank.cardType" className="form-control" id="bankCardType" type="text" value={dataCustomer.bank.cardType} />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="bankCardNumber">Card Number</label>
          <input onChange={handleChange} name="bank.cardNumber" className="form-control" id="bankCardNumber" type="number" value={dataCustomer.bank.cardNumber} />
        </div>
        <div className="d-grid gap-2">
          <button className="btn btn-primary" type="submit">
            Update
          </button>
          <NavLink to={"/customer"} className="btn btn-outline-secondary">
            Cancel
          </NavLink>
        </div>
      </form>
    </div>
  );
}
