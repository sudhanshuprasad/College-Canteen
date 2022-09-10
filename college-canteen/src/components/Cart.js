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
    const cartSize = useSelector(state => state.cartSize);
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
                    console.log(data[0].items);
                    setCartItem(data[0].items);
                    dispatch(actionCreaters.setCart(data[0].items));

                    let cartSize=0
                    data[0].items.map((element)=>{
                        cartSize+=element.quantity;
                    })

                    dispatch(actionCreaters.setCartSize(cartSize));
                    setLoaidng(false);
                })
                .catch(() => {
                    // console.log("some error occured while fetching GET request")
                });
        }

    }, [host])

    // console.log(cartItem)

    const handleCheckout = () => {
        let url = `${host}/api/order/checkout`;
        fetch(url,{
            method:'POST',
            headers:{
                'Accept': '*/*',
                'authToken': localStorage.getItem('authToken')
            }
        })

        navigate("/order")
    }

    const handleDelete = () => {
        let url = `${host}/api/cart/updateCart`;
        fetch(url, {
            method: "PUT",
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
                "authToken": localStorage.getItem('authToken')
            },
            body: `{"items": []}`
        })
            .then(response => response.json())
            .then((data) => {
                data.success !== null && setCartItem([]);
                console.log(data.success)
            })
    }

    // if (!loaidng && cartItem !== undefined) {
    return (<>

        {loaidng ? <div>loading</div> : null}

        {cartItem?.map((element) => (
            <>
                {/* console.log(element._id) */}
                <CartItem
                    key={element._id}
                    id={element._id}
                    quantity={element.quantity}
                    update
                />
            </>
        ))}
        {/* {console.log(arr)}{arr[0]?._id} */}
        <button onClick={handleCheckout}>Checkout...</button>
        <button onClick={handleDelete}>Delete All</button>
    </>
    )
    // } else {
    //     //do not use multiple return statement next time
    //     return (
    //         <>login to see the cart</>
    //     )
    // }

}