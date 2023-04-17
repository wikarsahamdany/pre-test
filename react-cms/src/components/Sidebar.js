import React from "react";
import { IonIcon } from "@ionic/react";
import "../App.css";
import { NavLink } from "react-router-dom";

export default function Sidebar() {

  return (
    <main>
      <section className="d-flex">
        <div className="d-flex flex-column flex-shrink-0 p-3 text-black" style={{ width: "250px", height: "100vh", position: "fixed" }}>
          <NavLink to={"/"} className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-black text-decoration-none ms-3">
            <img src="https://www.bni.co.id/Portals/1/bni-logo-id.png" width={100} alt="Logo" />
          </NavLink>
          <hr />
          <ul className="nav nav-pills flex-column mb-auto ">
            <li>
              <NavLink to={"/"} variant="primary" className="btn nav-link text-black" style={{ display: "flex", alignItems: "center" }}>
                <IonIcon name="compass-outline" style={{ marginRight: "10px", fontSize: "25px" }} />
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to={"/customer"} className="nav-link text-black" style={{ display: "flex", alignItems: "center" }}>
                <IonIcon name="people-outline" style={{ marginRight: "10px", fontSize: "25px" }} />
                Customer
              </NavLink>
            </li>
            <li>
              <NavLink to={"/category"} className="nav-link text-black" style={{ display: "flex", alignItems: "center" }}>
                <IonIcon name="list-outline" style={{ marginRight: "10px", fontSize: "25px" }} />
                Category
              </NavLink>
            </li>
            <li>
              <NavLink to={"/history"} className="nav-link text-black" style={{ display: "flex", alignItems: "center" }}>
                <IonIcon name="time-outline" style={{ marginRight: "10px", fontSize: "25px" }} />
                History
              </NavLink>
            </li>
          </ul>
          <hr />
        </div>
      </section>
    </main>
  );
}
