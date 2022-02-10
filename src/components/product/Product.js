import React from "react";
import "./Product.css";

const Product = ({ title = "TEST", desc = "DESAC" }) => {
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
            <button className="btn">-</button>
            <input
              type="number"
              placeholder="0"
              style={{ textAlign: "center" }}
            />
            <button className="btn">+</button>
          </div>
          <button className="btn add-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
