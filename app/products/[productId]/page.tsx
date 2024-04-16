import Button from '@/components/Button';
import Rating from '@/components/Rating';
import Image from 'next/image';
import React from 'react'
import AddToCart from './AddToCart';

const getProduct = async (id: number) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error", error);
  }
};
async function page({ params }: any) {

  const product = await getProduct(params.productId);
  
  return (
    <div>
      <div className="max-w-screen-xl flex flex-col mx-auto p-4 md:flex-row">
          <Image className="border border-gray-300 shadow-lg p-8 object-contain mr-2 mb-2 max-width-[100%]" src={product.image} alt="" width={400} height={240}/>
          <div className="border border-gray-300 shadow-lg py-4 pl-6 pr-4 h-fit rounded-sm">
            <Rating rating={product.rating}/>
            <h2 className="my-4 text-3xl font-bold">{product.title}</h2>
            <p className="text-blue-600 text-2xl">${product.price}</p>
            <AddToCart product={product}/>
          </div>
      </div>
    </div>
  );
}

export default page
