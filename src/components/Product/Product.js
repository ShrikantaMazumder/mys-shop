import React from 'react';
import './Product.css';
import data from '../../data';

const Product = ({products}) => {
    
    return (
    <div className="product-list">
        <ul>
            {products.map(product => <li>{product.id}</li>)}
        </ul>
    </div>
    );
};

export default Product;