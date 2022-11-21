import React from 'react'
import star from '../images/star.png'

export default function Card(props) {
    let statusText
    if (props.openSpots === 0){
        statusText = "SOLD OUT"
    }
    else if (props.location === "Online"){
        statusText = "ONLINE"
    }
    return (
    <div className="card-container">
        <img src={`../images/${props.coverImg}`} alt="" className="card-photo"/>
        {statusText && <div className="card-status">
            <h3>{statusText}</h3>
        </div>}
        <p className="card-rating">
            <img src={star} alt="" className='card-rating-star'/>
                <span>{props.stats.rating.toFixed(1)}</span>
                <span>({props.stats.reviewCount}) • </span>
                <span>{props.location}</span>
        </p>
        <p>{props.title}</p>
        <p className='card-cost'><span className='bold'>From {props.price} </span>/ person</p>
    </div>
  )
}
