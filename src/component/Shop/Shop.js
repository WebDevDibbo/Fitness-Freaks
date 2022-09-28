import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
import Myimage from '../../dibbo.jpg'

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
                   <div className='personal-info'>
                    <img src={Myimage} alt=""/>
                    <h4>Dibbo Das</h4>
                   </div>
                   <div className='about'>
                   <h3>60kg</h3>
                   <h3>5.3hgt</h3>
                   <h3>5.3hgt</h3>
                   </div>
            </div>
        </div>
    );
};

export default Shop;