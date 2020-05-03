import React from 'react';
import './NavBar.css';

const NavBar = ({setSearchKeyword}) => {
    const handleChange = e => {
        setSearchKeyword(e.target.value);
    }
    return (
        <div className="nav-bar">
            My Shop
            <input placeholder="search" onChange={handleChange}/>    
        </div>
        
    );
};

export default NavBar;