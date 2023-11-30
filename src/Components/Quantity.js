import React from 'react'
import { GrSubtract } from "react-icons/gr";
import { FaPlus } from "react-icons/fa6";



export default function Quantity ({quantity,setIncrease,setDecrease}) {
  return (
    <div>
        <div className="quantity my-2">         
        <GrSubtract  onClick={setDecrease}className='mx-3' />
        <span>{quantity}</span>
        <FaPlus onClick={setIncrease} className='mx-3' />
    </div>
    </div>
  )
}
