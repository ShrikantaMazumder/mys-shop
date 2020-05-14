import React, { useContext } from 'react';
import './Product.css';
import ThemeContext from '../Context/ThemeContext';
import ListProduct from './ListProduct';


const ProductList = ({products, addCartItem}) => {
    const {dark} = useContext(ThemeContext);
    return (
    <div className={`product-list ${dark ? 'dark' : 'light'}`}>
        {products.map((product, i) => <ListProduct key={i} {...product} addCartItem={addCartItem} />)}
    </div>
    );
};

export default ProductList;