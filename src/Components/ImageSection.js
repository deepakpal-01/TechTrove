import React from 'react'
import './Style/ImageSection.css'

// import { BiImages } from 'react-icons/bi'

export default function ImageSection(props) {

    const {imagesArr,thumbnail}=props

        
    const showImage=(e)=>{
      const imgToShow=e.target.src
      let target=document.getElementById('target')
      target.src=imgToShow
    }
    const showMainImg=(e)=>{
       window.location.href=`${e.target.src}`
    }
    

  return (
    <>
    
    <div className="images-box">
    <div className="side-images">
         {imagesArr.map((image,index)=>{
             return <img key={index} onClick={showImage} className='sideImg' src={image} alt="images not available"/>
        })} 
        
    </div>
    <div className="main-image">
        <img onClick={showMainImg} id='target' className='mainImg' src={thumbnail} alt="images not available" />
    </div>
        
    </div>
    </>
  )
}


