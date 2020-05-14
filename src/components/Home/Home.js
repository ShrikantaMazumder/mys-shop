import React, { useState, useEffect } from 'react';
import Cart from '../Cart/Cart';
import ProductList from '../Product/Product';
import useCart from '../custom_hooks/useCart';
import data from '../../data';

const Home = ({ searchKeyword }) => {
    const [products, setProducts] = useState([...data]);
    const {cartItems, addCartItem, removeCartItem, clearCart} = useCart([], products);

    useEffect(() => {
        const results = data.filter(product => product.title.includes(searchKeyword) || product.brand.includes(searchKeyword));
    
        setProducts(results);
    
      },[searchKeyword]);
      
    return (
        <>
            <ProductList products={products} addCartItem={addCartItem} />
            <Cart cartItems={cartItems} removeCartItem={removeCartItem} clearCart={clearCart} />
        </>
    );
};

export default Home;