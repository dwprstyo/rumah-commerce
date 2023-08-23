import React from "react";

import "../css/header-primary.css";
import Logo from "../assets/rumah.svg";
import Button from "react-bootstrap/esm/Button";

export const HeaderPrimary = () => {
  return (
    <div className="p-5 pt-2 pb-2 header-primary d-grid align-items-center">
      <div className="row">
        <div className="col d-flex justify-content-start align-items-center gap-4">
          <img
            src={Logo}
            alt="Company Logo"
            loading="lazy"
            className="gap-2"
            width={200}
          />
          <div className="hp-text">Dijual</div>
          <div className="hp-text">Disewa</div>
          <div className="hp-text">Properti Baru</div>
          <div className="hp-text">KPR</div>
          <div className="hp-text">Panduan</div>
        </div>
        <div className="col d-flex justify-content-end align-items-center gap-5">
          <Button variant="light" className="button-white">Iklankan Properti</Button>
          <div className="hp-text" width={100}>Akun</div>
        </div>
      </div>
    </div>
  );
};
