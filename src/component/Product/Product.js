import React from 'react';
import './Product.css'
const Product = (props) => {
    const {gymImg,name,Time} = props.product;
    const {addToList} = props;
    return (
        <div className='product'>
            <img src={gymImg} alt=""/>
            <h2>{name}</h2>
            <p>Time : {Time}</p>
            <button className='add-btn' onClick={() => addToList(props.product)}>Add To List</button>
        </div>
    );
};

export default Product;