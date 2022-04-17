import React, { useEffect, useState } from 'react';
import './css/Login.css';
import './css/Cart.css';
import CartList from './CartList';

const host = "http://127.0.0.1:5000";


let CartVisiblity = 0;
export function toggleCartVisiblity() {
    CartVisiblity = !CartVisiblity;
    if (CartVisiblity) {
        document.getElementById("cart-parent").classList.remove('active');
    }
    else {
        document.getElementById("cart-parent").classList.add('active');
    }
    // console.log("Cart visiblity set to " + CartVisiblity);
    return CartVisiblity;
}

export default function Cart() {

    //get food items in the cart
    const [cartItem, setCartItem] = useState(
        {
            "_id": "6237035224d8a7c87bcf3a62",
            "user": "622c4f7da1d25fe6bee7b544",
            "items": [
                { "_id": "62278b1a4e90e53ae1b763bd", "quantity": 1 },
                { "_id": "62278e824e90e53ae1b763c2", "quantity": 2 },
                // {"_id":"62278c904e90e53ae1b763bf", "quantity":2},
                // {"_id":"62278ce84e90e53ae1b763c0", "quantity":2},
                // {"_id":"62278dbf4e90e53ae1b763c1", "quantity":2}
            ],
            "timestamp": "1647772498580",
            "__v": 0
        }
    );



    useEffect(() => {

        let url = `${host}/api/cart/getCart`;

        fetch(url, {
            method: 'GET',
            headers: {
                'Accept': '*/*',
                'authToken': localStorage.getItem('authToken')
            }
        })
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log("after fetch ");
                console.log(data);
                // setCartItem(data);
            })
            .catch(() => {
                console.log("some error occured while fetching GET request")
            });

        // console.log(cartItem.items)
    }, [cartItem])

    return (
        <div id='cart-parent' className='active'>
            <div className='transparentForCart' onClick={toggleCartVisiblity}>
            </div>
            <div className='cart-container'>
                <div className='cart'>
                    <button id="cart-close-btn" onClick={toggleCartVisiblity}>&#x2715;</button>
                    <div className='cart-head'><h2>Items in your cart</h2></div>
                    <div>
                        <CartList items={cartItem.items} />
                    </div>
                </div>
            </div>
        </div>
    );
}