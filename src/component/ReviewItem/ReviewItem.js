import React from "react";

const ReviewItem = (props) => {
  const { name, quantity,key,price } = props.product;
  const reviewStyle = {
    border: "1px solid lightgray",
    marginBottom: "5px",
    paddingBottom: "5px",
  };
  return (
    <div style={reviewStyle} className="review">
      <h4 className="product-name">{name}</h4>
      <p>Quantity: {quantity}</p>
      <p><small>Price: {price}</small></p>
      <button onClick={()=>{props.handleRemoveProduct(key)}} className="main-button">Remove </button>
    </div>
  );
};

export default ReviewItem;
