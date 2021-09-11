import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import {
  Link
} from "react-router-dom";
import "./Product.css";
const Product = (props) => {
  
  const { name, img, seller, price, stock, key } = props.product;
  return (
    <div className="product">
      <div className="">
        <img src={img} alt="" />
      </div>
      <div>
        <h4 className="product-name"><Link to={'/product/' + key}>{name}</Link></h4>
        <br />
        <p>
          <small>by:{seller}</small>
        </p>
        <p> Price:${price}</p>
        <br />
        <p>
          <small>Only {stock} left in stock.</small>
        </p>
       {props.showAddToCart && <button onClick={()=>props.handleAddProduct(props.product)} className="main-button"> <FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>}
      </div>
    </div>
  );
};

export default Product;
