import React from "react";
import img3 from "../assets/img3.jpg";
import BodyofHomepage from "./BodyofHomepage";
import bgpay from "../assets/Bgpayment.png";
const Homepage = () => {
  return (
    <>
      <div
        id="homepage"
        style={{ marginTop: "70px" }}
        className=" relative w-full  box-home  border"
      >
        <div className=" w-full absolute z-10 transform rotate-180 h-full ">
          <img src={bgpay} alt="" />
        </div>
        <div className=" z-20 flex items-end   py-3 justify-center h-full w-full absolute">
          <a
            href="#body"
            style={{ fontSize: "20px", borderRadius: "5px" }}
            className=" px-4 btn1    d-sm-none d-flex  text-white  fw-bold  text-decoration-none  border  md:px-3 md:py-2   py-1   bg-amber-400"
          >
            Get Start
          </a>
        </div>
        <img src={img3} alt="" className=" w-full" />
        <div className=" border p-3 lg:grid lg:grid-cols-2  lg:p-3   absolute top-0 right-0 w-full h-full ">
          <div className=" relative border d-none d-lg-flex p-3 items-center  justify-center gap-1 ">
            <div
              style={{ width: "130px", height: "fit-content" }}
              className=" flex flex-col border  skew-y-12 "
            >
              <div
                style={{ height: "160px" }}
                className=" border overflow-hidden"
              >
                <img
                  src="https://i.pinimg.com/736x/e7/da/e3/e7dae3bc62142cdbdc43aa56e4125303.jpg"
                  alt=""
                  style={{ width: "100%" }}
                />
              </div>
              <span className=" bg-amber-50 py-2">🏊‍♀️Private Swimming Pool</span>
            </div>
            <div
              style={{
                width: "130px",
                height: "fit-content",
                marginBottom: "10px",
              }}
              className=" flex flex-col "
            >
              <div
                style={{ height: "200px" }}
                className=" border overflow-hidden"
              >
                <img
                  src="https://i.pinimg.com/736x/71/20/eb/7120ebff7acbf2e2c0962b95d91c15bd.jpg"
                  alt=""
                  style={{ width: "100%" }}
                />
              </div>
              <span className="bg-amber-50 py-2">🧘‍♀️Peacefull Yuga Court</span>
            </div>
            <div
              style={{ width: "130px", height: "fit-content" }}
              className=" flex flex-col border  -skew-y-12"
            >
              <div
                style={{ height: "160px" }}
                className=" border overflow-hidden"
              >
                <img
                  src="https://i.pinimg.com/1200x/3d/9d/15/3d9d15a7f9693bd58a74da9a098bed98.jpg"
                  alt=""
                  style={{ width: "100%" }}
                />
              </div>
              <span className=" bg-amber-50 py-2">📺Nice Living Room</span>
            </div>
            <div
              style={{ widow: "90%", bottom: "40px" }}
              className=" absolute  p-2  "
            >
              <div className=" bg-amber-50 p-2   rounded-2xl">
                <h4 className=" border-bottom">Happy With Dream House!</h4>
                <span style={{ fontSize: "16px" }}>
                  Making your dream home a reality--Trusted listings of houses
                  and apartments for sale.
                </span>
              </div>
            </div>
          </div>
          <div
            className=" px-2
         b1 text-blue-500   justify-start pb-2  flex flex-col items-center sm:justify-center  border    w-full h-full "
          >
            <span className="  text-red-500 lg:text-5xl md:text-4xl fw-bold text-3xl ">
              Welcome To <span className=" text-orange-400">Dream</span>{" "}
              <span className=" text-blue-600">Home</span> Website
            </span>
            <span className=" md:text-xl text-yellow-600">
              Modern & Luxury Home for Specail!
            </span>
            <p className="  text-white">
              Here are a lots of kind of home, apartment and vila for you rent!
            </p>
            <a
              href="#body"
              style={{ fontSize: "20px", borderRadius: "5px" }}
              className=" px-4  d-sm-flex d-none text-white  fw-bold  text-decoration-none  border  md:px-3 md:py-2   py-1   bg-amber-400"
            >
              Get Start
            </a>
          </div>
        </div>
      </div>
      <BodyofHomepage />
    </>
  );
};

export default Homepage;
