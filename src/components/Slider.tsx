"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in NY",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/slide3.jpg",
  },
];

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }, 2000);

    return () => clearInterval(interval);
  });
  return (
    <div className="flex flex-col  h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
      <div className="h-1/2 lg:h-full flex-1 flex flex-col justify-center items-center  gap-8 text-red-500 font-bold">
        <h1 className="text-3xl text-center md:p-10 uppercase p-4 md:text-4xl xl:text-5xl">
          {data[currentSlide].title}
        </h1>
        <button className="bg-red-500 text-white py-4 px-8">Order Now</button>
      </div>
      <div className="flex-1 w-full relative h-1/2 lg:h-full">
        <Image
          className="object-cover "
          src={data[currentSlide].image}
          alt=""
          fill
        />
      </div>
    </div>
  );
}

export default Slider;
