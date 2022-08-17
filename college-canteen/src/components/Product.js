import React, { useContext, useEffect, useState } from 'react'
import "./css/Product.css";
import { useParams } from 'react-router-dom';
import urlContext from "../context/api_url/urlContext";


function Product(props) {

    const host = useContext(urlContext)
    const params = useParams();
    const [product, setProduct] = useState({});


    const getFood = (id) => {

        const url = `${host}/api/fooditem/getfood/${id}`;
        fetch(url, {
            method: 'GET',
            headers: {
                'Accept': '*/*',
                "Content-Type": "application/json",
            }
        })
            .then(response => {
                return response.json()
            })
            .then(data => {
                if (data !== null)
                    setProduct(data);
            }).catch(error => {
                console.log(error);
            });
    }
    useEffect(() => {

        getFood(params.id);

    }, [params.id, host]);


    console.log(params.id);

    return (
        <div>
            <h1>{product.name}</h1>
            <img src={product.imgurl || `https://picsum.photos/100/500`} alt="food" />

        </div>
    )
}

Product.defaultProps = {
    name: "Unnamed Food",
    price: 0,
    dsc: "No discription is available for this food item"
  }

export default Product