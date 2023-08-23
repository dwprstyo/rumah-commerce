import React from "react";
import { Carrousel } from "../components/home/Carrousel";
import { SearchBar } from "../components/home/SearchBar";
import { CardMenu } from "../components/home/CardMenu";



export const Home = () => {
  return (
    <div className="position-relative">
      <div
        className="position-relative"
        style={{ marginBottom: "120px" }}
      >
        <Carrousel />
        <SearchBar />
      </div>
      <CardMenu />
    </div>
  );
};
