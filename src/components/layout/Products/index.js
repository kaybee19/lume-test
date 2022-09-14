import React from "react";
import "./styles.scss";

// Component
import Product from "./Product";

export default function index(props) {
  const { title, description, items, background } = props.data;

  return (
    <div className="products-class">
      <h4>{title}</h4>
      <small>{description}</small>
      <div className="product-container d-flex space-between">
        {items?.map((item, i) => (
          <Product key={i} background={background} item={item} />
        ))}
      </div>
    </div>
  );
}
