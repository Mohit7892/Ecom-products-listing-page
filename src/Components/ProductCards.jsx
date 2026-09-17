import React from "react";

function ProductCards({ name, price, category, url }) {
  // para-meter de-structing
  // const {name, category, price} = props; // body de-structing
  return (
    <div
      style={{
        padding: "10px",
        border: "2px solid #333",
        borderRadius: "2px",
        margin: "5px",
        maxWidth: "250px",
        margin: "16px",
        display : "flex",
        flexFlow : "column wrap",
        justifyContent : "end"
      }}
    >
      <img src={url} alt={name} style={{ maxWidth: "100%" , aspectRatio: "auto"}}></img>
      <h3>Name : {name}</h3>
      <p>Category : {category}</p>
      <p>Price : {price}</p>
    </div>
  );
}

export default ProductCards;
