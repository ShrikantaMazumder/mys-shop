import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ThemeContext from './components/Context/ThemeContext';
import Checkout from './components/Checkout/Checkout';
import ProductDetails from './components/Product/ProductDetails';
import Home from './components/Home/Home';


const App = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    setDark(isDark => !isDark);
  }

  return (
    <ThemeContext.Provider value={{ dark: dark, toggle: toggleDark }}>
      <div className={`App ${dark ? 'dark' : 'light'}`}>
        <Router>
          <NavBar setSearchKeyword={setSearchKeyword} />
          <Switch>

            <Route path='/checkout' component={Checkout} />

            <Route path='/product-details/:id' component={ProductDetails} />

            <Route path="/" component={()=><Home searchKeyword={searchKeyword} />} />

            {/* <Route path="/checkout">
              <Checkout></Checkout>
            </Route> */}
            {/* <Route path="/product-details/:id">
              <ProductDetails />
            </Route> */}
            {/* <Route exact path="/">
              <Home></Home>
            </Route> */}

          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
