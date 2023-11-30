import React from 'react'
import { NavLink } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import './Style/Navbar.css'
import { useCartProvider } from './Contexts/CartContext';
import { useAuth0 } from "@auth0/auth0-react";




export const NavBar = () => {

    const { loginWithRedirect,isAuthenticated,logout } = useAuth0();


    const {totalCartQuantity,handleClearCart}=useCartProvider();

    const showHamburgerMenu=()=>{
        let nav=document.getElementsByClassName('navbar')[0]
        let hamburger=document.getElementsByClassName('hamburger')[0]
        let closeBtn=document.getElementsByClassName('close')[0]
        nav.classList.toggle('hide')
        closeBtn.classList.toggle('hide')
        hamburger.classList.toggle('hide')
    }
    const handleCloseBtn=(e)=>{
        let nav=document.getElementsByClassName('navbar')[0]
        let hamburger=document.getElementsByClassName('hamburger')[0]
        let closeBtn=document.getElementsByClassName('close')[0]
        nav.classList.toggle('hide')
        closeBtn.classList.toggle('hide')
        hamburger.classList.toggle('hide')

        e.target.classList.toggle('active')

    }
    const logoutCheck=()=>{
        handleClearCart()
        logout({ logoutParams: { returnTo: window.location.origin } })

    }
  return (
    <>    
          <GiHamburgerMenu onClick={showHamburgerMenu} className='hamburger '/> 
          <IoCloseSharp onClick={handleCloseBtn}  className='close hide'/>
          <nav className="navbar hide navbar-expand-lg ">
                  
                      <ul className="navbar-nav">
                          <li className="nav-item ">
                              <NavLink onClick={handleCloseBtn}  className="nav-link " aria-current="page" to="/">Home</NavLink>
                          </li>
                          <li className="nav-item">
                              <NavLink onClick={handleCloseBtn} className="nav-link " aria-current="page" to="/products">Products</NavLink>
                          </li>
                          <li className="nav-item">
                              <NavLink onClick={handleCloseBtn} className="nav-link " aria-current="page" to="/about">About</NavLink>
                          </li>
                          <li className="nav-item">
                              <NavLink onClick={handleCloseBtn} className="nav-link " aria-current="page" to="/contact">Contact</NavLink>
                          </li>


                          {isAuthenticated ?<li className="nav-item">
                          <button onClick={logoutCheck} type="button" className="btn btn-outline-primary ">Logout</button>
                          </li>  : <li className="nav-item">
                          <button onClick={() => loginWithRedirect()} type="button" className="btn btn-outline-primary ">Login</button>
                          </li> }  

                          
                          
                          
                          <li className="nav-item">
                              <NavLink onClick={handleCloseBtn} className="nav-link " aria-current="page" to="/cart">
                              <FiShoppingCart className="cart-icon" />
                              </NavLink>
                          </li>
                          
                          <span className='cart-item-count'>{totalCartQuantity}</span>
                          
                          
                      </ul>

          </nav>
    </>
  )
}
