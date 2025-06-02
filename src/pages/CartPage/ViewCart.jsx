import React from "react";
import "./viewCart.css";
import { useSelector } from "react-redux";

const ViewCart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  if (cartItems.length === 0) {
    return <p className="zero">Your cart is empty. (0 items)</p>;
  }

  return (
    <div>

      {cartItems.map((item) => (
        <div className="cartItems">
          <div className="cartItem">
          <p>
            Name: {item.title} Quantity: {item.qt}
          </p>
          <p className="price">Price: <span>Rs {item.price}</span></p>
          </div>
        </div>
      ))}
      {/* <p className="totalPrice">Total Price: {cartItems.map(i => i.price).reduce((accumulator, currentValue) => accumulator + currentValue, 0)}</p> */}
    </div>
  );
};

export default ViewCart;
