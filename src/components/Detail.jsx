import React from "react";
import im3 from "../assets/img3.jpg";
import bg from "../assets/Bgpayment.png";
import Scrollimage from "./Scrollimage";
import { NavLink } from "react-router-dom";
const Detail = (props) => {
  const {
    id,
    img,
    extraimg,
    title,
    des,
    bedroom,
    livingroom,
    bathroom,
    pool,
    a,
    b,
    ppm,
    ppy,
    link,
    locationtxt,
    locationlink,
    ownername,
    ownerphone,
    ownertelegram,
    owneremail,
    ownerfacebook,
    ownergoogle,
    moreimg,
  } = props;
  return (
    <>
      <div
        style={{ minHeight: "100vh" }}
        className=" mt-20 flex justify-center px-2 flex-col items-center w-full"
      >
        <div className=" rounded bg-amber-300 grid p-2 gap-2 grid-cols-1 md:grid-cols-2 w-full ">
          <div className=" lg:px-3 rounded-4xl  bg-blue-100 border  flex justify-center items-center overflow-hidden">
            <div className=" h-fit shadow rounded-4xl  w-fit relative">
              <img
                src={img}
                style={{ maxHeight: "500px" }}
                className="rounded-br-4xl"
                alt=""
              />
              <img
                src={bg}
                style={{ bottom: "" }}
                className=" transform bottom-0 rounded-tl-4xl  h-32 rotate-180  w-full  absolute"
                alt=""
              />
            </div>
          </div>
          <div className=" w-full bg-gray-100">
            <div className=" p-2 bg-amber-200 w-full">
              <h3 className=" shadow bg-amber-300">{title}</h3>
              <span className="">{des}</span>
            </div>
            <div className=" bg-gray-100 w-full">
              <div className=" font-bold border-b">Properties</div>
              <div className=" w-full grid grid-cols-4">
                <div className=" bg-gray-200">
                  <div>Bedroom</div>
                  <div>{bedroom}</div>
                </div>
                <div className=" bg-gray-300">
                  <div>Livingroom</div>
                  <div>{livingroom}</div>
                </div>
                <div className=" bg-gray-200">
                  <div>Bathroom</div>
                  <div>{bathroom}</div>
                </div>
                <div className=" bg-gray-300">
                  <div>Pool</div>
                  <div>{pool}</div>
                </div>
              </div>
              <div className=" bg-amber-200">
                <span> Area : </span>
                <span>
                  {a}
                  <i class="fa-solid fa-xmark"></i>
                  {b} m<sup>2</sup>
                </span>{" "}
              </div>
              <div className=" h-60 d-md-none mt-2">
                <Scrollimage moreimg={moreimg} />
              </div>
            </div>

            <div className=" bg-gray-300 p-2 w-full">
              <div className=" w-full bg-amber-300 text-white font-bold">
                Price
              </div>

              <div className=" px-2 w-full  grid grid-cols-2">
                <div className=" flex flex-col  ">
                  <span className=" bg-amber-200">PPM</span>
                  <div className=" bg-amber-100">{ppm}$</div>
                </div>
                <div className=" flex flex-col">
                  <span className=" bg-amber-100">PPY</span>
                  <div className=" bg-amber-200">{ppy}$</div>
                </div>
              </div>
            </div>
            <div className=" p-2 bg-gray-200">
              <div className=" bg-amber-300 text-white font-bold">location</div>
              <div className=" w-full px-2">
                <div className=" px-2 bg-amber-100">{locationtxt}</div>
                <div className=" flex px-3 bg-amber-200  justify-between">
                  <div className=" font-bold">link :</div>
                  <div
                    style={{ width: "80%", height: "24px" }}
                    className=" text-gray-500 rounded overflow-hidden"
                  >
                    <a href={locationlink}>
                      <i class="fa-solid fa-location-dot"></i>
                      {locationlink}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-full p-2 bg-gray-300">
              <div className=" bg-amber-300">Onwer</div>
              <div className=" px-2 w-full">
                <div className=" w-full bg-amber-200  gap-8 px-3 flex">
                  <div className=" font-bold">Name</div>
                  <div>{ownername}</div>
                </div>
                <div className=" bg-amber-100 gap-3 px-3 flex">
                  <div className=" font-bold">Phone Number</div>
                  <div>{ownerphone}</div>
                </div>
                <div className=" flex flex-col w-full">
                  <div className=" w-full flex">
                    <div className=" w-full border-b"></div>or{" "}
                    <div className=" w-full border-b"></div>{" "}
                  </div>
                </div>
                <div className=" bg-amber-300  w-full flex  gap-3 py-2  justify-center text-lg">
                  <a
                    href={ownerfacebook}
                    className="  text-decoration-none text-black fa-brands fa-facebook"
                  ></a>
                  <a
                    href={ownertelegram}
                    className=" text-black text-decoration-none fa-brands fa-telegram"
                  ></a>
                  <a
                    href={ownergoogle}
                    className=" text-black text-decoration-none fa-brands fa-google"
                  ></a>
                </div>
                <div className=" gap-2 justify-center flex">
                  <div className="">Email:</div>
                  <a>{owneremail}</a>
                </div>
              </div>
            </div>
          </div>
          <div className=" rounded gap-2 text-sm bg-gray-100 p-3 w-full justify-center  flex flex-col">
            <span>
              Atfer you know about all home's information, if you interest with
              it you can contact to owner or our team to know more, and then you
              can booking.
            </span>
            <span>Quickly you click button below.</span>
            <NavLink
              to={link}
              id={id}
              className=" shadow  text-lg  h-10 btn btn-success"
            >
              Get Now
            </NavLink>
          </div>
          <div className=" bg-amber-50  d-none d-md-inline  h-40">
            <Scrollimage moreimg={moreimg} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
