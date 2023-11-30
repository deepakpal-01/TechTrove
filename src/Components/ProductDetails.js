import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import './Style/ProductDetails.css'
import FormatPrice from './Helper/FormatPrice'
import { TbTruckDelivery } from "react-icons/tb";
import { TbReplace } from "react-icons/tb";
import { BiSolidOffer } from "react-icons/bi";
import { BiShieldQuarter } from "react-icons/bi";
import ImageSection from './ImageSection'
import Star from './Star'
import ColorCart from './ColorCart';
import Loader from './Loader'


export default function ProductDetails() {
  const {id}=useParams()
  const API=`https://dummyjson.com/products/${id}`


  const [product, setProduct] = useState(undefined)

  const getMyProduct=async()=>{
    const response=await fetch(API)
    const data=await response.json()
    setProduct(data)
  }


useEffect(() => {
  window.scrollTo(0, 0);
    getMyProduct();
    // eslint-disable-next-line
  },[])

  if(!product){
    return(
      <Loader/>
    );
  }
  

  return (
    <>
     <div className='product-box'>
      <div className="img-box">
        <ImageSection imagesArr={product.images} thumbnail={product.thumbnail}/>
      </div>

      <div className="description-box">

        <div className="product box">
          <h4>{product.title}</h4>
          <div className='para'><Star rating={product.rating}/></div>
          <div className='para'><b style={{color:"black"}}>MRP :</b> <strike><FormatPrice price={product.price}/></strike> </div>
          <div style={{color:"#4361ee"}} className='para'><b>Deal of the Day :</b> <FormatPrice price={product.price-0.10*product.price}/></div>
          <div className='para'>{product.description}<br/>The {product.title} is continually evolving with advancements in technology. Each product serves specific purposes and often incorporates a combination of hardware and software components to provide a seamless user experience</div>
        </div>
        
        <div className="product product-icon-box ">
        <div className="icon-box ">
        <TbTruckDelivery className='product-icon'   />
        <p className='para product-icon-msg'>Free Delivery</p>
        </div>
        
        <div className="icon-box">
        <TbReplace className='product-icon' />
        <p className='para product-icon-msg'>Easy Replacement</p>
        </div>
        <div className="icon-box">
        <BiSolidOffer className='product-icon' />
        <p className='para product-icon-msg'>Offers & Discounts</p>
        </div>
        <div className="icon-box">
        <BiShieldQuarter className='product-icon' />
        <p className='para product-icon-msg'>Assured Warranty</p>
        </div>
        </div>

        <div className="product box">
           <div className="info para">Available : <b>{product.stock>20?"In Stock":"Out Of Stock"}</b></div> 
           <div className="info para">Category : <b>{product.category}</b></div> 
           <div className="info para">Brand : <b>{product.brand}</b></div> 
        </div>

        <ColorCart product={product}/>

      </div>
    </div>  
    </>
  )
}

