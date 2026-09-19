import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import ProductCards from "./Components/ProductCards";
import ProductList from "./Components/ProductList";
import Section from "./Components/Section";
import Footer from "./Components/Footer";

function App() {
  // products array of product objects
  const products = [
    {
      id : 1,
      name: "Wireless mouse",
      price: 1266,
      category: "Electronics",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9qosEJqvHH2bnKTo9g57QRuxXRXPnwayYVnYSWHLVpg&s=10",
    },

    {
      id : 2,
      name: "Wireless Keyboard",
      price: 3266,
      category: "Electronics",
      url: "data:image/jpeg;base64,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/JdV0X2LWZNr9a1FsQ8Y4G5PqVvuieznszo+10dAWJR/mWDvPp0UHAdK0PWtZIbRpTyt82sw31W86J7HtWn2yanZhqDxAO9/9/ddwiijhaGxRtY0dA0YCvQaTo3sz7P6btM0T7cjT+KY8egW31adamzZVgjhb0wxoCz4RBTCqiICIiDRe2ljXK2rRSaV2fZqMPcgPlGdzTk8cFbB2Sfak0Gu+/SNKdxcXVz+Tkr2cBMJFrjHt79+dqOkNcH/AMOETy0gZHe5wcj/AG4x9StF0anBI/fsmnczlzWRE4AX0H2v7PM7R6Y6nI4NGdzSfA/LyWi9nOweu9mNYlt1zDbhkjLCzdtPJGERqNfU6NeEQzOEMpGXBw2kHy58lZNqNKFpkNqLb14OV6nb/sl2i1jV/fYNJeWmJrHNyHcjPPC1mp7PO0Us7QdEe0Z5c4cItepoExt97ZjBc6Z2yIAcrufZyB9XSq8D/wAjAFq/YnsU/S445b7W940cNHRq3tjAwYCGrkREQREQEREBULQeqqiDzta0mDV9Ns0LAPdWIyxxHUfNc3p+xHTxafNqGqWJ2udnu2NDB6rrKINc0XsR2c0XDqOlwCQf5kjd7vUrYWjaAAMAeHkrkQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBEVEFUREBERAREQEREBERAREQEREBERAREQEREBERAREQEREFEREBERB//Z",
    },

    {
      id : 3,
      name: "Laptop Stand",
      price: 6266,
      category: "Electronics",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlOSBuqBKmfkv8e5BfjjaJFpgtSZNpApJDDN2VvRNAHA&s=10",
    },
  ];

  const[searchText,setSearchText] = useState("");
  

  function searchItem(event){
     console.log(event.target);
     console.log(event.type);
     console.log(event.target.value);
     setSearchText(event.target.value);
    // searchValue = event.target.value;
  }
  console.log("Re-rendering the component App.jsx")

  const filteredProductList = products.filter((product)=>{
    return product.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase());
  });

  // let counter = 0;
  function clickHandler(value){
    setCounter((prevCounter) => prevCounter+value); //asyn
    console.log(counter);
  }

  const [counter, setCounter] = useState(0);

  return (
    <>
      <Section>
        <h1>Welcome to my product listings</h1>
        <button style={{margin:"0 auto", display:"block"}} onClick={()=>clickHandler(2)}>+
        </button>
        <p>Count : {counter}</p>
        <input type="search" placeholder="Seach item.." style={{
          padding:"10px",
          margin: "10px",
          border : "3px solid #000000",
          maxWidth: "300px"
        }}
        onChange={searchItem}
        />
      </Section>
      

      {/* <ProductCards {...product1}/> 
      <ProductCards {...product2}/>
      <ProductCards {...product3}/> */}


      {/* <div style={{ display: "flex", flexFlow: "row wrap", gap: "16px" }}>
        {products.map(function (product) {
          return <ProductCards {...product} />;
        })}
      </div> */}
        <Section title="Featured-Products">
          <ProductList products={filteredProductList}/>
        </Section>

        <Section title="About us">
          <Footer/>
        </Section>

    </>
  );
}

export default App;
