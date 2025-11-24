import React from "react";
import img3 from "../assets/img3.jpg";
import bg from "../assets/Bgpayment.png";
import { NavLink } from "react-router-dom";
const Cart = (props) => {
  const { img, type, ID, id, ppm, ppy, title, link } = props;
  return (
    <div
      style={{ height: "440px" }}
      className=" bg-amber-400 rounded p-2 shadow hover:bg-amber-300   sm:w-80 w-full
      border"
    >
      <div
        style={{ height: "50%" }}
        className=" flex items-center  justify-center overflow-hidden  rounded-br-2xl relative w-full bg-amber-50"
      >
        <img src={img} className=" rounded-br-2xl h-full" alt="" />
        <div className=" absolute transform rotate-180 h-full w-full">
          <img src={bg} className=" rounded-tl-2xl" alt="" />
        </div>
        <div className=" coverimgcart flex items-end  justify-center z-10 absolute h-full w-full">
          <h5
            className=" text-white px-2
           py-1"
          >
            {title}
          </h5>
        </div>
      </div>
      <div style={{ height: "50%" }} className=" p-2 w-full">
        <div className=" h-full w-full ">
          <div className=" bg-amber-100 px-1 py-1 w-full grid grid-cols-2">
            <div className=" bg-amber-200 ">Type </div>
            <div className=" bg-amber-300">ID</div>
          </div>
          <div className=" w-full bg-gray-100 p-1  grid grid-cols-2">
            <div className=" bg-amber-300">{type}</div>
            <div className=" bg-amber-200">{id}</div>
          </div>
          <div className=" bg-amber-400 py-1 flex text-white text-lg font-bold w-full">
            <div className=" w-full  border-b"></div>
            <div className=" ">Price</div>
            <div className=" w-full border-b"></div>
          </div>
          <div className=" flex border  ">
            <div className=" flex flex-col w-full ">
              <div className=" bg-gray-200">month</div>
              <div className=" bg-gray-300">{ppm}$</div>
            </div>
            <div className=" flex flex-col  w-full">
              <div className=" bg-gray-300">year</div>
              <div className=" bg-gray-200">{ppy}$</div>
            </div>
          </div>
          <NavLink
            to={link}
            className=" btn w-full  btn-primary mt-2 text-white border"
          >
            {" "}
            View Detail
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Cart;
