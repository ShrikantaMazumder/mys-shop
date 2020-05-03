import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Cart from './components/Cart/Cart';
import data from './data';
import ProductList from './components/Product/Product';


const App = () => {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ProductList products={data}></ProductList>
      <Cart></Cart>
    </div>
  );
}

export default App;
