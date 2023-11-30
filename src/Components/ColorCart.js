import React, { useState } from 'react'
import Quantity from './Quantity'
import { NavLink, useNavigate } from 'react-router-dom';
import { useCartProvider } from './Contexts/CartContext';
import { useAuth0 } from "@auth0/auth0-react";



export default function ColorCart({product}) {

  const {loginWithRedirect,isAuthenticated} = useAuth0();

  const navigate=useNavigate();

  const {addItemToCart}=useCartProvider();

  const colorsArr=["#000000","#6e0e0a","#ffba08","#124e78"]
  
    const [quantity,setQuantity]=useState(1);

    const [color,setColor]=useState(colorsArr[0]);

    const setIncrease=()=>{
        quantity<5?setQuantity(quantity+1):setQuantity(5)
    }
    const setDecrease=()=>{
        quantity>1?setQuantity(quantity-1):setQuantity(1);
    }
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
    const loginCheck=()=>{
        if(isAuthenticated){
          navigate('/errorpage')
        }
        else{
          loginWithRedirect()
        }
    }


  return (
    <div className="product">

    <div className="color" style={{padding:"3px",width:"fit-content",display:"flex",justifyContent:"flex-end"}}>
      Colors : <span style={{padding:"3px",width:"fit-content",display:"flex",justifyContent:"flex-end"}} >{colorsArr.map((color,index)=>{
            return <button onClick={selectColor} className=' color-btns mx-2' key={index} type="button" style={{background:`${color}`,width:"18px",opacity:"0.5",height:"18px",borderRadius:"50%",border:"none"}}></button>
      })}</span>
    </div>

    <Quantity quantity={quantity} setIncrease={setIncrease} setDecrease={setDecrease}/>

    <button onClick={loginCheck}  type="button" className="btn btn-primary myButton my-2 buybtn">BUY NOW !</button>
    <NavLink onClick={()=>addItemToCart(product,color,quantity)} to ='/cart' className='mx-2'><button type="button" className="btn btn-primary myButton my-2">ADD TO CART</button></NavLink>
  </div>
  )
}
