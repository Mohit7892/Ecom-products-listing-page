import React, { useState } from "react";

function OrderForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [isFormDisplayed, setFormDisplayed] = useState(true);

  function handleNameChange(event) {
    setName(event.target.value);
    console.log("re-render queued");
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
    console.log("re-render queued");
  }

  function handleAddressChange(event) {
    setAddress(event.target.value);
    console.log("re-render queued");
  }

  function handleSubmit(event) {
    event.preventDefault();
    setFormDisplayed(false);
    console.log("Re-render queued");
  }

  if (!isFormDisplayed) {
    return (
      <div
        style={{ padding: "10px", border: "2px solid #333", margin: "10px" }}
      >
        <p>Order is Placed.</p>
        <p>
          Will be delivered to {name} with email : {email} and address:{" "}
          {address}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name :</label>
      <input
        style={{ padding: "10px", border: "2px solid #333", margin: "10px" }}
        id="name"
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter name.."
      ></input>
      <label>
        Email :
        <input
          style={{
            padding: "10px",
            border: "2px solid #333",
            margin: "10px",
          }}
          type="text"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter email.."
        ></input>
      </label>
      <label>
        Address :
        <input
          style={{
            padding: "10px",
            border: "2px solid #333",
            margin: "10px",
          }}
          type="text"
          value={address}
          onChange={handleAddressChange}
          placeholder="Enter Address.."
        ></input>
      </label>
      <button
        style={{
          padding: "10px",
          border: "2px solid #333",
          margin: "10px",
          borderRadius: "10px",
          background: "#15feec",
          cursor: "pointer",
        }}
        type="submit"
      >
        Place Order
      </button>
    </form>
  );
}

export default OrderForm;
