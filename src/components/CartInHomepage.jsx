import React, { Children } from "react";
import { NavLink } from "react-router-dom";
const CartInHomepage = (props) => {
  const {
    img,
    type,
    ppm,
    ppy,
    title,
    titleExpr,
    bedroom,
    livingroom,
    bathroom,
    kitchen,
    pool,
    sizeH,
    sizeW,
    bgcolor,
    moreExpr,
    link,
    Href,
  } = props;
  return (
    <div
      className={`px-2   gap-x-3 d-flex flex-column align-items-center pb-2 flex-lg-row ${bgcolor}`}
    >
      <div style={{ width: "fit-content" }} className=" relative py-4 ">
        <img src={props.img} style={{}} className="  md:w-full lg:h-60" />
        <div className=" absolute  top-8 start-5 text-2xl bg-amber-400 text-white px-2 rounded">
          {props.type}
        </div>
        <div className=" top-20 px-2 start-3 absolute bg-red-500  text-white">
          {props.ppm}$/month
        </div>
        <div className=" top-32 px-2 start-3 absolute bg-red-500 text-white">
          {props.ppy}$/year
        </div>
        <div
          style={{}}
          className="h-b1  w-full  absolute text-xl bottom-6  py-2"
        >
          {props.title}
        </div>
      </div>
      <div
        style={{ maxWidth: "700px" }}
        className="  justify-center   w-auto  py-3  items-center gap-3 px-6  flex flex-col"
      >
        <div>
          <h4>{props.title}</h4>
          <span>{"(" + props.titleExpr + ")"}</span>
        </div>
        <div className=" w-full  ">
          <span className=" px-2 font-bold flex items-start bg-gray-400">
            Properties:
          </span>
          <div className=" grid grid-cols-2 gap-x-4 bg-gray-300 px-2 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-4">
            <div className=" flex gap-2 items-center">
              <i class="fa-solid fa-bed"></i>
              <span>Bedroom {props.bathroom}</span>
            </div>
            <div className=" flex gap-2 items-center">
              <i class="fa-solid fa-bath"></i>
              <span>Bathroom {props.bathroom}</span>
            </div>
            <div className=" flex gap-2 items-center">
              <i class="fa-solid fa-people-robbery"></i>
              <span>Livingroom {props.livingroom}</span>
            </div>
            <div className=" flex gap-2 items-center">
              <i class="fa-solid fa-person-drowning"></i>
              <span>Pool {props.pool}</span>
            </div>
          </div>
          <div>
            <div className=" flex flex-col bg-gray-300">
              <span className=" flex items-start bg-gray-400 px-2 font-bold">
                Size :
              </span>
              <span>
                {props.sizeH}
                <i class="fa-solid fa-xmark"></i>
                {props.sizeW} m<sup>2</sup>
              </span>
            </div>
            <div>
              <span className=" bg-gray-400 px-2 flex items-start font-bold">
                Price :
              </span>
              <div className=" grid grid-cols-2 bg-gray-300">
                <div className=" border-e">{props.ppm}$ per month</div>
                <div>{props.ppy}$ per year</div>
              </div>
            </div>
          </div>
          <NavLink to={Href} className=" mt-2 btn border border-black">
            Book Now
          </NavLink>
        </div>
      </div>
      <div
        style={{ maxWidth: "450px" }}
        className=" flex items-center flex-col gap-1"
      >
        <span> {props.moreExpr}</span>
        <NavLink
          to={link}
          className="  text-decoration-none w-50 btn btn-primary"
        >
          Explore More
        </NavLink>
      </div>
    </div>
  );
};

export default CartInHomepage;
