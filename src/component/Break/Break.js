import React from 'react';
import './Break.css'
const Break = (props) => {
    const {addToBreak} = props;
    
    return (
//       
        <div className='break'>
           <h2>Add a Break</h2>
           <div className='time'>
           <button onClick= {(e) => addToBreak(e)} value='10'>10s</button>
           <button onClick= {(e) => addToBreak(e)} value='20' className='unique'>20s</button>
           <button onClick= {(e) => addToBreak(e)} value='30'>30s</button>
           <button onClick= {(e) => addToBreak(e)} value='40'>40s</button>
           <button onClick= {(e) => addToBreak(e)} value='50'>50s</button>
           </div>
        </div>
    );
};

export default Break;