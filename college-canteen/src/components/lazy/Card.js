import React from 'react'
import style from "../css/Card.module.css";
import "./style/Card.css";

function Card() {
    return (
        <div className={style.item}>
            <div className='loading-content'>
                card is loading...
                <br></br>
                so wait...
            </div>
        </div>
    )
}

export default Card
