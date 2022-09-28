import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
import Myimage from '../../dibbo.jpg'
import Break from '../Break/Break';
import Exercise from '../Exercise/Exercise';


const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const addToList = (product) => {
        const newCart = [...cart,product]
        setCart(newCart);
        // console.log('clicked',product.id)
    }
    return (
        <div className='shop-container'>
            
            <div className='product-container'>
               {
                   products.map(product => <Product 
                    product = {product}
                    key = {product.id}
                    addToList = {addToList}
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
                   <Break></Break>
                  <Exercise cart = {cart}></Exercise>
            </div>
        </div>
    );
};

export default Shop;