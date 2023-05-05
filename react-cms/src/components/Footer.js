import React from "react";
import { IonIcon } from "@ionic/react";

export default function Footer() {
  return (
    <footer className="bg-info text-lg-start w-100 d-flex justify-content-center" style={{height: 200,  alignItems: "center"}}>
    <div style={{borderRight: "solid gray 2px", paddingRight: "30px" }}>
    <img src="https://upload.wikimedia.org/wikipedia/id/thumb/5/55/BNI_logo.svg/2560px-BNI_logo.svg.png" width={300} alt="Logo" />
    </div>
      <div className="flex-column">
        <div className="d-flex justify-content-center py-2">
          <a href="https://www.bni.co.id/id-id/" target="_blank">
            <IonIcon name="earth-outline" size="large" style={{ width: "70px" }}></IonIcon>
          </a>
          <a href="https://web.facebook.com/BNI" target="_blank">
            <IonIcon name="logo-facebook" size="large" style={{ width: "70px" }}></IonIcon>
          </a>
          <a href="https://twitter.com/BNI" target="_blank">
            <IonIcon name="logo-twitter" size="large" style={{ width: "70px" }}></IonIcon>
          </a>
          <a href="https://www.linkedin.com/company/pt.-bank-negara-indonesia-persero-tbk." target="_blank">
            <IonIcon name="logo-linkedin" size="large" style={{ width: "70px" }}></IonIcon>
          </a>
          <a href="https://www.instagram.com/bni46/" target="_blank">
            <IonIcon name="logo-instagram" size="large" style={{ width: "70px" }}></IonIcon>
          </a>
          <a href="https://www.youtube.com/user/BNITVC" target="_blank">
            <IonIcon name="logo-youtube" size="large" style={{ width: "70px" }}></IonIcon>
          </a>
        </div>
        <div className="text-center p-3">
          © 2023
          <a className="text-dark mx-1" href="https://github.com/wikarsahamdany" target="_blank" style={{ textDecoration: "none" }}>
            Wikarsa Hamdany
          </a>
        </div>
      </div>
    </footer>
  );
}
