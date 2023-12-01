import React, { useEffect, useState } from 'react'
import './Style/Products.css'
import FilterSection from './FilterSection'
import { IoGridSharp } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import Container from './Container';
import { useProductContext } from './Contexts/ProductContext';
import { FaFilter } from "react-icons/fa6";
import Loader from './Loader'
import { useFilterProviderContext } from './Contexts/FilterContext';

export default function Products({setProgress}) {
  
  // const {containerProducts}=useProductContext();
  const {isLoading}=useProductContext();
  const{sortPrice,setSort,sort}=useFilterProviderContext();
  
  
  const [gridview,setGridView]=useState(true)
  const [listview,setListView]=useState(false)


  const highlightIcon=(e)=>{
    let gridIcon=document.getElementById('grid-icon')
    gridIcon.classList.toggle('activeIcon')
    let listIcon=document.getElementById('list-icon')
    listIcon.classList.toggle('activeIcon')
    getView()
  }
  const getView=()=>{
    let gridIcon=document.getElementById('grid-icon')
    let listIcon=document.getElementById('list-icon')
    if(gridIcon.classList.contains('activeIcon')){
      setGridView(true)
      setListView(false)
    }
    if(listIcon.classList.contains('activeIcon')){
      setListView(true)
      setGridView(false)
    }
  }

  const showFilterBox=()=>{
    let filterBox=document.getElementsByClassName('filter-section')[0]
    filterBox.classList.toggle('hide-filters')
  }
  
  const handleSort=(e)=>{
    let sortCount=sort
    setSort(sortCount+1)
      sortPrice(e.target.value)
  }


  useEffect(() => {
    setProgress(30)
    window.scrollTo(0, 0);
    setProgress(100)
  },[])


  if(isLoading){
    setProgress(70)
    return (
      <Loader/>
    );
  }
  return (
    <div className="productsPage">
      <FaFilter onClick={showFilterBox}  className='filter-icon'/>

      <div className="filter-section hide-filters">
        <FilterSection />
      </div>

      <div className="product-section">
        <div className="product-header d-flex align-items-center justify-content-between">
            <span><IoGridSharp onClick={highlightIcon} id='grid-icon' className='mx-3 view-icon activeIcon' /><FiMenu onClick={highlightIcon}  id="list-icon" className='view-icon'/></span>
            <span className='para'><b>ALL ITEMS</b></span>
            <span>
            <select onChange={handleSort} className='drop-down' style={{width:"18vh",padding:"2px"}} >
                <option className='light' value="#" disabled></option>
                <option className='light' value="positive" selected>Price(Low-High)</option>
                <option className='light' value="#" disabled></option>
                <option  className='light' value="reverse">Price(High-Low)</option>
                {/* <option  className='light' value="positionAlphabet">Products(A-Z)</option> */}
                <option className='light' value="#" disabled></option>
                {/* <option className='light' value="reverseAlphabet">Products(Z-A)</option> */}
            </select>
            </span>
        </div>
        <div className="product-content">
          <Container isLoading={isLoading} gridview={gridview} listview={listview} />
        </div>
      </div>
    </div>
  )
}
