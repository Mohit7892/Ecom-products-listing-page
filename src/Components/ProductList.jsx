import React from "react";
import ProductCards from "./ProductCards";

function ProductList({ products, onCartCount }) {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "row wrap",
        gap: "16px",
        justifyContent: "center",
      }}
    >
      {products.map(function (product) {
        return (
          <ProductCards
            key={product.id}
            {...product}
            onCartCount={onCartCount}
          />
        );
      })}
    </div>
  );
}

export default ProductList;
