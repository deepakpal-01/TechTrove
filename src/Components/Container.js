import React, { useEffect, useState } from 'react'
import './Style/Container.css'
import ProductCard from './ProductCard'
import ListCard from './ListCard';
import { useProductContext } from './Contexts/ProductContext';
import Loader from './Loader';
import { useFilterProviderContext } from './Contexts/FilterContext';



export default function Container({isLoading,gridview,listview}){

  const {containerProducts,setContainerProducts,category,brand,searchVal,filterPrice,sort}=useFilterProviderContext();
  
  const {myProducts}=useProductContext();

  const [categoryProducts,setCategoryProduct]=useState(myProducts);


  const filterProductsCategory=()=>{
    if(category==='all'){
      setContainerProducts(myProducts)
      setCategoryProduct(myProducts)
    }
    else{
      let categoryProducts=myProducts.filter((product)=>{
        return product.category===category
      })
      setContainerProducts(categoryProducts)
      setCategoryProduct(categoryProducts)
    }

  }
  const filterProductsBrand=()=>{
    if(brand==='all'){
      setContainerProducts(categoryProducts)
    }
    if(brand==='apple'){
      const allProducts=categoryProducts.filter((product)=>{
        return product.brand==='Apple'
      })
      setContainerProducts(allProducts)
    }
    if(brand==='samsung'){
      const allProducts=categoryProducts.filter((product)=>{
        return product.brand==='Samsung'
      })
      setContainerProducts(allProducts)
    }
    if(brand==='oppo'){
      const allProducts=categoryProducts.filter((product)=>{
        return product.brand==='OPPO'
      })
      setContainerProducts(allProducts)
    }
  }
  const search=(searchVal)=>{
      let cards=document.getElementsByClassName('card-search')
      Array.from(cards).forEach((card)=>{
        if(card.textContent.includes(searchVal)){
          card.style.display='block'
        }
        else{
          card.style.display='none'
        }
      })
  }
  const cardFilterOnPrice=(filterPrice)=>{
      let cards=document.getElementsByClassName('card-search')
      Array.from(cards).forEach((card)=>{
        let cardPrice=card.getElementsByClassName('card-price')[0].textContent
        if(parseInt(cardPrice)<=parseInt(filterPrice)){
          card.style.display='block'
        }
        else{
          card.style.display='none'
        }
      })
  }
 

 

useEffect(()=>{
   setContainerProducts(containerProducts)
   //eslint-disable-next-line
},[sort])
  
  useEffect(()=>{
    filterProductsCategory()
    //eslint-disable-next-line
  },[category])

  useEffect(()=>{
    filterProductsBrand()
    //eslint-disable-next-line
  },[brand,containerProducts])

  useEffect(()=>{
    search(searchVal)
    //eslint-disable-next-line
  },[searchVal,containerProducts])

  useEffect(()=>{
    cardFilterOnPrice(filterPrice)
    //eslint-disable-next-line
  },[filterPrice,containerProducts])


if(isLoading){
  return(
    <Loader/>
  );
}
  return (
    <>
    
    {gridview &&  <div className="product-container grid-view">
    {containerProducts.length===0 && <div className='no-product-div'>No Product Found !</div>}
       {containerProducts.map((product)=>{
                return <ProductCard key={product.id} id={product.id} title={product.title} price={product.price} category={product.category} thumbnail={product.thumbnail}/>
            }) }
    </div>}

    {listview &&  <div className="product-container list-view">
    {containerProducts.length===0 && <div className='no-product-div'>No Product Found !</div>}
          {containerProducts.map((product)=>{
                return <ListCard key={product.id} id={product.id} title={product.title} description={product.description} price={product.price} category={product.category} thumbnail={product.thumbnail}/>
            }) }
              
    </div>}
    </>
  )
}
