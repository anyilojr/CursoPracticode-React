import React from "react";
import icon from "../../src/asset/icons/flechita.svg";
import "../styles/Order.scss";

const Order = () => {
  return (
    <div className="Order">
      <p>
        <span>03.25.21</span>
        <span>6 articles</span>
      </p>
      <p>$560.00</p>
      <img src={icon} alt= "flecha" />
    </div>
  );
};

export default Order;
