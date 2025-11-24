import React from "react";
import Headbar from "./Headbar";
import HeaderPage from "./HeaderPage";
import Cart from "./Cart";
import { alldata } from "../App";
import { useState, useContext } from "react";
const Condopage = () => {
  const data = useContext(alldata);
  const Data = data.filter((itm) => itm.type === "Condo");
  return (
    <div
      id="gallerypage"
      style={{ minHeight: "100vh" }}
      className=" pt-16  w-full"
    >
      <Headbar />
      <HeaderPage heading="All CONDOS" />
      <div className="  flex flex-wrap py-2  md:justify-between justify-center gap-4 px-3 w-full h-fit">
        {Data.map((itm) => (
          <Cart
            key={itm.id}
            img={itm.mainimg}
            title={itm.title}
            type={itm.type}
            id={itm.ID}
            ppm={itm.price.ppm}
            ppy={itm.price.ppy}
            link={"/dreamhome/detail-" + itm.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Condopage;
