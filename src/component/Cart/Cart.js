import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart =props.cart
    const total=cart.reduce((total,product) =>total+product.price*product.quantity,0)
    let shipping=0
    if(total>35){
        shipping=0;
    }else if(total>15){
        shipping=4.99
    }
    else if(total>0){
        shipping=12.99
    }
    const tax =Math.round(total / 10) 
    return (
        <div>
            <h4 className='text-primary'>Order Summary</h4>
            <p>Item Ordered:{cart.length}</p>
            <p>Product Price:{total}</p>
            <p>shipping Cost: ${shipping}</p>
            <p><small>Tax: ${tax}</small></p>
            <p>Total Price: {total+shipping+tax}</p>
            <br/>
            
            <Link to='/review'><button className='main-button'>Review Order</button></Link>
        </div>
    );
};

export default Cart;