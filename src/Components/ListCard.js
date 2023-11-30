import React from 'react'
import FormatPrice from './Helper/FormatPrice';
import './Style/ProductCard.css'
import { useNavigate } from 'react-router-dom';
import './Style/ListCard.css'
export default function ListCard(props) {

const navigate=useNavigate();

  
const handleCardClick=()=>{
    navigate(`/productdetails/${props.id}`)
}


return (
  <>
        <div className="list-card card-search">

            <div onClick={handleCardClick} className="card">
                <span className="badge text-bg-primary">{props.category}</span>
                <img src={`${props.thumbnail}`} className="card-img-top" height={"185px"} alt="product...." />
                <div className=" card-footer">
                    <h5 className="card-title cardData my-1">{props.title}</h5>
                    <span className='card-price' style={{display:"none"}}>{props.price}</span>
                    <span id='cardData' className='cardData card-price'><FormatPrice price={props.price} /></span>
                </div>
            </div>
            <div className="list-card-content">
                <h4>{props.title}</h4>
                <span id='cardData' className='cardData'><FormatPrice price={props.price} /></span>
                <p className='my-2' style={{ fontSize: "0.9rem" }}>{props.description}The {props.title} is continually evolving with advancements in technology. Each product serves specific purpose</p>
                <button onClick={handleCardClick} type="button" className="btn btn-primary myButton my-3">READ MORE</button>
            </div>
        </div>
  </>
)
}
