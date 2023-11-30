import React from 'react'
import './Style/Banner.css'
import  title from './Images/title.png'
import  bannerImg from './Images/banner1.webp'
import { useNavigate } from 'react-router-dom'



export default function Banner() {
  const navigate=useNavigate();
    const goToProducts=()=>{
      navigate('/products')
    }



  return (
    <>
    <div className='banner-box'>
        <div className="bannersection intro">
            <img src={title} alt="TechTrove" width={"210px"} />
            <p className='mx-2 my-1' style={{fontSize:"13px"}}>Tech gadgets and electronic items</p>  
            <p className='my-4' style={{fontWeight:"100"}}>Welcome to TechTrove, your premier destination for all things electronic and cutting-edge! Step into a digital realm.</p> 
            <button onClick={goToProducts} type="button" className="btn btn-primary myButton">SHOP NOW</button>
        </div>    
        <div className="bannersection imgbox">
            <img loading='lazy' src={bannerImg} alt="Banner" />
        </div>
    </div>    
    </>
  )
}
