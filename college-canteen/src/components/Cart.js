import React, { useEffect, useState } from 'react';
import './css/Login.css';
import './css/Cart.css';
import CartItem from './CartItem';

const host = "http://127.0.0.1:5000";


export default function Cart() {

    //get food items in the cart
    const [loaidng, setLoaidng] = useState(true);

    const [cartItem, setCartItem] = useState(
        // {
        //     "_id": "6237035224d8a7c87bcf3a62",
        //     "user": "622c4f7da1d25fe6bee7b544",
        //     "items": [
        //         { "_id": "62278b1a4e90e53ae1b763bd", "quantity": 1 },
        //         { "_id": "62278e824e90e53ae1b763c2", "quantity": 2 },
        //         { "_id": "62278c904e90e53ae1b763bf", "quantity": 2 },
        //         { "_id": "62278ce84e90e53ae1b763c0", "quantity": 2 },
        //         { "_id": "62278dbf4e90e53ae1b763c1", "quantity": 2 }
        //     ],
        //     "timestamp": "1647772498580",
        //     "__v": 0
        // }
    );


    useEffect(() => {

        let url = `${host}/api/cart/getCart`;

        // if(true||localStorage.getItem('authToken')!==null){
        if(localStorage.getItem('authToken')!==null){

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
                console.log(data[0].items);
                setCartItem(data[0].items);
                setLoaidng(false);
            })
            .catch(() => {
                // console.log("some error occured while fetching GET request")
            });
        }
            
        }, [])
        
        // console.log(cartItem)

        if (!loaidng && cartItem !== undefined) {
            return (
                cartItem?.map((element) => (
                    <>
                    {/* {console.log(element._id)} */}
                    <CartItem
                        key={element._id}
                        id={element._id}
                        quantity={element.quantity}
                    />
                </>
            ))
        )
    } else {
        //do not use multiple return statement next time
        return (
            <>login to see the cart</>
        )
    }

}