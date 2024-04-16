"use client";

import React from "react";
import { useCartStore } from "../store/zustand";
import CartItem from "./CartItem";

function CartItems() {
  const{cart} = useCartStore();

  return (
    <>
      {cart && cart.length > 0 ? cart?.map((cartItem: any) => (
        <CartItem {...cartItem} />
      )): <h1 className="text-2xl text-gray-700">Cart is Empty</h1>}
    </>
  );
}

export default CartItems;
