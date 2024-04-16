"use client";

import { Cart } from "@/app/store/zustand";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function Carousel() {
  const [carouselItems, setCarouselItems] = useState<string[]>();
  const [index, setIndex] = useState<number>(0);
  const getCarouselItems = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products?limit=4");
      const data = await response.json();
      const images = data.map((item: Cart) => item.image);
      setCarouselItems(images);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCarouselItems();

    const carouselItemsInterval = setInterval(() => {
      if (index < 3) setIndex(index + 1);
      else setIndex(0);
    }, 3000);

    return () => {
      clearInterval(carouselItemsInterval);
    };
  }, [index]);

  const prev = () => {
    index === 0 ? setIndex(carouselItems!.length - 1) : setIndex(index - 1);
  };
  const next = () => {
    index === carouselItems!.length - 1 ? 0 : setIndex(index + 1);
  };
  return (
    <div>
      <div className="relative h-[60dvh] flex flex-col justify-center items-center mt-10 rounded-tl-3xl rounded-br-3xl p-4 shadow-lg object-contain">
        {carouselItems && (
          <Image
            src={carouselItems![index]}
            alt={""}
            width={200}
            height={200}
            className="w-auto h-72 transition-transform ease-out duration-300"
            style={{ transform: `scale(${90}%)` }}
          />
        )}
        <div className="absolute flex items-center justify-between p-4 text-gray-600 w-full">
          <button onClick={prev}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 hover:text-gray-900"
            >
              <path
                fillRule="evenodd"
                d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <button onClick={next}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 hover:text-gray-900"
            >
              <path
                fillRule="evenodd"
                d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="flex justify-center items-center space-x-4 p-4">
          {carouselItems &&
            carouselItems.map((item, idx) => {
              return (
                <button
                  className={`${
                    idx === index ? "bg-gray-700" : "bg-gray-300"
                  } w-3 h-3 rounded-full`}
                ></button>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
