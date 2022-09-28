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
        <div className='shop-container'>
            
            <div className='product-container'>
               {
                   products.map(product => <Product 
                    product = {product}
                    key = {product.id}
                    ></Product>)
               }
            </div>
            <div className='cart-container'>
                   <h3>Break</h3>
            </div>
        </div>
    );
};

export default Shop;