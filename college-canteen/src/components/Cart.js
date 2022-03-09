import React from 'react';
import './css/Login.css';
import './css/Cart.css';
import Grid from './Grid';

let CartVisiblity=0;
export function toggleCartVisiblity(){
    CartVisiblity=!CartVisiblity;
    if(CartVisiblity){
        document.getElementById("cart-parent").classList.remove('active');
    }
    else{
        document.getElementById("cart-parent").classList.add('active');
    }
    console.log("Cart visiblity set to "+CartVisiblity);
    return CartVisiblity;
}

export default function Cart(props) {

    return (
        <div id='cart-parent' className='active'>
            <div className='transparentForCart' onClick={toggleCartVisiblity}>
            </div>
            <div className='cart-container'>
                <div className='cart'>
                    <button id="cart-close-btn" onClick={toggleCartVisiblity}>&#x2715;</button>
                    <div className='cart-head'><h2>Items in your cart</h2></div>
                    <div>
                       <Grid/>
                    </div>
                </div>
            </div>
        </div>
    );
}