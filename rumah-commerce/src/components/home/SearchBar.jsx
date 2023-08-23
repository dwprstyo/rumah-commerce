import React from "react";

import SearchIcon from "../../assets/search.jpg"

import "../../css/search-bar.css";

export const SearchBar = () => {
  return (
    <>
      <div className="d-flex justify-content-center position-absolute top-70 start-50 translate-middle">
        <div className="row search-bar">
          <div className="col-12 d-grid justify-content-center gap-2 pt-4 pb-4 search-wrap">
            <div className="row">
              <div className="col d-flex justify-content-center">
                Jual Beli Properti Jadi Mudah
              </div>
            </div>
            <div className="row">
              <div className="col d-flex justify-content-center gap-4">
                <div className="tab-text">Dijual</div>
                <div className="tab-text">Disewa</div>
                <div className="tab-text">Properti Baru</div>
              </div>
            </div>
            <div className="row">
              <div className="col d-flex justify-content-center">
                <form class="search-form">
                  <div class="search-icon">
                    <img src={SearchIcon} alt="Search Icon" width="20" />
                  </div>
                  <input
                    type="text"
                    class="search-input"
                    placeholder="Lokasi, keyword, area, project, developer"
                  />
                  <button type="submit" class="search-button">
                    Cari
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
