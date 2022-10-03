import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Products = () => {
  const [cart, setCart] = useState([]);
  const products = useLoaderData();
  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  return (
    <div className="grid grid-cols-4 mx-auto w-9/12 mt-28">
      <div className="grid col-span-3 grid-cols-4  ">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCart={addToCart}
          ></Product>
        ))}
      </div>
      <div className="col-span-1 bg-violet-200 sticky top-0 h-96 rounded-md ml-10 shadow-sm">
        <h1 className="font-bold py-4 underline underline-offset-8">
          Order Summary
        </h1>
        <p>Selected Item : {cart.length}</p>
      </div>
    </div>
  );
};

export default Products;
