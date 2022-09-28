import React from 'react';
import './Exercise.css'
const Exercise = (props) => {
    const {cart} = props;
    let time = 0;
    for(const product of cart){
        time = parseInt(time) +parseInt(product.Time);
    }
     
    return (
        <div className='exercise'>
            <h3>Exercise Details</h3>
            <h4>Exercise time : {time} seconds</h4>
            <h4>Break time : 0 seconds</h4>
            <button className='activity-btn'>Activity Completed</button>
        </div>
    );
};

export default Exercise;