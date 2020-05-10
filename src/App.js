import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Cart from './components/Cart/Cart';
import data from './data';
import ProductList from './components/Product/Product';
import useCart from './components/custom_hooks/useCart';


const App = () => {
  const [products, setProducts] = useState([...data]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const {cartItems, addCartItem, removeCartItem, clearCart} = useCart([], products);

  useEffect(() => {
    const results = data.filter(product => product.title.includes(searchKeyword) || product.brand.includes(searchKeyword));

    setProducts(results);

  },[searchKeyword]);

  

  return (
    <div className="App">
      <NavBar setSearchKeyword={setSearchKeyword} />
      <ProductList products={products} addCartItem={addCartItem} />
      <Cart cartItems={cartItems} removeCartItem={removeCartItem} clearCart={clearCart} />
    </div>
  );
}

export default App;
