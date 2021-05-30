import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = (props) => {
  const { img, name, seller, price, stock } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="img" />
      </div>
      <div>
        <h4 className="product-name">{name}</h4>

        <p>
          <small>By : {seller}</small>
        </p>
        <p> Price : ${price}</p>

        <p>
          <small>Only {stock} left</small>
        </p>
        <button
          className="btnn"
          onClick={() => props.handleAddProduct(props.product)}
        >
          <FontAwesomeIcon icon={faShoppingCart} /> Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
