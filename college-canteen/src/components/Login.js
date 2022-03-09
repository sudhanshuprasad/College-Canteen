import React from 'react'
import './css/Login.css'

let LoginVisiblity=0;
export function toggleLoginVisiblity(){
    LoginVisiblity=!LoginVisiblity;
    if(LoginVisiblity){
    document.getElementById("login-parent").classList.remove('active');
    }
    else{
        document.getElementById("login-parent").classList.add('active');
    }
    console.log("visiblity set to "+LoginVisiblity);
    return LoginVisiblity;
}

function handlelogin(params) {
    
}

export default function Login(props) {

    return (
        <div id='login-parent' className='active'>
            <div className='transparent' onClick={toggleLoginVisiblity}>
            </div>
            <div className='login-container'>
                <div className='login'>
                    <div id="close-btn" onClick={toggleLoginVisiblity}>&#x2715; </div>
                    <div>
                        <label htmlFor='ID'>Enter ID:</label><br />
                        <input type="text" name='ID' placeholder='User ID'></input><br />
                    </div>
                    <div>
                        <label htmlFor='ID'>Enter password:</label><br />
                        <input type="password" name="password" placeholder='Password'></input><br />
                    </div>
                    <div>
                        <button onClick={handlelogin}>Login</button><br />
                    </div>
                    <div>
                        <p>New User?</p>
                        <p>Sign Up</p>
                        {/* <h3 onClick={toggleLoginVisiblity}>Cancel</h3> */}
                    </div>
                </div>
            </div>
        </div>
    );
}