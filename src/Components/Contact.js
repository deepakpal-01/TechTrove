import React, { useEffect,useState } from 'react'
import './Style/Contact.css'
import { TbMessageSearch } from "react-icons/tb";
import { GoRepoLocked } from "react-icons/go";
import { SlBadge } from "react-icons/sl";
import { HiMiniCheckBadge } from "react-icons/hi2";
import { RiCloseFill } from "react-icons/ri";
import { useAuth0 } from "@auth0/auth0-react";

export default function Contact({setProgress}) {

  const { user, isAuthenticated } = useAuth0();
  const [name,setName]=useState();
  const [email,setEmail]=useState();
  
  const handleContactButton=()=>{
    let contactBox=document.getElementById('contact-box')
    contactBox.classList.toggle('contact-box-hide')
  }
  const handleContactClose=()=>{
    let contactBox=document.getElementById('contact-box')
    contactBox.classList.toggle('contact-box-hide')
  }
  const fillData=()=>{
    if(isAuthenticated){
      setName(user.name)
      setEmail(user.email)
    }
  }

  useEffect(()=>{
    setProgress(30)
    window.scrollTo(0,0)
    setProgress(70)
      fillData()
    setProgress(100)
    //eslint-disable-next-line
  },[])


  return (
    <>
    <div loading="lazy"  className='background'>
      <h2>Contact Us</h2>
      <p id='contacttagline'>Connect with us effortlessly – your inquiries matter to us.</p>
      <button onClick={handleContactButton} className="button">
          <span className="button_lg">
            <span className="button_sl"></span>
            <span className="button_text">Contact Here !</span>
          </span>
      </button>

    <div id='contact-box' className="contact-box contact-box-hide">
      <RiCloseFill onClick={handleContactClose} id='close-icon'/>

        <form action="https://formspree.io/f/mvojjopl" method='POST'>
          <h4 style={{width:"fit-content",fontWeight:"600",marginBottom:"15px",background:"none"}}>Contact Form</h4>
          <input type="text" name='name' value={name} placeholder='Your Name' required/><br />
          <input type="email" name='email' value={email} placeholder='Your Email' required/><br />
          <input type="text" name='subject' placeholder='Subject' required/><br />
          <textarea name="description" id="desc" cols="30" rows="5" placeholder='Your Message' required></textarea>
          <button type="submit" style={{width:"98%",height:"60px",fontSize:"1.2rem",fontWeight:"500"}} className="btn btn-primary myButton  mx-1 my-3">Submit</button>
        </form>

    </div>
    </div>
    <div className="contact-icons">
      <div className="contact-icon-box">
        <TbMessageSearch style={{fontSize:"2rem",background:"none"}} />
        <div className="icon-msg">PRODUCT FAQ's</div>
      </div>
      <div className="contact-icon-box">
        <HiMiniCheckBadge  style={{fontSize:"2rem",background:"none"}} />
        <div className="icon-msg">WARRANTY</div>
      </div>
      <div className="contact-icon-box">
        <SlBadge  style={{fontSize:"2rem",background:"none"}} />
        <div className="icon-msg">SAFETY</div>
      </div>
      <div className="contact-icon-box">
        <GoRepoLocked  style={{fontSize:"2rem",background:"none"}} />
        <div className="icon-msg">PRODUCT ENQIURY</div>
      </div>
      
      
    </div>
    <div className="map">
    <iframe title='mapFrame' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.053125717419!2d77.20445207439829!3d28.68805738155898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd928daadb91%3A0x76aa925fc6e58347!2sDepartment%20of%20Computer%20Science%2C%20University%20of%20Delhi!5e0!3m2!1sen!2sin!4v1700733378441!5m2!1sen!2sin"  style={{border:"0"}}  loading="lazy" ></iframe>
    </div>
    </>
  )
}
