import React, { Suspense, useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import urlContext from '../context/api_url/urlContext';
// import Card from './Card'
import LazyCard from './lazy/Card'
import "./css/Grid.css";
import { actionCreaters } from '../state';
const Card = React.lazy(() => import("./Card.js"));

// const host="http://127.0.0.1:5000";

export default function Grid() {

  const host = useContext(urlContext);
  const theme = useSelector(state => state.theme);
  const login = useSelector(state => state.login);
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(true);

  //get food items
  const [foodItem, setFoodItem] = useState([]);

  useEffect(() => {

    let url = `${host}/api/fooditem/getFood`;

    fetch(url)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setFoodItem(data);
        setLoading(false);
      });
    // console.log(foodItem)

    //set localcart

    if (login) {

      fetch(`${host}/api/cart/getCart`, {
        method: 'GET',
        headers: {
          'Accept': '*/*',
          'authToken': localStorage.getItem('authToken')
        }
      })
        .then((response) => response.json())
        .then(data => {
          dispatch(actionCreaters.setCart(data[0].items))
          console.log(data[0].items);
        })

    }

  }, [host])


  return (
    <div className='grid-container' style={{
      backgroundColor: theme ? "rgb(100,100,100)" : "white",
      color: theme ? "white" : "black",
    }}>
      {
        foodItem.map((element) => (
          <>
            <Suspense fallback={<LazyCard />}>
              <Card
                key={element._id}
                num={element._id}
                imgurl="https://picsum.photos/60"
                foodName={element.name}
                price={element.price}
                dsc={element.dsc}
              />
            </Suspense>
          </>
        ))
      }
      {loading ? <div>Loading...</div> : null}
    </div>
  )
}
