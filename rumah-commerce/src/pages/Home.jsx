import React from "react";
import { Carrousel } from "../components/home/Carrousel";
import { SearchBar } from "../components/home/SearchBar";
import { CardMenu } from "../components/home/CardMenu";
import { Slider } from "../components/home/Slider";
import Button from "react-bootstrap/esm/Button";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

import "../css/card-house.css";
import { CardHouse } from "../components/home/CardHouse";

export const Home = () => {
  return (
    <div className="position-relative">
      <div className="position-relative" style={{ marginBottom: "120px" }}>
        <Carrousel />
        <SearchBar />
      </div>
      <CardMenu />
      <div className="d-grid gap-3">
        <div className="row mb-5 mt-3">
          <Slider />
        </div>
        <div className="row mt-5">
          <div className="col d-grid justify-content-start">
            <div className="title-menu">Rekomendasi Sesuai Pencarianmu</div>
          </div>
          <div className="col d-flex justify-content-end align-items-center gap-3">
            <Button variant="light" className="button-purple">
              Lihat selengkapnya
            </Button>
            <Button
              variant="light"
              className="button-next d-grid align-items-center justify-content-center"
            >
              <MdNavigateBefore />
            </Button>
            <Button
              variant="light"
              className="button-next d-grid align-items-center justify-content-center"
            >
              <MdNavigateNext />
            </Button>
          </div>
        </div>
        <div className="row row-cols-4 card-house-wrap">
          <CardHouse />
          <CardHouse />
          <CardHouse />
          <CardHouse />
        </div>
      </div>
    </div>
  );
};
