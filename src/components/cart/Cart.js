import React from "react";
import "./Cart.css";

const Cart = ({ shoppingCart, products }) => {
  const cartView = shoppingCart?.map((item) => {
    const [product] = products.filter((p) => p.id == item.id);

    return (
      <div key={item.id}>
        {`${product.title} - ${item.quantity} PCs - ${
          product.price * item.quantity
        }`}
      </div>
    );
  });
  return (
    <div className="box">
      <header className="cart-header">My Cart</header>
      <section className="cart-section">
        {shoppingCart?.length ? cartView : "Your cart is Empty"}
      </section>
    </div>
  );
};

export default Cart;
