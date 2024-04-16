import Image from "next/image";
import React from "react";

function Product(props:any) {
    const {title, image, price} = props;

    const formatTitle = (title:string) => {
        if(title.length > 30){
            return title.slice(0,30) + '...';
        }
        return title;
    }
  return (
    <li>
      <a href="#" className="group pt-3 px-2 block overflow-hidden border shadow-lg rounded-md">
        <Image
          src={image}
          alt={title}
          width={450}
          height={300}
          className="h-[280px] w-full object-contain transition duration-500 group-hover:scale-105 sm:h-[280px]"
        />

        <div className="relative bg-white p-3">
          <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
            {formatTitle(title)}
          </h3>

          <p className="mt-2">
            <span className="sr-only"> Regular Price </span>

            <span className="tracking-wider text-gray-900"> $ {price} </span>
          </p>
        </div>
      </a>
    </li>
  );
}

export default Product;
