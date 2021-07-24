import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const first10=fakeData.slice(0,10)
    console.log(first10.length)
    const [products,setProducts]=useState(first10);
    
    return (
        <div className="shop-coaintner">
            
            <div className="product-coaintner">
                {
                    products.map(product=> <Product key={product.key} product={product}/>)
                    
                }
            </div>
            <div className="cart-coaintner">
                    <h3>this is cart</h3>
            </div>
            
        </div>
    );
};

export default Shop;