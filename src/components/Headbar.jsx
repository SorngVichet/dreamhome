import React from "react";
import bgpayment from "../assets/Bgpayment.jpg";
import logo from "../assets/LOGO3.png";

const Headbar = () => {
  return (
    <>
      <div className=" w-full top-0 grid  relative  grid-cols-1 md:grid-cols-2 ">
        <div style={{ height: "200px" }} className=" relative">
          <img src={bgpayment} className=" h-full absolute top-0" alt="" />
          <img src="" alt="" />
        </div>
        <div style={{ height: "200px" }} className=" relative">
          {" "}
          <img
            src={bgpayment}
            className=" transform h-full rotate-180 absolute  bottom-0"
            alt=""
          />
        </div>
        <div className="  absolute h-full w-full d-flex  justify-between  gap-3 flex-column flex-md-row p-4 items-center">
          <div className=" flex items-center gap-3">
            <img
              src={logo}
              className=" w-32 bg-white rounded-full p-1"
              alt=""
            />
            <div className=" flex flex-col ">
              <span className=" text-2xl font-bold text-orange-600">
                Welcome to <span className=" text-orange-400">Dream</span>{" "}
                <span className=" text-blue-600">Home</span>
              </span>
              <span className=" text-orange-400 text-sm">
                Sale or Rent a lots of kind of home.
              </span>
            </div>
          </div>
          <div className=" h-full py-8 flex flex-col ">
            <span className=" text-xl font-bold">
              Happy EveryDay with Your Dream House!
            </span>
            <span className=" text-gray-500">
              We all thank you so much for using our service. We promice to try
              our best to make you easiest.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Headbar;
