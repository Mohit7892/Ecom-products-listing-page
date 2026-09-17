import React from "react";
import ProductCards from "./ProductCards";

function ProductList({products}) {
  return (
    <div style={{ display: "flex", flexFlow: "row wrap", gap: "16px" }}>
      {products.map(function (product) {
        return <ProductCards {...product} />;
      })}
    </div>
  );
}

export default ProductList;
