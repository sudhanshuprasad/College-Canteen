import React, { useContext, useEffect, useState } from 'react';
import './css/Login.css';
import './css/Cart.css';
import CartItem from './CartItem';
import urlContext from '../context/api_url/urlContext';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreaters } from '../state';

// const host = "http://127.0.0.1:5000";


export default function Cart() {

    const host = useContext(urlContext);
    const navigate = useNavigate();
    let arr = useSelector(state => state.cart);
    const dispatch = useDispatch();


    //get food items in the cart
    const [loaidng, setLoaidng] = useState(true);

    const [cartItem, setCartItem] = useState();


    useEffect(() => {

        let url = `${host}/api/cart/getCart`;

        // if(true||localStorage.getItem('authToken')!==null){
        if (localStorage.getItem('authToken') !== null) {

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
                    // console.log("after fetch ");
                    // console.log(data[0].items);
                    setCartItem(data[0].items);
                    dispatch(actionCreaters.setCart(data[0].items));
                    setLoaidng(false);
                })
                .catch(() => {
                    // console.log("some error occured while fetching GET request")
                });
        }

    }, [host])

    console.log(cartItem)

    const handleCheckout = () => {
        let url = `${host}/api/cart/checkout`;

        navigate("/order")
    }

    if (!loaidng && cartItem !== undefined) {
        return (<>
        

            {cartItem?.map((element) => (
                <>
                    {/* {console.log(element._id)} */}
                    <CartItem
                        key={element._id}
                        id={element._id}
                        quantity={element.quantity}
                        update
                    />
                </>
            ))}
            {console.log(arr)}{arr[0]?._id}
            <button onClick={handleCheckout}>Checkout...</button>
            <button>Delete All</button>
            </>
        )
    } else {
        //do not use multiple return statement next time
        return (
            <>login to see the cart</>
        )
    }

}