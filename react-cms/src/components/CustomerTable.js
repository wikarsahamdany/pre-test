import { IonIcon } from "@ionic/react";
import React from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, fetchDetailId } from "../actions/createactions";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function CustomerTable({ dataUser }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleDelete(id) {
    dispatch(deleteUser(id)).then((res) => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Success deleted user with ID ${id}`,
        showConfirmButton: false,
        timer: 2500,
      });
    });
  }

  const dataDetail = useSelector((state) => state.customerDetailReducer.detail);

  const handleEdit = async (id) => {
    await dispatch(fetchDetailId(id));

    navigate(`/editCustomer/${id}`, { data: dataDetail });
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Phone Number</th>
          <th>Card Type</th>
          <th>Card Number</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {dataUser.users?.map((user) => {
          if (user.hasOwnProperty("isDeleted" )) {
            return "";
          } else {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>
                  <img className="rounded-circle" src={user.image} alt="profilePhoto" width={40} />
                  <span className="ms-2">
                    {user.firstName} {user.lastName.replace(/./g, "*")}
                  </span>
                </td>
                <td>{user.phone}</td>
                <td>{user.bank.cardType}</td>
                <td>{user.bank.cardNumber}</td>
                <td>
                  <button onClick={() => handleEdit(user.id)} type="button" className="btn btn-primary">
                    <IonIcon name="pencil" />
                  </button>
                  <button onClick={() => handleDelete(user.id)} type="button" className="btn btn-danger">
                    <IonIcon name="trash-outline" />
                  </button>
                </td>
              </tr>
            );
          }
        })}
      </tbody>
    </Table>
  );
}
