import React, { useContext } from "react";

function Card({ product }) {
  const { title, price, image } = product;

  return (
    <div className="product-card-container">
      <img src={image} alt={`${title}`} />
      <div className="footer">
        <span className="name">{title}</span>
        <span className="price">$ {`${price}`}</span>
      </div>
    </div>
  );
}

export default Card;
