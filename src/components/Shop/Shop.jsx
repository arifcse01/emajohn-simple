import React, { useEffect, useState } from 'react';
import "./Shop.css"
import Product from '../Product/Product';
// import fakeData from '../../../fakeData/products.json';
const Shop = () => {
    const [products, setProducts] = useState([])
    const [cartItem, setCartItem] = useState([])


    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data=> setProducts(data))
        
    }, [])

    const handleAddToCart=(product)=>{
        const newCartItem = [...cartItem, product];
        setCartItem(newCartItem);
        console.log(newCartItem)
    }

    
    return (
        <div className='shop-container'>
            <div className='product-container'>
            {
                products.map((product)=>(<Product product={product} key={product.id} handleAddToCart={handleAddToCart}></Product>))
            }
            </div>
            <div className='cart-container'>
                <h2>Order Summary</h2>
                <p>Selected Items: {cartItem.length}</p>
            </div>                
            
        </div>
        
    );
};

export default Shop;