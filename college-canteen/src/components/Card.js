import React from "react";
import PropTypes from 'prop-types'
import "./css/Card.css";

export default function Card(props){

    return(
        <div className="item" id={"item"+props.num}>
        <img src={props.imgurl} alt="food"/>
        <div className="content">
          <div className="item_name">
            <h3>{props.foodName}</h3>
            <h3>&#8377;{props.price}</h3>
          </div>
          <h5>{props.dsc}</h5>
          <button className="order-btn" id={"order"+props.num}>Order Now</button>
        </div>
      </div>
    );
}

Card.propTypes = {
  // num:PropTypes.number.isRequired,
  foodName:PropTypes.string.isRequired,
  price:PropTypes.number.isRequired,
  dsc:PropTypes.string
}
Card.defaultProps = {
  foodName: "Unnamed Food",
  price: 0,
  dsc: "No discription is available for this food item"
}