import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import "./css/CartItem.css";

const host = "http://127.0.0.1:5000";

export default function CartItem(props) {

    const [item, setItem] = useState([]);

    useEffect(() => {
        const url = `${host}/api/fooditem/getFood/${props.id}`
        fetch(url)
            .then(response => {
                return response.json()
            })
            .then(data => {
                // console.log(data);
                setItem(data);
            });

    }, [props])

    return (
        <div className="cartitem" id={"item" + item._id}>
            <div className="cartItem_image">
                <img src="https://picsum.photos/30" alt="food" />
            </div>
            <div className="cartitem_content">
                <div className="cartitem_name">
                    <h3>{item.name}</h3>
                    <h3>&#8377;{item.price}</h3>
                </div>
                <div className="quantity">
                    <h2>Quantity: {props.quantity}</h2>
                </div>
            </div>
        </div>
    );
}

CartItem.propTypes = {
    quantity: PropTypes.number.isRequired,
}
CartItem.defaultProps = {
    quantity: 0
}