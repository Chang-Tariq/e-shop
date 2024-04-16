"use client";

import { useCartStore } from "@/app/store/zustand";
import React from "react";

function AddToCart({product}:any) {
  const { add, cart, incrementCartCount } = useCartStore();

  const handleAddToCart = () => {
    const alreadyInCart = cart.find((cart) => cart.id === product.id);
    if(!alreadyInCart){
        add(product);
        incrementCartCount();
    }
  }
  return (
    <button
      className="text-white mt-4 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-6 py-3 text-center me-2 mb-2"
      onClick={handleAddToCart}
    >
      Add to cart
    </button>
  );
}

export default AddToCart;
