import React from 'react';
import './Break.css'
const Break = () => {
    return (
        <div className='break'>
           <h2>Add a Break</h2>
           <div className='time'>
           <span>10s</span>
           <span className='unique'>20s</span>
           <span>30s</span>
           <span>40s</span>
           <span>50s</span>
           </div>
        </div>
    );
};

export default Break;