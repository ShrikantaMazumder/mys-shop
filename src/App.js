import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Cart from './components/Cart/Cart';
import data from './data';
import ProductList from './components/Product/Product';


const App = () => {
  const [products, setProducts] = useState([...data]);
  const [cartItems, setCartItems] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    const results = data.filter(product => product.title.includes(searchKeyword) || product.brand.includes(searchKeyword));

    setProducts(results);

  },[searchKeyword]);

  // Add cart
  const addCartItem = (id) => {
    const item = products.find(product => product.id === id);
    setCartItems((items)=>
      {
        const itemIndex = items.findIndex(currentItem => currentItem.id === id);
        
        if ( itemIndex === -1 ) {
          return [
            ...items,{ // Previously add items
            ...item, // Newly added item
            quantity: 1,
            }
          ];
        } else {
          return items.map(currentItem => 
            currentItem.id === id ?
            {
            ...item,
            quantity: parseInt(currentItem.quantity) + 1,
          } : currentItem);
        }
      }
    );
  };

  // Remove Cart Item
  const removeCartItem = (id) => {
    setCartItems((items) => items.filter(item => item.id !== id));
  };

  // Clear CartItems
  const clearCart = () => {
    const res = window.confirm('Are you sure to perform the action?');
    if (res === true) {
      setCartItems([]);
    }
  }

  return (
    <div className="App">
      <NavBar setSearchKeyword={setSearchKeyword} />
      <ProductList products={products} addCartItem={addCartItem} />
      <Cart cartItems={cartItems} removeCartItem={removeCartItem} clearCart={clearCart} />
    </div>
  );
}

export default App;
