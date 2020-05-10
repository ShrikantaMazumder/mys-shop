import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Cart from './components/Cart/Cart';
import data from './data';
import ProductList from './components/Product/Product';
import useCart from './components/custom_hooks/useCart';
import ThemeContext from './components/Context/ThemeContext';


const App = () => {
  const [products, setProducts] = useState([...data]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [dark, setDark] = useState(false);
  const {cartItems, addCartItem, removeCartItem, clearCart} = useCart([], products);

  useEffect(() => {
    const results = data.filter(product => product.title.includes(searchKeyword) || product.brand.includes(searchKeyword));

    setProducts(results);

  },[searchKeyword]);

  const toggleDark = () => {
    setDark(isDark => !isDark);
  }

  

  return (
    <ThemeContext.Provider value={{ dark: dark, toggle: toggleDark }}>
      <div className={`App ${dark ? 'dark' : 'light'}`}>
        <NavBar setSearchKeyword={setSearchKeyword} />
        <ProductList products={products} addCartItem={addCartItem} />
        <Cart cartItems={cartItems} removeCartItem={removeCartItem} clearCart={clearCart} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
