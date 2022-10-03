import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import React from "react";

const Product = ({ product, addToCart }) => {
  const { name, seller, ratings, img, price } = product;
  return (
    <div className="w-64 h-[470px] text-start mb-4 rounded-md relative shadow-md shadow-gray-500">
      <img className="rounded-t-md" src={img} alt="" />
      <div className="space-y-6 mx-5 mt-4">
        <div>
          <h1 className="font-bold">{name}</h1>
          <p>Price : ${price}</p>
        </div>
        <div className="absolute bottom-16 text-sm">
          <p>Manufecture : {seller}</p>
          <p>Rating : {ratings}</p>
        </div>
      </div>
      <div className="absolute bottom-0 w-full text-center bg-indigo-600 text-white py-2 rounded-b-md">
        <button
          onClick={() => addToCart(product)}
          className="flex justify-center items-center w-full space-x-3"
        >
          <p className="text-sm">Add To Cart</p>
          <ShoppingBagIcon className="w-4 h-4"></ShoppingBagIcon>
        </button>
      </div>
    </div>
  );
};

export default Product;
