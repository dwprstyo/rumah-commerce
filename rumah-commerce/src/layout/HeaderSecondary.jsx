import React from "react";

import { Link } from "react-router-dom";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "../css/header-secondary.css";

export const HeaderSecondary = () => {
  return (
    <div className="p-5 pt-2 pb-2 header-secondary d-none d-md-grid">
      <div className="row">
        <div className="col">
          <div className="hs-text">Download Aplikasi Rumah</div>
        </div>
        <div className="col d-flex justify-content-end gap-4">
          <div className="hs-text">Cari Agen</div>
          <div className="hs-text">Explore</div>
          <div className="hs-text">Berita</div>
          <DropdownButton id="dropdown-basic-button" title="Perusahaan" className="custom-dropdown">
            <Dropdown.Item href="#/action-1">Tentang</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Event</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Pressroom</Dropdown.Item>
          </DropdownButton>
          <div className="hs-text">Beri Saran</div>
        </div>
      </div>
    </div>
  );
};
