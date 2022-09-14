import React from "react";
import "./Bundle.scss";

export default function Bundle(props) {
  const { productName, productImage, productPrice } = props.bundle;

  return (
    <div className="bundle-class d-flex space-between">
      <span className="bundle-img">{productImage}</span>
      <div className="bundle-info">
        <h5>{productName}</h5>
        <small>${productPrice}</small>
      </div>
    </div>
  );
}
