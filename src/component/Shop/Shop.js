import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProduct] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    return (
        <div>
            <div className='logo'>
                <h1 className='header-text'>Fitness Freaks</h1>
            </div>
            <div className='product-container'>
               {
                   products.map(product => <Product product = {product}></Product>)
               }
            </div>
            <div className='cart-container'>

            </div>
        </div>
    );
};

export default Shop;