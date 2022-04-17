import "./css/Navbar.css";
import React from 'react';
import Login, { toggleLoginVisiblity } from './Login';
import Cart, { toggleCartVisiblity } from './Cart';

export default function Navbar() {

    return (
        <>
            <div className="sticky-nav">
                <div className='navbar'>
                    <ul className='nav-ul' id="left">
                        <li><h2 id="fc">FC</h2></li>
                        <li><img id='fclogo' src='https://img.icons8.com/color-glass/90/000000/bread-and-rolling-pin.png' alt='fc logo' /></li>
                    </ul>
                    <ul className='nav-ul search-area' id="search-area">
                        <li><input placeholder='Search' type='text' name='search-text' id="search-bar" /></li>
                        <li><img src='https://img.icons8.com/ios-filled/25/000000/search--v1.png' alt='search' id="search-icon" /></li>
                    </ul>
                    <ul className='nav-ul' id="right">
                        <li onClick={toggleLoginVisiblity}><p id='login'>Login</p></li>
                        <li onClick={toggleCartVisiblity}><img src="https://img.icons8.com/ios-glyphs/30/000000/shopping-cart--v1.png" alt="cart" id="cart" /></li>
                    </ul>
                </div>
            </div>
            <Login />
            <Cart />
        </>
    );
}