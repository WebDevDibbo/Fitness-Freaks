import React from 'react';
import './Header.css'
import logo from '../../dumbell.png'
const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <h1 className='header-text'>Fitness Freaks</h1>
        </div>
    );
};

export default Header;