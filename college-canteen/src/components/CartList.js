import React, { useEffect, useState } from 'react'
import CartItem from './CartItem'
import "./css/CartList.css";

// const host="http://127.0.0.1:5000";

export default function CartList(props) {

    //get food items in the cart
    const [cartItem, setCartItem] = useState([]);
    useEffect(() => {
        //   console.log(props.items)
        setCartItem(props.items);
    }, [props.items])

      console.log(cartItem)


    // //get food items in the cart
    // const [loaidng, setLoaidng] = useState(true);
    // const [cartItem, setCartItem] = useState(
    //     {
    //         "_id": "6237035224d8a7c87bcf3a62",
    //         "user": "622c4f7da1d25fe6bee7b544",
    //         "items": [
    //             { "_id": "62278b1a4e90e53ae1b763bd", "quantity": 1 },
    //             { "_id": "62278e824e90e53ae1b763c2", "quantity": 2 },
    //             // {"_id":"62278c904e90e53ae1b763bf", "quantity":2},
    //             // {"_id":"62278ce84e90e53ae1b763c0", "quantity":2},
    //             // {"_id":"62278dbf4e90e53ae1b763c1", "quantity":2}
    //         ],
    //         "timestamp": "1647772498580",
    //         "__v": 0
    //     }
    // );

    // useEffect(() => {

    //     let url = `${host}/api/cart/getCart`;

    //     fetch(url, {
    //         method: 'GET',
    //         headers: {
    //             'Accept': '*/*',
    //             'authToken': localStorage.getItem('authToken')
    //         }
    //     })
    //         .then(response => {
    //             return response.json()
    //         })
    //         .then(data => {
    //             // console.log("after fetch ");
    //             console.log(data);
    //             setLoaidng(false);
    //             setCartItem(data);
    //         })
    //         .catch(() => {
    //             console.log("some error occured while fetching GET request")
    //         });

    //     // console.log(cartItem.items)
    // }, [loaidng])



    return (
        <div className='CartList-container'>
            {/* loaidng?<></>: */
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
