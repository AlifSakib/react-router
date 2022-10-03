import React from "react";

const Order = ({ cart }) => {
  console.log(cart);
  let totalPrice = 0;
  let totalShippinng = 0;

  for (let item of cart) {
    totalPrice = item.price * cart.length;
    totalShippinng = item.shipping * cart.length;
  }
  let tax = parseFloat((totalPrice * 0.1).toFixed(2));
  return (
    <div className="flex justify-center">
      <div className="space-y-3 text-start">
        <p>Selected Item : {cart.length}</p>
        <p>Total Price : $ {totalPrice}</p>
        <p>Shipping : $ {totalShippinng}</p>
        <p>Tax : $ {tax}</p>
        <h1 className="font-bold">
          Grand Total : {totalPrice + totalShippinng + tax}
        </h1>
      </div>
    </div>
  );
};

export default Order;
