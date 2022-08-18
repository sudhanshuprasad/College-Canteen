import React, { useContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
// import { useDispatch, useSelector } from 'react-redux';
// import { actionCreaters } from "../state/index";
import "./css/CartItem.css";
import urlContext from "../context/api_url/urlContext";

// const host = "http://127.0.0.1:5000";

export default function OrderItem(props) {

    const host = useContext(urlContext)


    // const dispatch = useDispatch();
    // const quantity = useSelector(state => state.quantity);
    // const login = useSelector(state => state.login);


    const [item, setItem] = useState({price:0, name:"unnamed"});

    useEffect(() => {
        const url = `${host}/api/fooditem/getFood/${props.id}`;
        fetch(url)
            .then(response => {
                return response.json()
            })
            .then(data => {
                // console.log(data);
                if(data!==null)
                    setItem(data);
            });

    }, [props, host])

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
                    <h2>Quantity: {props.quantity}</h2>
                </div>
            </div>
        </div>
    );
}

OrderItem.propTypes = {
    quantity: PropTypes.number.isRequired,
}
OrderItem.defaultProps = {
    quantity: 0,
    // item: {price:0, name:"unNamed"}
}