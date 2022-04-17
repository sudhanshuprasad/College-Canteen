import React, { useEffect, useState } from 'react'
import CartItem from './CartItem'
import "./css/CartList.css";

// const host="http://127.0.0.1:5000";

export default function CartList(props) {

    //   //get food items in the cart
    const [cartItem, setCartItem] = useState([]);
    useEffect(() => {
        //   console.log(props.items)
        setCartItem(props.items);
    }, [props])

      console.log(cartItem)
    return (
        <div className='CartList-container'>
            {
                cartItem.map((element) => (
                    <CartItem
                        key={element._id}
                        id={element._id}
                        quantity={element.quantity}
                    />
                ))
            }
        </div>
    )
}
