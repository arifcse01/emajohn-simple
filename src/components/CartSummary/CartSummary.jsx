import React from 'react';
import './CartSummary.css';

const CartSummary = ({cartItem}) => {
    
    let totalPrice = 0;
    let shippingCost = 0;
    for (const product of cartItem){
        totalPrice = totalPrice + product.price;
        shippingCost = shippingCost + product.shipping;
    }

    const tax = totalPrice * 5/100;
    const totalAmmount =(totalPrice + shippingCost + tax).toFixed(0);

    return (
        <div className='cart-summary'>
            <h2>Order Summary</h2>
            <p>Selected Items: {cartItem.length}</p>
            <p>Total Price: $ {totalPrice}</p>
            <p>Shipping Cost: $ {shippingCost} </p>
            <p>Tax: $ {tax.toFixed(0)}</p>
            <p>Total Amount: $ {totalAmmount}</p>
        </div>
    );
};

export default CartSummary;