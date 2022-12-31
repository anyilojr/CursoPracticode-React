import React from "react";
import ProductInfo from "../components/ProductInfo";
import icon from "../../src/asset/icons/icon_close.png";
import "../styles/ProductDetail.scss";

const ProductDetail = () => {
  return (
    <aside className="ProductDetail">
      <div className="ProductDetail-close">
        <img src={icon} alt="close" />
      </div>
      <ProductInfo />
    </aside>
  );
};

export default ProductDetail;
