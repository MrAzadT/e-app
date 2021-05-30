import React from "react";

const Cart = (props) => {
  const cart = props.cart;
  const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);
  const tax = Math.round(totalPrice / 10);
  const grandTotal = (totalPrice + Number(tax)).toFixed(2);
  return (
    <div>
      <h4>Order Summary</h4>
      <p>Items Ordered : {cart.length} </p>
      <p>Tax : {tax}</p>
      <p>Total Price : {grandTotal}</p>
    </div>
  );
};

export default Cart;
