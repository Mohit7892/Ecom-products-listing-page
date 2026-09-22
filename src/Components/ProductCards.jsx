import React, { useState } from "react";

function ProductCards({ name, price, category, url, onCartCount }) {
  // para-meter de-structing
  // const {name, category, price} = props; // body de-structing
  const [cartCount, setCartCount] = useState(0);
  const [isFav, setFav] = useState(true);

  function handleDecrement() {
    if (cartCount === 0) {
      alert("Items cannot be less than 0");
      return;
    }
    setCartCount(cartCount - 1);
  }

  function handleIncrement() {
    if (cartCount === 10) {
      alert("Max 10 items can be added!!");
      return;
    }
    setCartCount(cartCount + 1);
  }

  function handleFav(event) {
    setFav(function (prev) {
      return !prev;
    });
  }

  function handleAddToCart() {
    onCartCount(cartCount);
    setCartCount(0);
  }
  return (
    <div
      style={{
        boxSizing: "border-box",
        padding: "10px",
        border: "2px solid #333",
        borderRadius: "2px",
        margin: "5px",
        maxWidth: "250px",
        margin: "16px",
        display: "flex",
        flexFlow: "column wrap",
        justifyContent: "end",
      }}
    >
      <img
        src={url}
        alt={name}
        style={{ maxWidth: "100%", aspectRatio: "auto" }}
      ></img>
      <h3>Name : {name}</h3>
      <button onClick={handleFav}>
        {isFav ? "Add to Favourite" : "Remove from Favourite"}
      </button>
      <p>Category : {category}</p>
      <p>Price : {price}</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "5px",
          padding: "5px",
        }}
      >
        <button onClick={handleDecrement}>-</button>
        <span>{cartCount}</span>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCards;
