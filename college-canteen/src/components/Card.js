import React from "react";
import PropTypes from 'prop-types'
import "./css/Card.css";

const host = "http://127.0.0.1:5000";

function updateCart(foodID) {
  console.log('food ordered ' + foodID)
  var cartItem = [];
  let quantity=1;

  //to get the cart and modify it
  const getCart = `${host}/api/cart/getCart`
  fetch(getCart, {
    method: 'GET',
    headers: {
      'Accept': '*/*',
      "Content-Type": "application/json",
      'authToken': localStorage.getItem('authToken')
    }
  })
    .then(response => {
      return response.json()
    })
    .then(data => {
      try {
        cartItem = data[0].items;
      }
      catch (error) {
        // console.log(error)
      }
      let pushNewItem=true;
      for (let _id in cartItem){
        if(cartItem[_id]._id===foodID){
          cartItem[_id].quantity++;
          pushNewItem=false;
          console.log("quantity= "+cartItem[_id].quantity);
          break
        }
      }
      
      if(pushNewItem){
        cartItem.push({ "_id": foodID, "quantity": quantity })
      }
      console.log(cartItem)

    })
    .then(() => {
      //to update the cart according to the order
      const url = `${host}/api/cart/updateCart`

      fetch(url, {
        method: 'PUT',
        headers: {
          'Accept': '*/*',
          "Content-Type": "application/json",
          'authToken': localStorage.getItem('authToken')
        },
        body: `{"items":${JSON.stringify(cartItem)}}`
      });
    })

}

export default function Card(props) {

  return (
    <div className="item" id={"item" + props.num}>
      <img src={props.imgurl} alt="food" />
      <div className="content">
        <div className="item_name">
          <h3>{props.foodName}</h3>
          <h3>&#8377;{props.price}</h3>
        </div>
        <h5>{props.dsc}</h5>
        <button className="order-btn" onClick={() => updateCart(props.num)} id={"order" + props.num}>Order Now</button>
      </div>
    </div>
  );
}

Card.propTypes = {
  // num:PropTypes.number.isRequired,
  foodName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  dsc: PropTypes.string
}
Card.defaultProps = {
  foodName: "Unnamed Food",
  price: 0,
  dsc: "No discription is available for this food item"
}