import React from 'react'
import './Style/Services.css'
import { TbTruckDelivery } from "react-icons/tb";
import { RiSecurePaymentLine } from "react-icons/ri";
import { GiCheckedShield } from "react-icons/gi";
import { FaHandHoldingUsd } from "react-icons/fa";


export default function ServicesBanner() {
  return (
    <section className="service-banner">
      <div className="service service-box1">
      <TbTruckDelivery  className='my-2 icon' style={{fontSize:"2rem",background:"none"}}/>
      <h6 style={{background:"none"}}>Super Fast and Free Delivery</h6>
      </div>

      <div className="service service-box2">
        <div className="service-box2-box">
        <GiCheckedShield className='mx-2 icon icon-shield' style={{fontSize:"1.75rem",background:"none"}} />
        <h6 style={{background:"none"}}>Non Contact Shipping</h6>
        </div>
        <div className="service-box2-box">
        <FaHandHoldingUsd className='mx-2 icon icon-hand' style={{fontSize:"1.75rem",background:"none"}} />
        <h6 style={{background:"none"}}>Money Back Guranteed</h6>
        </div>
      </div>

      <div className="service service-box3">
      <RiSecurePaymentLine   className='my-2 icon' style={{fontSize:"2rem",background:"none"}}/>
      <h6 style={{background:"none"}}>Super Secure Payment System</h6>
      </div>
    </section>
  )
}
