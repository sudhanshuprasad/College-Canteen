import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import urlContext from '../context/api_url/urlContext';
import Card from './Card'
import "./css/Grid.css";

// const host="http://127.0.0.1:5000";

export default function Grid() {

  const host = useContext(urlContext);
  const theme = useSelector(state => state.theme);

  const [loading, setLoading] = useState(true);

  //get food items
  const [foodItem, setFoodItem] = useState([]);

  useEffect(() => {

    console.log("backend api is " + host);

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
  }, [host])


  return (
    <div className='grid-container' style={{
                                            backgroundColor: theme? "rgb(100,100,100)": "white",
                                            color: theme? "white": "black",
                                          }}>
      {
        foodItem.map((element) => (
          <Card
            key={element._id}
            num={element._id}
            imgurl="https://picsum.photos/60"
            foodName={element.name}
            price={element.price}
            dsc={element.dsc}
          />
        ))
      }
      {loading ? <div>Loading...</div> : null}
    </div>
  )
}
