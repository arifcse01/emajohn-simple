import React, { useEffect, useState } from 'react';
import "./Shop.css"
import Product from '../Product/Product';
import CartSummary from '../CartSummary/CartSummary';
import { addToDb, getShoppingCart } from '../../../utilities/fakedb';
// import fakeData from '../../../fakeData/products.json';
const Shop = () => {
    const [products, setProducts] = useState([])
    const [cartItem, setCartItem] = useState([])
    
    const saveCart = [];


    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, []);

    useEffect(() => {
        const storedCart = getShoppingCart();
        for (const id in storedCart) {
            const addProduct = products.find(product => product.id === id);

            if (addProduct) {
                const quantity = storedCart[id];
                addProduct.quantity = quantity;
                saveCart.push(addProduct);
            }
        }
        setCartItem(saveCart);
    }, [ products ])

    const handleAddToCart = (product) => {
        const newCartItem = [...cartItem, product];
        setCartItem(newCartItem);
        addToDb(product.id);
    }


    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map((product) => (<Product product={product} key={product.id} handleAddToCart={handleAddToCart}></Product>))
                }
            </div>
            <div className='cart-container'>
                <CartSummary cartItem={cartItem} />
            </div>

        </div>

    );
};

export default Shop;