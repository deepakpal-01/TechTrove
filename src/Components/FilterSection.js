import React,{useState} from 'react'
import styled from 'styled-components';
import { useFilterProviderContext } from './Contexts/FilterContext';
import { useProductContext } from './Contexts/ProductContext';
import FormatPrice from './Helper/FormatPrice';

export default function FilterSection() {

    const {myProducts}=useProductContext();

    const {setCategory,setBrand,searchVal,setSearchVal,filterPrice,setFilterPrice,maxPrice,clearFilter,clear,setClear} =useFilterProviderContext();

    const colorsArr=["#000000","#6e0e0a","#ffba08","#124e78"]
    //eslint-disable-next-line
    const [color,setColor]=useState(colorsArr[0]);
    

    const getUniqueData=(data,property)=>{
        let categories=data.map((obj)=>{
          return obj[property];
        })
        categories=['all',...new Set(categories)]
        return categories
    }
    const categories=getUniqueData(myProducts,"category")

    const selectColor=(e)=>{
        let btns=document.getElementsByClassName('color-btns')
        Array.from(btns).forEach((btn)=>{
            btn.style.border="none"
            btn.style.opacity=0.5
        })
        setColor(e.target.style.background)
        e.target.style.border="2px solid #f1faee"
        e.target.style.opacity=1
    }
    const handleBrandValue=(e)=>{
        const value = e.target.value;
        setBrand(value)
    }
    const highlightCategory=(e)=>{
        let options=document.getElementsByClassName('category-option')
        Array.from(options).forEach((option)=>option.classList.remove('active-category'))
        e.target.classList.add('active-category')
    }
    const updateSearchVal=()=>{
        let searchBar=document.getElementById('bar');
        setSearchVal(searchBar.value)
    }
    const priceFilter=()=>{
        let filter=document.getElementById('price-filter-input')
        setFilterPrice(filter.value)

    }
    const handleClearBtn=()=>{
        clearFilter()
        setClear(clear+1)
    }
  
   const ColorWrapper=styled.div`
    @media screen and (max-width:800px) {
        display: flex;
        flex-direction: column;
    }
`

  return (
    <>
    <div>
        <input onChange={updateSearchVal}  id='bar' type="text"  value={searchVal} placeholder='Search here...'/>
    </div>

    <div className="category">
        <h4>Category</h4>
        <ul className='d-flex flex-column'  style={{listStyleType:"none",alignItems:"flex-start",margin:"0px",padding:"0px",cursor:"pointer"}}>
            {categories.map((category,index)=>{
                return <li onClick={highlightCategory} key={index} ><p onClick={()=>setCategory(`${category}`)}  className='light my-0 category-option'>{category.charAt(0).toUpperCase()+category.slice(1)}</p></li>
            })}
        </ul>
    </div>

    <div className="company">
        <h5>Brand</h5>
        <select className=' drop-down' onChange={handleBrandValue}>
            <option value="all" selected>All</option>
            <option value="apple">Apple</option>
            <option value="samsung">Samsung</option>
            <option value="oppo">Oppo</option>
        </select>
    </div>

    <div className="colorBox">
    <ColorWrapper className="color" style={{padding:"3px",width:"fit-content",display:"flex",justifyContent:"flex-end"}}>
      <h5>Colors</h5> 
      <span style={{padding:"3px",width:"fit-content",display:"flex",justifyContent:"flex-end"}} >{colorsArr.map((color,index)=>{
            return <button onClick={selectColor} className=' color-btns mx-2' key={index} type="button" style={{background:`${color}`,opacity:"0.5",width:"18px",height:"18px",borderRadius:"50%",border:"none"}}></button>
        })}
        </span>
    </ColorWrapper>
    </div>

    <div className="price-filter">
        <h5>Price</h5>
        <span className='light'>{<FormatPrice price={filterPrice}/>}</span><br />
        <input id='price-filter-input' type="range" min="0" value={filterPrice} max={maxPrice} onChange={priceFilter}/>
    </div>

    <div className="filter-button">
    <button onClick={handleClearBtn}  type="button" className="btn btn-primary myButton my-2 ">CLEAR FILTERS</button>
    </div>
    
    </>
  )
}
