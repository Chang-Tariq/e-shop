'use client'

import React from 'react'
import { Cart, useCartStore } from '../store/zustand';

function Total() {
    const {cart} = useCartStore();

    const calculateTotal = () => {
      return cart.reduce((acc:number, item:Cart) => acc + item?.price! * item?.quantity,0)
    }
    return (
    <div className="flex justify-between !text-base font-medium">
      <dt>Total</dt>
      <dd>£ {calculateTotal()}</dd>
    </div>
  );
}

export default Total
