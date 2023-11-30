import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

export default function Star({rating}) {
    
  const review=()=>{
    let reviews = Math.floor((Math.random() * 1000) + 1);
    return reviews;
  }

 const ratingStars=Array.from({length:5},(item,index)=>{
    let mid=index+0.5;
    return(
        <span key={index}>
            {rating>=index+1?<FaStar style={{fontSize:"1.15rem",color:"#fb8500",outline:"1px",margin:"1px 1px"}} />: rating>=mid?<FaStarHalfAlt style={{fontSize:"1.15rem",color:"#fb8500",outline:"1px",margin:"1px 1px"}}/>:<FaRegStar style={{fontSize:"1.15rem",color:"#fb8500",outline:"1px",margin:"1px 1px"}}/>
            }

        </span>
    );

 })   

  return (
    <span>{ratingStars}<b className='mx-2'>({review()} Customer Reviews)</b></span>
    
  )
}
