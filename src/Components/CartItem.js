import React from 'react'
import FormatPrice from './Helper/FormatPrice'
import { FaTrash } from "react-icons/fa";
import { useCartProvider } from './Contexts/CartContext';
import { GrSubtract } from "react-icons/gr";
import { FaPlus } from "react-icons/fa6";

export default function CartItem({product}) {

  const {decreaseQuantity,increaseQuantity,removeItem}=useCartProvider();

  

  return (
    <>
    <div className='image-box cell d-flex'>
        <img src={product.image} width={"70px"} height={"45px"} alt={product.id} />
        <div className="mx-2">
            <div>{product.title}</div>
            <div>Color : 
                <button className=' mx-2 ' type="button" style={{background:`${product.color}`,opacity:"1",width:"16px",height:"16px",borderRadius:"50%",border:"none"}}></button>
            </div>
        </div>
    </div>
    
    <div className='hide-column'><FormatPrice price={product.price}/></div>
        <div className="quantity my-2">         
        <GrSubtract  onClick={()=>decreaseQuantity(product)}className='mx-3' />
        <span>{product.quantity}</span>
        <FaPlus onClick={()=>increaseQuantity(product)} className='mx-3' />
    </div>
    <div className='hide-column'><FormatPrice price={product.price*product.quantity}/></div>
    <div onClick={()=>removeItem(product.id)}><FaTrash className='remove-dustbin-icon mx-4' style={{color:"red"}} /></div> 
    </>
  )
}
