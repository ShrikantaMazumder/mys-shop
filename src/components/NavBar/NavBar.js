import React, { useContext } from 'react';
import './NavBar.css';
import ThemeContext from '../Context/ThemeContext';

const NavBar = ({setSearchKeyword}) => {
    const { dark, toggle} = useContext(ThemeContext);
    const handleChange = e => {
        setSearchKeyword(e.target.value);
    }
    return (
       
        <div className="nav-bar">
            <span>My Shop</span>
            <input placeholder="search" onChange={handleChange}/>
            <button onClick={toggle}>Change Theme</button>
        </div>
        
    );
};

export default NavBar;