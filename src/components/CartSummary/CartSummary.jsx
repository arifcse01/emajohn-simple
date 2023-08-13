import React from 'react';
import './CartSummary.css';

const CartSummary = ({cartItem}) => {
    
    let totalPrice = 0;
    let shippingCost = 0;
    let quantity = 0; 

    for (const product of cartItem){
        if(product.quantity === 0){
            product.quantity = 1;
        }
        
        // product.quantity = product.quantity || 1;

        totalPrice = totalPrice + product.price * product.quantity;
        shippingCost = shippingCost + product.shipping;
        quantity = quantity + product.quantity;
    }

    const tax = totalPrice * 5/100;
    const totalAmmount =(totalPrice + shippingCost + tax).toFixed(0);

    return (
        <div className='cart-summary'>
            <h2>Order Summary</h2>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: $ {totalPrice}</p>
            <p>Shipping Cost: $ {shippingCost} </p>
            <p>Tax: $ {tax.toFixed(0)}</p>
            <p>Total Amount: $ {totalAmmount}</p>
        </div>
    );
};

export default CartSummary;