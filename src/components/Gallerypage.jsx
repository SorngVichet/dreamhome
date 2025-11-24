import React from "react";
import Cart from "./Cart";
import Headbar from "./Headbar";
import HeaderPage from "./HeaderPage";
import { useContext } from "react";
import { alldata } from "../App";
const Gallerypage = () => {
  const Data = useContext(alldata);
  return (
    <>
      <div
        id="gallerypage"
        style={{ minHeight: "100vh" }}
        className=" pt-16 px-2  "
      >
        <Headbar />
        <HeaderPage heading="All Categories" />
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
    </>
  );
};

export default Gallerypage;
