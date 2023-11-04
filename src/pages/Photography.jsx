import React from "react";
import { Link } from "react-router-dom";
import artofl from "../images/portfolioImagesData/artoflevanidze.com.png";

function Photography() {
  return (
    <div>
      <div>
        <h2 className=" text-xl w-full text-center text-ml capitalize pb-5  pt-20">
          Visit my Photography web page
        </h2>

        <Link to="https://artoflevanidze.com">
          <h2 className="w-full text-3xl gabriola underline text-center pb-10">
            Art of Levanidze
          </h2>
          <div className="px-10">
            <img src={artofl} alt="" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Photography;
