import React from "react";
import LOGO from "../assets/LOGO.png";
import { useEffect, useRef } from "react";
import CartInHomepage from "./CartInHomepage";
import { NavLink } from "react-router-dom";

const BodyofHomepage = () => {
  return (
    <div id="body" className="  w-full px-2   flex-col">
      <div className=" py-2 border-b bg-amber-200   justify-content-center  gap-3  align-items-center  d-flex  flex-column flex-lg-row items-center w-full">
        <div className=" bg-amber-50  py-8  px-20  rounded-full  h-60 shadow">
          <img src={LOGO} className="   h-full" alt="" />
        </div>
        <div className=" py-2 gap-2 ">
          <span className=" text-2xl  lg:border-b-2 md:text-3xl">
            Dream Home is your first choice!
          </span>
          <p className=" px-2">
            Find your favorite house and live with comfortable life now. The
            best service is Dream house. Explore and contact us now.
          </p>
          <button
            id="btn"
            onClick={() => {
              const box = document.getElementById("box");

              box.classList =
                "transform  translate-y-0 opacity-100 duration-700 transition-all  w-full";
            }}
            className=" btn h-fit btn-warning shadow text-white border"
          >
            Eplore Now
          </button>
        </div>
      </div>
      <div
        id="box"
        className="   h-0 d-none  transform -translate-y-10  opacity-0 duration-1000 transition-all  w-full "
      >
        {" "}
        <h3 className=" w-full bg-amber-500 py-1"> All Our Properties</h3>
        <ul className=" text-decoration-none ps-0  justify-content-center  d-flex  text-xl flex-col flex-md-row justify-center items-center">
          <NavLink
            to="/dreamhome/gallery"
            className=" px-3 bg-amber-100  hover:bg-gray-200 hover:scale-95 transition-all duration-500 w-full text-decoration-none text-black"
          >
            All
          </NavLink>
          <NavLink
            to="/dreamhome/hotel"
            className=" px-3 bg-amber-200  hover:bg-gray-200 hover:scale-95 transition-all duration-500 w-full text-decoration-none text-black"
          >
            Hotel
          </NavLink>
          <NavLink
            to="/dreamhome/condo"
            className=" px-3 bg-amber-100  hover:bg-gray-200 hover:scale-95  hover:text-orange-400 transition-all duration-500 w-full text-decoration-none text-black"
          >
            Condo
          </NavLink>
          <NavLink
            to="/dreamhome/villa"
            className="px-3 bg-amber-200  hover:bg-gray-200 hover:scale-95 transition-all duration-500 w-full text-decoration-none text-black"
          >
            Villa
          </NavLink>
          <NavLink
            to="/dreamhome/apartment"
            className=" px-3 bg-amber-100  hover:bg-gray-200 hover:scale-95 transition-all duration-500 w-full text-decoration-none text-black"
          >
            Apartment
          </NavLink>
        </ul>
      </div>
      <CartInHomepage
        img="https://www.ahstatic.com/photos/5451_ho_02_p_1024x768.jpg
      "
        link="/dreamhome/hotel"
        type="Hotel"
        ppm="599"
        ppy="5999"
        title="The Modern Hotel in Phnom Penh"
        titleExpr="The best for freshal person."
        bedroom="10"
        livingroom="2"
        bathroom="10"
        kitchen="2"
        pool="2"
        sizeH="100"
        sizeW="200"
        bgcolor=" bg-gray-100"
        moreExpr="There are a lots of Hotels which you can book."
        Href="/dreamhome/pay1"
      ></CartInHomepage>
      <CartInHomepage
        img="https://archipro.com.au/images/s1/article/building/Form-Apartments-Port-Coogee-by-Stiebel-Eltron-.jpg/eyJlZGl0cyI6W3sidHlwZSI6InpwY2YiLCJvcHRpb25zIjp7ImJveFdpZHRoIjoxOTIwLCJib3hIZWlnaHQiOjE1NTgsImNvdmVyIjp0cnVlLCJ6b29tV2lkdGgiOjIzMTcsInNjcm9sbFBvc1giOjU2LCJzY3JvbGxQb3NZIjozMywiYmFja2dyb3VuZCI6InJnYigxMTUsMTQwLDE5NCkiLCJmaWx0ZXIiOjZ9fV0sInF1YWxpdHkiOjg3fQ==
      "
        link="/dreamhome/villa"
        type="Villa"
        ppm="500"
        ppy="6000"
        title="The Modern Villa in Phnom Penh"
        titleExpr="Very Comfortable life"
        bedroom="10"
        livingroom="2"
        bathroom="10"
        kitchen="2"
        pool="2"
        sizeH="100"
        sizeW="200"
        bgcolor=" bg-gray-100"
        moreExpr="There are a lots of Hotels which you can book."
        Href="/dreamhome/pay2"
      ></CartInHomepage>
      <CartInHomepage
        img="https://ohdidi.vn/uploads/static/HOMES/ha-noi/xavila/xavila_8.jpg"
        type="Apartment"
        link="/dreamhome/apartment"
        ppm="500"
        ppy="6000"
        Href="/dreamhome/pay3"
        title="The Comfortable Apartment in Siem Reap"
        titleExpr="The best for mountainal person."
        bedroom="12"
        livingroom="2"
        bathroom="10"
        kitchen="4"
        pool="3"
        sizeH="200"
        sizeW="350"
        bgcolor="  bg-gray-100"
        moreExpr="There are a lots of Apartment which you can book."
      ></CartInHomepage>
      <CartInHomepage
        img="https://images.realestate.com.kh/__sized__/listings/2025-03/bd-011-thumbnail-750x562-70.jpeg"
        type="Condo"
        link="/dreamhome/condo"
        ppm="550"
        ppy="6599"
        title="The populr Condo in Phnom Penh"
        titleExpr="The best for bussines work."
        bedroom="4"
        livingroom="4"
        bathroom="4"
        kitchen="2"
        Href="/dreamhome/pay4"
        pool="0"
        sizeH="50"
        sizeW="40"
        bgcolor="  bg-gray-200"
        moreExpr="There are a lots of Apartments which you can book."
      ></CartInHomepage>
    </div>
  );
};

export default BodyofHomepage;
