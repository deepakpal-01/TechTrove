import React from 'react'
import './Style/FeatureBox.css'
import ProductCard from './ProductCard'
import Loader from './Loader'


export default function FeatureBox(props) {

    const {featureProducts,isLoading}=props
   

    if(isLoading){
        return (
            <Loader/>
        );
    }

  return (
      <div className='feature-box my-4'>
        <h3  className='feature-title'>Grab Latest Deals & Offers !</h3>
        <div className="feature-item-box">

            {!isLoading &&  featureProducts.map((product)=>{
                return <ProductCard key={product.id} id={product.id} title={product.title} price={product.price} category={product.category} thumbnail={product.thumbnail}/>
            })}
            
        </div>
    </div>
  )
}
