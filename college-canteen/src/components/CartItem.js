import React, { useContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreaters } from "../state/index";
import "./css/CartItem.css";
import urlContext from "../context/api_url/urlContext";

// const host = "http://127.0.0.1:5000";

export default function CartItem(props) {

    const host = useContext(urlContext)


    const dispatch = useDispatch();
    const quantity = useSelector(state => state.quantity);

    //decrease quantity
    const decqnt = () => {
        console.log("decrease quantity")
    }


    //increase quantity
    const incqnt = () => {
        console.log("increase quantity")

        //to get the cart and modify it
        fetch(`${host}/api/cart/getCart`, {
            method: 'GET',
            headers: {
                'Accept': '*/*',
                "Content-Type": "application/json",
                'authToken': localStorage.getItem('authToken')
            }
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data[0].items);
            });

        fetch(`${host}/api/cart/updateCart`, {
            method: 'PUT',
            headers: {
                'Accept': '*/*',
                "Content-Type": "application/json",
                'authToken': localStorage.getItem('authToken')
            }
        })
            .then(() => {
                //to update the cart according to the order
                const url = `${host}/api/cart/updateCart`

                fetch(url, {
                    method: 'PUT',
                    headers: {
                        'Accept': '*/*',
                        "Content-Type": "application/json",
                        'authToken': localStorage.getItem('authToken')
                    },
                    // body: `{"items":${JSON.stringify(cartItem)}}`
                });
            })

    }

    const [item, setItem] = useState({price:0, name:"unnamed"});

    useEffect(() => {
        const url = `${host}/api/fooditem/getFood/${props.id}`
        fetch(url)
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log(data);
                if(data!==null)
                    setItem(data);
            });

    }, [props])

    return (
        <div className="cartitem" id={"item" + item?._id}>
            <div className="cartItem_image">
                <img src="https://picsum.photos/30" alt="food" />
            </div>
            <div className="cartitem_content">
                <div className="cartitem_name">
                    <h3>{item?.name}</h3>
                    <h3>&#8377;{item?.price}</h3>
                </div>
                <div className="quantity">
                    <button onClick={decqnt}>-</button>
                    <h2>Quantity: {props.quantity}</h2>
                    <button onClick={incqnt}>+</button>
                    {/* <button onClick={()=>{dispatch(actionCreaters.decqt(1, props.id))}}>-</button>
                    <h2>Quantity: {props.quantity} and {quantity}</h2>
                    <button onClick={()=>{dispatch(actionCreaters.incqt(1))}}>+</button> */}
                </div>
            </div>
        </div>
    );
}

CartItem.propTypes = {
    quantity: PropTypes.number.isRequired,
}
CartItem.defaultProps = {
    quantity: 0,
    // item: {price:0, name:"unNamed"}
}