import "./App.css";
import Cart from "./cart/Cart";
import Header from "./header/Header";
import Product from "./product/Product";
import React, { useState } from "react";

const productsArray = [
  {
    id: 1,
    title: "Product 1",
    price: 10,
    desc: "ajlkdsf alksdjflak dflkadsklfjalsdkjfl ",
  },
  {
    id: 2,
    title: "Product 2",
    price: 20,
    desc: "alakjsjlkaj dfalkjdslfkjaldksjfl ",
  },
];

function App() {
  const [products, setProducts] = useState(productsArray);

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
