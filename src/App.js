import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';
import data from './data';


const App = () => {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Product products={data}></Product>
      <Cart></Cart>
    </div>
  );
}

export default App;
