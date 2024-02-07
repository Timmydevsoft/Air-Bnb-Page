

import React from "react"
import star from "../assets/Star 1.png"



export default function Card(props){


    return(

        <div className="card-section">
            <img className="card-main-pics" src= {props.image} alt="image-one"/>
            <div className="text-cont">
                <img className="star" src={star} allt="star-icon"/>
                <span className="five">{props.ratins}</span>
                <span className="six">({props.count}) •</span>
                <span className="country">{props.country}</span>
            </div>
            <p className = "auth">{props.name}</p>
            <p className="price"><span className="bold">{`From $${props.price}`}</span> / person</p>
 
        </div>
    )
}