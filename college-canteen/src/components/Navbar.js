import "./css/Navbar.css";
import React, { useEffect } from 'react';
// import { useEffect, useNavigate} from 'react-router-dom';
// import Login from './Login';
// import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actionCreaters } from "../state/index";


export default function Navbar() {

    const dispatch = useDispatch();
    const login = useSelector(state => state.login);

    // const [login, SetLogin] = useState([Boolean(localStorage.getItem('authToken'))]);
    // let navigate=useNavigate();
    const handleLogout = () => {
        // SetLogin(false)
        dispatch(actionCreaters.setLogin(false))
        localStorage.removeItem("authToken");
        // navigate('/');
    }

    useEffect(() => {
        if (Boolean(localStorage.getItem('authToken'))) {
            // SetLogin(true);
        }
        else {
            // SetLogin(false);
        }
    }, [])

    return (
        <>
            <div className="sticky-nav">
                <div className='navbar'>
                    <ul className='nav-ul' id="left">
                        <li><Link to="/home"><h2 id="fc">FC</h2></Link></li>
                        <li><img id='fclogo' src='https://img.icons8.com/color-glass/90/000000/bread-and-rolling-pin.png' alt='fc logo' /></li>
                    </ul>
                    <ul className='nav-ul search-area' id="search-area">
                        <li><input placeholder='Search' type='text' name='search-text' id="search-bar" /></li>
                        <li><img src='https://img.icons8.com/ios-filled/25/000000/search--v1.png' alt='search' id="search-icon" /></li>
                    </ul>
                    <ul className='nav-ul' id="right">
                        {!login ? <li onClick={() => {
                                // SetLogin(true);
                                // dispatch(actionCreaters.setLogin(!login))
                            }}><Link to="/login"><p id='login'>Login</p></Link></li>
                            : <li onClick={handleLogout}><p id='login'>Logout</p></li>}
                        <li><Link to="/cart"><img src="https://img.icons8.com/ios-glyphs/30/000000/shopping-cart--v1.png" alt="cart" id="cart" /></Link></li>
                        <li>10</li>
                    </ul>
                </div>
            </div>
        </>
    );
}