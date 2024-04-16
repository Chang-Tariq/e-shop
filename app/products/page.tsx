"use client"

import Filters from "@/components/Filters";
import Pagination from "@/components/Pagination";
import Product from "@/components/Product";
import SortBy from "@/components/SortBy";
import Link from "next/link";
import React, { useEffect, useState } from "react";


function Products() {
    const [products, setProducts] = useState([])
    const [limit, setLimit] = useState(6);
    const apiUrl = `https://fakestoreapi.com/products?limit=${limit}`;
    
    const getProducts = async () => {
      const response = await fetch(apiUrl);
      const data = await response.json();

      setProducts(data);
    };

    useEffect(() => {
        getProducts();
    }, [limit])
    
    const totalPages = Math.ceil(20/6);

    
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-2 sm:px-4 sm:py-4 lg:px-8">
          <Pagination
            limit={limit}
            setLimit={setLimit}
            activePage={limit / 6}
            totalPages={totalPages}
          />
          <div className="mt-8 block lg:hidden">
            <button className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
              <span className="text-sm font-medium"> Filters & Sorting </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4 rtl:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>

          <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
            <div className="z-0 hidden sticky top-20 space-y-4 lg:block">
              <SortBy/>
              <Filters/>
            </div>

            <div className="lg:col-span-3">
              <header>
                <h2 className="text-xl mb-2 font-bold text-gray-800 sm:text-3xl">
                  Products
                </h2>
                <small className="text-gray-500">
                  Page {limit / 6} of {totalPages}
                </small>
              </header>
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {products.slice(limit - 6, limit + 1).map((product: any) => {
                  return (
                    <Link href={`/products/${product.id}`}>
                      <Product key={product.id} {...product} />
                    </Link>
                  );
                })}
              </ul>
            </div>
          </div>
          <Pagination
            limit={limit}
            setLimit={setLimit}
            activePage={limit / 6}
            totalPages={totalPages}
          />
        </div>
      </section>
    </div>
  );
}

export default Products;
