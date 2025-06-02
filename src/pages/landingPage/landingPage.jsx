import React from "react";
import "./landing.css";
import Cart from "../../feature/cart/Cart";

const LandingPage = (props) => {
  const item = {...props}
  return (
    <div>
      <div className="boxContainer">
            <div className="boxes" key={item.id}>
              <div className="box">
                <img src={item.image} alt="chess" />
                <p className="title">{item.title}</p>
                <Cart item={item} />
              </div>
            </div>
      </div>
    </div>
  );
};

export default LandingPage;
