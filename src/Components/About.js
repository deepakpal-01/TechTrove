import React,{useEffect} from 'react'
import Banner from './Banner'
import './Style/About.css'
import box1image from './Images/box1image.webp'

export default function About({setProgress}) {

  useEffect(()=>{
    setProgress(30)
    window.scrollTo(0,0)
    setProgress(100)
  //eslint-disable-next-line
  },[])
  
  return (
    <>
    <Banner/>
    <div className="box1">
        <div className="section">
          <img loading='lazy' src={box1image} className='mx-2' alt="banner" width={"450px"} />
        </div>
        <div className="section box1message">
          <h3 style={{fontFamily:"fantasy"}}><b>Empower Your Lifestyle, Elevate Your Tech</b></h3>
          <p>Our e-commerce platform is designed for a seamless shopping experience. Enjoy secure transactions, multiple payment options, and swift delivery right to your doorstep. Our dedicated customer support team is ready to assist you, ensuring that your online shopping journey is as smooth as possible.Embrace the future of online shopping with confidence, knowing that you have access to the latest and greatest in electronic innovation.</p>
        </div>
    </div>
    
    
    </>
  )
}
