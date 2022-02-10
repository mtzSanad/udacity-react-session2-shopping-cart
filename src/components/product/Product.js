import React, { useState } from "react";
import "./Product.css";

const Product = ({ title, desc }) => {
  const [quantity, setQuantity] = useState(0);
  console.log(quantity);

  const increaseQty = () => {
    setQuantity((prevQty) => prevQty + 1);
  };

  const descreaseQty = () => {
    setQuantity((prevQty) => prevQty - 1);
  };

  return (
    <div className="box">
      <div className="flex-h">
        <div>
          <p className="prime-text">{title}</p>
          <p className="alt-text">{desc}</p>
        </div>
        <div>
          <div className="flex-h" style={{ marginBottom: 5 }}>
            <p style={{ marginRight: 8 }}>Quantity</p>
            <button className="btn" onClick={descreaseQty}>
              -
            </button>
            <input
              type="number"
              placeholder="0"
              style={{ textAlign: "center" }}
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            />
            <button className="btn" onClick={increaseQty}>
              +
            </button>
          </div>
          <button className="btn add-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
