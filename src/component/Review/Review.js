import React, { useEffect, useState } from "react";
import fakeData from "../../fakeData";
import {
    getDatabaseCart,
    removeFromDatabaseCart
} from "../../utilities/databaseManager";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
const Review = () => {
  const [cart, setCart] = useState([]);
  const handleRemoveProduct = (productKey) => {
    const newCart = cart.filter((pd) => pd.key !== productKey);
    setCart(newCart);
    removeFromDatabaseCart(productKey);
  };
  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);
    const cartProduct = productKeys.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = savedCart[key];
      return product;
    });
    setCart(cartProduct);
  }, []);
  return (
    <div className="shop-coaintner">
      <div className="product-coaintner">
        {cart.map((product) => (
          <ReviewItem
            key={product.key}
            handleRemoveProduct={handleRemoveProduct}
            product={product}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}/>
      </div>
    </div>
  );
};

export default Review;
