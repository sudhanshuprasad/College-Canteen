import React, { useContext, useEffect, useMemo, useState } from "react";
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreaters } from "../state/index";
import "./css/CartItem.css";
import urlContext from "../context/api_url/urlContext";
import { useNavigate } from "react-router-dom";
import ModifyCart from "../utilities/ModifyCart";

// const host = "http://127.0.0.1:5000";

// let cart = [{
//     _id: "props.id",
//     quantity: "quantity",
//     user_id: "localStorage.getItem('user_id')",
// },{
//     _id: "props.id+1", 
//     quantity: "quantity",
//     user_id: "localStorage.getItem('user_id')",
// },
// {
//     _id: "props.id+2",
//     quantity: "quantity",
//     user_id: "localStorage.getItem('user_id')",

// }];

export default function CartItem(props) {

    const host = useContext(urlContext)
    const navigate = useNavigate();


    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(props.quantity);
    let cartArray = useSelector(state => state.cart);



    //decrease quantity
    const decqnt = () => {
        // console.log("decrease quantity")
        if (quantity > 1) {

            const url = `${host}/api/cart/insertCart`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    "authToken": localStorage.getItem('authToken')
                },
                body: JSON.stringify({
                    _id: props.id,
                    quantity: quantity - 1,
                })
            })

            setQuantity(quantity - 1);
        }
    }


    //increase quantity
    const incqnt = () => {
        console.log({
            _id: props.id,
            quantity: quantity + 1,
        })

        const url = `${host}/api/cart/insertCart`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "authToken": localStorage.getItem('authToken')
            },
            body: JSON.stringify({
                "_id": props.id,
                "quantity": quantity + 1,
            })
        })

        setQuantity(quantity + 1);
        // dispatch(actionCreaters.setCart(cart))
    }

    const [item, setItem] = useState({ price: 0, name: "unnamed" });

    useMemo(() => {

        const url = `${host}/api/fooditem/getFood/${props.id}`;
        fetch(url)
            .then(response => {
                return response.json()
            })
            .then(data => {
                // console.log(data);
                if (data !== null)
                    setItem(data);
            });

    }, [props.id, host])

    useEffect(() => {

    }, [props, host])

    return (
        <div className="cartitem" id={"item" + item?._id} key={item?._id}>
            <div className="cartItem_image" onClick={() => { navigate(`/product/${item._id}`) }}>
                <img src="https://picsum.photos/30" alt="food" />
            </div>
            <div className="cartitem_content">
                <div className="cartitem_name" onClick={() => { navigate(`/product/${item._id}`) }}>
                    <h3>{item?.name}</h3>
                    <h3>&#8377;{item?.price}</h3>
                </div>
                <div className="quantity">
                    <button onClick={decqnt}>-</button>
                    <h2>Quantity: {quantity}</h2>
                    <button onClick={incqnt}>+</button>
                    {/* <button onClick={()=>{dispatch(actionCreaters.decqt(1, props.id))}}>-</button>
                    <h2>Quantity: {quantity} {console.log("array is "+cartArray[0]?._id)}</h2>
                    <button onClick={()=>{dispatch(actionCreaters.setCart(cart))}}>+</button> */}
                    {/* <ModifyCart _id={props.id}></ModifyCart> */}
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