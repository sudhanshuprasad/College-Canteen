import React from 'react'
import "./css/Signup.css"

const host = "http://127.0.0.1:5000";

function handleSignup() {

  if (document.getElementById("password").value === document.getElementById("confirm_password").value) {

    const url = `${host}/api/auth/createUser/`;
    let credentials = {
      "email": document.getElementById('email').value,
      "password": document.getElementById('password').value,
      "phone": document.getElementById('phone').value,
      "name": document.getElementById('name').value
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
        return response.json()
      })
      .then(data => {
        localStorage.setItem('authToken', data.authToken);
      })
  } else {
    console.log("password did not match")
  }
}


export default function Signup() {

  return (
    <fieldset className='signup-details'>
      <legend>Signup</legend>
      <div className='name'>
        <label htmlFor='name'>Name:</label><br/>
        <input type="text" name='name' id='name' placeholder='Enter Your Name'></input><br/>
      </div>
      <div className='password'>
        <label htmlFor='password'>Enter password : </label><br/>
        <input type="password" name="password" id="password" placeholder='Password'></input><br/>
      </div>
      <div className='password'>
        <label htmlFor='confirm_password'>Confirm password : </label><br/>
        <input type="password" name=" confirm_password" id="confirm_password" placeholder='Confirm Password'></input><br/>
      </div>
      <div className='phone'>
        <label htmlFor='phone'>Phone Number : </label><br/>
        <input type="text" name="phone" id="phone" placeholder='Phone Number'></input><br/>
      </div>
      <div className='email'>
        <label htmlFor='email'>Email : </label><br/>
        <input type="text" name="email" id="email" placeholder='E-mail'></input><br/>
      </div>
      <div>
        <button id="submit" onClick={handleSignup}>Submit</button>
        <br/>
      </div>
    </fieldset>
  )
}

