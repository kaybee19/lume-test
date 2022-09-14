import React from "react";
import "./styles.scss";
import { apiUtils } from "../../services/api/apiUtils";

// Components
import Products from "../../components/layout/Products";
import BundleContainer from "../../components/layout/BundleContainer";

export default function index() {
  const { categories } = apiUtils;

  return (
    <div className="home container">
      <h3>Lume Bundle Builder</h3>
      <div className="d-flex">
        <div className="body">
          {categories.map((data, i) => (
            <Products data={data} key={i} />
          ))}
        </div>
        <BundleContainer />
      </div>
    </div>
  );
}
