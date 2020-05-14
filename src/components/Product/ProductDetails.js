import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data';

const ProductDetails = () => {
    const {id} = useParams();
    const products = [...data];
    const productDetails = products.find(product => product.id === id);
    return (
        <div>
            <h2>{console.log(productDetails)}</h2>
        </div>
    );
};

export default ProductDetails;