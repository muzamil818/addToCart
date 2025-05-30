import React from "react";
import "./landing.css";
import Cart from "../../feature/cart/Cart";
import propPassing from "../../feature/cart/items/items";

const LandingPage = ({ image, title, price }) => {
  const items = propPassing({ img: image, title, price });
  return (
    <div>
      <div className="boxContainer">
        {items.map((item) => {
          return (
            <div className="boxes" key={item.id}>
              <div className="box">
                <img src={item.image} alt="chess" />
                <p className="title">{item.product}</p>
                <Cart price={item.price} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LandingPage;
