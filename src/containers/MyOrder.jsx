import React, { useContext } from "react";
import OrderItem from "../components/OrderItem";
import AppContext from "../context/AppContext";
import icon from "../../src/asset/icons/flechita.svg";
import "../styles/MyOrder.scss";

const MyOrder = () => {
  const  { state } = useContext(AppContext);
  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={icon} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        {state.cart.map(product => (
          <OrderItem product={product} key={`oderItem-${product.id}`} />
        ))}
        <OrderItem />
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>$560.00</p>
        </div>
        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
};

export default MyOrder;
