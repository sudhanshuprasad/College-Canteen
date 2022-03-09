import React, { useEffect } from 'react'
import Card from './Card'
import "./css/Grid.css";

//get food items
// console.log(fetch("127.0.0.1:5000/api/fooditem/getFood"));

// function getData() {
//   console.log("Started getData")
//   let url = "https://catfact.ninja/fact";
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data))
// }
// getData();


function getData() {

  console.log("Started getData")
  var headers = new Headers();
    headers.append('Accept', 'application/json');
  let url = "127.0.0.1:5000/api/fooditem/getFood";
  fetch(url,headers)
    .then((response) =>{
      console.log(response);
      return response.json();
    })
    .then((data) => console.log(data))
}
getData();


export default function Grid(props) {

  // fetch(`https://catfact.ninja/fact`)
  // .then((response) => console.log(response))
  // .then((actualData) => console.log(actualData));

  const ar = [{
    "key": "0",
    "num": 0,
    "price": 44,
    "foodName": "hemlo",
    "dsc": "This is discription"
  },
  {
    "key": "1",
    "num": 0,
    "price": 44,
    "foodName": "hemlo",
    "dsc": "This is discription"
  },
  {
    "key": "2",
    "num": 0,
    "price": 44,
    "foodName": "hemlo",
    "dsc": "This is discription"
  },
  {
    "key": "3",
    "num": 0,
    "price": 44,
    "foodName": "hemlo",
    "dsc": "This is discription"
  },
  {
    "key": "4",
    "num": 0,
    "price": 44,
    "foodName": "hemlo",
    "dsc": "This is discription"
  }];
  return (
    <div className='grid-container'>
      {
        ar.map((element) => (
          <Card
            key={element.key}
            num={element.num}
            imgurl="https://picsum.photos/60"
            foodName={element.foodName}
            price={element.price}
            dsc={element.dsc}
          />
        ))
      }
    </div>
  )
}
