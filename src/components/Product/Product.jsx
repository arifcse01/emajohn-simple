import React from 'react';
import './Product.css'

const Product = (props) => {
    const { img, id, category, name, seller, price, rating } = props.product;
    return (
        <div className='cart'>
            <img src={img} alt="" />
            <div className='cart-info'>
                <h6 className='cart-name'>{name}</h6>
                <h4>$ {price}</h4>
                <p>Manufacturer: {seller}</p>
                <p>{rating}</p>
            </div>
            <button className='cart-btn'>Add To Cart</button>
        </div>
    );
};

export default Product;