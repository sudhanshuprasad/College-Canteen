import React from 'react'
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './css/Login.css'

const host = "http://127.0.0.1:5000";


function handlelogin() {
    const url = `${host}/api/auth/login`;
    let credentials = {
        "email": document.getElementById('User_Id').value,
        "password": document.getElementById('password').value
        // "email": "mymail@gmail.com",
        // "password": "fcukyou"
    }
    
    fetch(url, {
        method: 'POST',
        headers: {
            'Accept': '*/*',
            "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
    })
    .then(response => {
        // setLogin(true);
        return response.json()
    })
    .then(data => {
        localStorage.setItem('authToken', data.authToken);
    })
    .then(()=>{
        console.log(localStorage.getItem('authToken'));
    });
    
}

export default function Login() {
    
    const [login, SetLogin]=useState(false);
    
    return (
        <div id='login-parent' /* className='active' */>
            <div /* className='transparent' */ /* onClick={toggleLoginVisiblity} */>
            </div>
            <div className='login-container'>
                <div className='login'>
                    <div>
                        <label htmlFor='User_ID'>Enter ID:</label><br />
                        <input type="text" name='User_ID' id='User_Id' placeholder='User ID'></input><br />
                    </div>
                    <div>
                        <label htmlFor='password'>Enter password:</label><br />
                        <input type="password" name="password" id="password" placeholder='Password'></input><br />
                    </div>
                    <div>
                        <button onClick={handlelogin}>Login</button>
                        <br />
                    </div>
                    <div>
                        <p>New User?</p>
                        <Link to="/signup" >Sign Up</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}