import React, { useContext } from 'react';
import './Product.css';
import ThemeContext from '../Context/ThemeContext';

const Product = ({id, title, brand, price, image_url, addCartItem}) => {

    return (
        <div className='product'>
            <img src={image_url} alt={title}/>
            <div className="title">
                <span>{title}</span>
                <span>{brand}</span>
            </div>
            <div className="actions">
                <span>$ {price}</span>
                <button onClick={() => addCartItem(id)}>Add to cart</button>
            </div>
        </div>
    );
}

const ProductList = ({products, addCartItem}) => {
    const {dark} = useContext(ThemeContext);
    return (
    <div className={`product-list ${dark ? 'dark' : 'light'}`}>
        {products.map((product, i) => <Product key={i} {...product} addCartItem={addCartItem} />)}
    </div>
    );
};

export default ProductList;