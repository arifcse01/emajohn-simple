import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
    const { img, category, name, seller, price, ratings } = props.product;
    const handleAddToCart = props.handleAddToCart;

    return (
        <div className='cart'>
            <img src={img} alt="" />
            <div className='cart-info'>
                <h6 className='cart-name'>{name}</h6>
                <p>{category}</p>
                <p>Price: $ {price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rattings: {ratings}</p>
            </div>
            <button onClick={()=> handleAddToCart(props.product)} className='cart-btn'> Add To Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;