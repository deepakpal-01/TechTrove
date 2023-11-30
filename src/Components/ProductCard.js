import React from 'react'
import FormatPrice from './Helper/FormatPrice';
import './Style/ProductCard.css'
import { useNavigate } from 'react-router-dom'

export default function ProductCard(props) {
    const navigate=useNavigate();

    
  
    const handleCardClick=()=>{
        navigate(`/productdetails/${props.id}`) 
    }
  return (
      <div onClick={handleCardClick} className="card card-search">
        <span className="badge text-bg-primary">{props.category}</span>
          <img  src={`${props.thumbnail}`} className="card-img-top imageSize" alt="product...."/>
              <div className=" card-footer">
                  <h5 className="card-title cardData my-1">{props.title}</h5>
                  <span className='card-price' style={{display:"none"}}>{props.price}</span>
                  <span id='cardData' className='cardData '><FormatPrice price={props.price}/></span>
              </div>
      </div>
  )
}
