import React, { useState, useContext } from "react";
import { alldata } from "../App";

const Scrollimage = (props) => {
  const [index, setIndex] = useState(0);

  const { moreimg } = props;
  // Use API images
  const images = moreimg ? moreimg : [];
  const nextImage = () => {
    if (images.length === 0) return;
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    if (images.length === 0) return;
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Prevent crash if no image
  if (images.length === 0) {
    return <p className="text-center text-gray-500">Loading images...</p>;
  }

  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <img
        src={images[index]}
        className="max-h-[90%] rounded-lg shadow-lg transition-all duration-300"
      />

      <i
        onClick={prevImage}
        className="absolute left-5 hover:bg-amber-200 hover:shadow-2xl flex items-center justify-center fa-solid fa-angle-left duration-500 bg-white/30 py-3 rounded-full cursor-pointer backdrop-blur text-black text-2xl"
      ></i>

      <i
        onClick={nextImage}
        className="absolute right-5 hover:bg-amber-200 hover:shadow-2xl fa-solid fa-angle-right duration-500 bg-white/30 py-3 rounded-full cursor-pointer backdrop-blur text-black text-2xl"
      ></i>
    </div>
  );
};

export default Scrollimage;
