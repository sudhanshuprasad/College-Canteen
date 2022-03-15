import React, { useEffect, useState } from 'react'
import Card from './Card'
import "./css/Grid.css";

const host="http://127.0.0.1:5000";

export default function Grid(props) {
  
  //get food items
  const [foodItem, setFoodItem]=useState([]);
  
  useEffect(() => {
    
    let url = `${host}/api/fooditem/getFood`;

      fetch(url)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setFoodItem(data);
      });
    // console.log(foodItem)
  },[])
  
  
  return (
    <div className='grid-container'>
      {
        foodItem.map((element) => (
          <Card
            key={element.key}
            num={element.num}
            imgurl="https://picsum.photos/60"
            foodName={element.name}
            price={element.price}
            dsc={element.dsc}
          />
        ))
      }
    </div>
  )
}
