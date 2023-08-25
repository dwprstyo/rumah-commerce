import React from "react";

import { BiBath, BiBed } from "react-icons/bi";

export const CardHouse = () => {
  return (
    <>
      <div className="col d-flex justify-content-center">
        <div>
          <img
            className="house-img"
            src="https://picture.rumah123.com/r123/250x250-crop/primary_property/project/1670/1582008684_15820086845e4b896cd49f8ads_images_1582008684.jpg"
            alt=""
          />
          <div className="price">Rp 1,1 Miliar</div>
          <div className="address">BSD Tangerang Selatan</div>
          <div className="address2">Tangerang Selatan, Banten</div>
          <div className="d-flex align-items-center gap-1 spec">
            <BiBath />
            <div>1</div>
            <BiBed />
            <div>2</div>
            <div>LT: 50m&sup2; LB: 50m&sup2;</div>
          </div>
        </div>
      </div>
    </>
  );
};
