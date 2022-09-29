import React from 'react';
import './Exercise.css'
const Exercise = (props) => {
    const {cart , breakTime} = props;
    
    let time = 0;
    for(const product of cart){

        time = parseInt(time) +parseInt(product.Time);
    }

    let addBreak = 0;
    for(const newTime of breakTime){

         addBreak = parseInt(newTime);   
    }
     
    return (
        <div className='exercise'>
            <h3>Exercise Details</h3>
            <h4>Exercise time : {time} seconds</h4>
            <h4>Break time :  {addBreak} seconds</h4>
            <button className='activity-btn'>Activity Completed</button>
        </div>
    );
};

export default Exercise;