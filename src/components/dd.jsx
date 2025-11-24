import React from "react";

const Tailwind = () => {
  return (
    <div className="w-full pt-20 h-fit ">
      <img
        className="object-cover w-full   transform transition duration-500  hover:opacity-200 opacity-80 cursor-pointer"
        src="https://www.arizonafoothillsmagazine.com/images/stories/cdaa356a0365338625ef54d4391bd537l-m104941060rd-w1280_h960.jpg"
        alt=""
      />
      <div className="place-content-between place-items-center w-full animate-fadeIn delay-100">
        <h1 className=" text-5xl absolute top-[10%] text-white ">About Us</h1>
        <h1 className="text-7xl fw-bold mt-7 ">Who is me?</h1>
        <h2 className="text-xl text-gray-600 container w-5xl ">
          With decades of combined experience in property management, community
          development, and residential design, our team at HouseDream has
          dedicated itself to creating exceptional rental homes that blend
          comfort, quality, and long-term value.
        </h2>
        <h2 className="text-xl text-gray-600 container w-5xl mt-5">
          Our journey began with a commitment to offering more than just a place
          to stay—we sought to provide thoughtfully designed living spaces where
          individuals and families could truly feel at home. Over the years, we
          have expanded into a range of unique rental properties, from modern
          family homes in growing suburbs to charming, character-filled houses
          in historic neighborhoods.
        </h2>
        <h2 className="text-xl text-gray-600 container w-5xl mt-5">
          As demand grew for reliable, well-maintained housing, we built a
          specialized team of property managers, designers, and maintenance
          professionals who ensure that every home we offer meets the highest
          standards of safety, durability, and style. launched new rental
          communities, and helped hundreds of tenants find the perfect home
          tailored to their lifestyle. Whether you are seeking a long-term
          family residence, a cozy retreat, or a move-in-ready home close to
          schools and amenities, we are committed to providing transparent
          pricing, responsive service, and homes built to last.
        </h2>
        <h2 className="text-xl text-gray-600 container w-5xl mt-5">
          Choosing to rent with us means choosing quality, reliability, and a
          team that genuinely cares about where and how you live.
        </h2>
      </div>
      <div className="container w-full h-[50vh] bg-sky-200 rounded-3xl p-10 mt-20">
        <h1 className="text-5xl fw-bold mx-20 ">Meet The Team</h1>
        <div className=" grid grid-cols-1 gap-40 md:grid-cols-2 lg:grid-cols-3 mt-10 pl-20">
          <div className="">
            <img
              className=" w-32 rounded-full"
              src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
              alt=""
            />
            <h1>maopheaktra@gmail.com</h1>
          </div>
          <div className="">
            <img
              className="w-32 rounded-[50%]"
              src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
              alt=""
            />
            <h1>maopheaktra@gmail.com</h1>
          </div>
          <div className="grid">
            <img
              className="w-32 rounded-[50%]"
              src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
              alt=""
            />
            <h1>maopheaktra@gmail.com</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tailwind;
