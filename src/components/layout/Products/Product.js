import React from "react";
import "./Product.scss";
import { useApp } from "../../../context/AppContext";
import {
  AiOutlinePlus as Add,
  AiOutlineMinus as Subtract,
} from "react-icons/ai";

export default function Product(props) {
  const { addBundle, removeBundle, selectedBundles } = useApp();
  const [count, setCount] = React.useState(0);

  const { productName, productImage, productPrice } = props.item;

  const handleAdd = () => {
    setCount(count + 1);
    addBundle(props.item);
  };

  const handleSubtract = () => {
    setCount(count - 1);
    removeBundle(props.item);
  };

  return (
    <div className={`product-class ${count > 0 ? "selected" : ""}`}>
      <div
        className="img-container d-flex center"
        style={{ backgroundColor: props.background }}
      >
        {productImage}
        <div className="button-container d-flex center">
          {count > 0 && (
            <React.Fragment>
              <Subtract className="button-class" onClick={handleSubtract} />
              <div className="count-class">{count}</div>
            </React.Fragment>
          )}
          {count < 10 && (
            <Add
              className={`button-class ${
                selectedBundles.length > 2 ? "disabled" : ""
              }`}
              onClick={handleAdd}
            />
          )}
        </div>
      </div>
      <p>
        <strong>{productName}</strong>
      </p>
      <small>${productPrice}</small>
    </div>
  );
}
