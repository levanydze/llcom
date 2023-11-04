import React from "react";

function Footer() {
  return (
    <div className=" mt-28 text-white">
      <div className="w-full flex p-8 h-24">
        <div className="w-1/2">
          <h3 className=" text-xl w-5/6 text-right">
            Feel free to hit me up. I'm looking forward to hear from you.
          </h3>
        </div>
        <div className="w-1/2 flex justify-around">
          <h2 className="gabriola text-4xl ">Leo</h2>
        </div>
      </div>
      <div className="flex mt-32 justify-evenly pb-7 gap-5 p-5">
        <div className="w-3/4 flex gap-5">
          <p>
            2023 - Levani Levanidze Web Developer and Photographer Portfolio
          </p>
          <p> © Levani Levanidze</p>
        </div>
        <a className="w-1/4" href="http://levanidze.com">
          made by Levanidze
        </a>
      </div>
    </div>
  );
}

export default Footer;
