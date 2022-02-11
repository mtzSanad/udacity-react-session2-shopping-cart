import "./App.css";
import Cart from "./cart/Cart";
import Header from "./header/Header";
import Product from "./product/Product";
import React, { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
    console.log(products);
  }, []);

  const [shoppingCart, setShoppingCart] = useState([]);

  const addItemToCart = (item) => {
    setShoppingCart((prevItems) => [item, ...prevItems]);
  };

  return (
    <>
      <Header />
      <main className="container">
        <Cart shoppingCart={shoppingCart} products={products} />
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            desc={product.desc}
            price={product.price}
            addItemToCart={addItemToCart}
          />
        ))}
      </main>
    </>
  );
}

export default App;
