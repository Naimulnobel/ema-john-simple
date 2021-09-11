import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const first10=fakeData.slice(0,10)
    
    const [products,setProducts]=useState(first10);
    const [cart,setCart]=useState([])
    useEffect(()=>{
        const savedCart= getDatabaseCart();
        const productKey= Object.keys(savedCart)
        const previousCart=productKey.map(existingKey=>{
            const product=fakeData.map(pd=>pd.key===existingKey)
            product.quantity=savedCart[existingKey]
            return product;
        })
        setCart(previousCart)
    },[])
    const handleAddProduct=(product) => {
        const toBeAddedKey = product.key
        const sameProduct=cart.find(pd=>pd.key===toBeAddedKey);
        let count=1;
        let newCart
        if (sameProduct) {
            count=sameProduct.quantity +1
            sameProduct.quantity=count
            const others=cart.filter(pd=>pd.key!==toBeAddedKey)
            newCart=[...others,sameProduct]

        }else{
            product.quantity=1;
            newCart=[...cart,product]
        }
        setCart(newCart)
      
        addToDatabaseCart(product.key,count)
    }
    
    return (
        <div className="shop-coaintner">
            
            <div className="product-coaintner">
                {
                    products.map(product=> <Product key={product.key}
                                            showAddToCart={true} 
                                            product={product} 
                                            handleAddProduct={handleAddProduct}/>)
                    
                }
            </div>
            <div className="cart-coaintner">
                   <Cart cart={cart}/>
            </div>
            
        </div>
    );
};

export default Shop;