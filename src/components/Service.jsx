import React from "react";
import Headbar from "./Headbar";
import HeaderPage from "./HeaderPage";
import img1 from "../img/Img1.jpg";
import img2 from "../img/Img2.jpg";
import img3 from "../img/Img3.jpg";
import img4 from "../img/Img4.jpg";
import img5 from "../img/Img5.jpg";
import img6 from "../img/Img6.jpg";
import img7 from "../img/Img7.jpg";
import img8 from "../img/Img8.jpg";

const Service = () => {
  return (
    <div
      id="servicepage"
      style={{ minHeight: "100vh" }}
      className="   px-2 pt-20  w-full"
    >
      <Headbar />
      <HeaderPage heading="SERVICES" />
      <div className=" md:text-lg">
        First of all, we thank you for using our website and come to this page
        to find more our services!
      </div>
      <div>We are so happy to help you when you need us!</div>
      <div className="  w-full grid gap-3 p-3 grid-cols-1 lg:grid-cols-2">
        <div className=" shadow p-2 bg-gray-300">
          <div>
            <h2>1</h2>
            <div className=" font-bold">Rent a lots of kind of home</div>
          </div>
          <div>
            We have a lots kind of hotel, villa, condo and apartment to rent for
            you. If you need you can contact us now by using phone mumber or
            plateform which we give you.
          </div>
        </div>
        <div className=" shadow bg-gray-200 p-2">
          <div>
            <h2>2</h2>
            <div className=" font-bold">Sale a lots of kind of home</div>
          </div>
          <div>
            If you don't want to rent, you can buy instead you will become to
            it's owner forever.Especaily,you also spend less then renting. If
            you are interrest you can contact us 24 hours.
          </div>
        </div>
        <div className=" shadow bg-gray-300 p-2">
          <div>
            <h2 className="">3</h2>
            <div className=" font-bold">Building home for you</div>
          </div>
          <div>
            Beside of rent and sale home, we also have building a lot of kind of
            home link hotel, vills, condo, apartment and so on.
          </div>
        </div>
        <div>
          <div>
            <h2>Extra Services</h2>
            <div className=" ">I am a Graphic Designer!</div>
          </div>
          <div className=" p-3 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
            <div className=" border p-2 shadow flex justify-center items-center">
              <img className=" h-40" src={img1} alt="" />
            </div>
            <div className=" border p-2 shadow flex justify-center items-center">
              <img className=" h-40" src={img2} alt="" />
            </div>
            <div className=" border p-2 shadow flex justify-center items-center">
              <img className=" h-40" src={img3} alt="" />
            </div>
            <div className=" border p-2 shadow flex justify-center items-center">
              <img className=" h-40" src={img4} alt="" />
            </div>
            <div className=" border p-2 shadow flex justify-center items-center">
              <img className=" h-40" src={img5} alt="" />
            </div>
            <div className=" border p-2 shadow flex justify-center items-center">
              <img className=" h-40" src={img6} alt="" />
            </div>
            <div className=" border p-2 shadow flex justify-center items-center">
              <img className=" h-40" src={img7} alt="" />
            </div>
            <div className=" border p-2 shadow flex justify-center items-center">
              <img className=" h-40" src={img8} alt="" />
            </div>
          </div>
          <div>
            In you want me dedign poster, banner, pruches, logo and so on, you
            can contact me by my plateform below.
            <a href="#site-footer">contact me</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
