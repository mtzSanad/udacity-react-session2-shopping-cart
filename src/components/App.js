import "./App.css";
import Cart from "./cart/Cart";
import Header from "./header/Header";
import Product from "./product/Product";
import React, { useState } from "react";

const productsArray = [
  {
    id: 1,
    title: "Product 1",
    desc: "ajlkdsf alksdjflak dflkadsklfjalsdkjfl ",
  },
  { id: 2, title: "Product 2", desc: "alakjsjlkaj dfalkjdslfkjaldksjfl " },
];

function App() {
  const [products, setProducts] = useState(productsArray);

  return (
    <>
      <Header />
      <main className="container">
        <Cart />
        {products.map((product) => (
          <Product key={product.id} title={product.title} desc={product.desc} />
        ))}
      </main>
    </>
  );
}

export default App;
