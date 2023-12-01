import React, { useEffect } from 'react'
import { useCartProvider } from './Contexts/CartContext'
import './Style/Cart.css'
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';
import FormatPrice from './Helper/FormatPrice';
import { useAuth0 } from "@auth0/auth0-react";

export default function Cart({setProgress}) {

  const {loginWithRedirect,isAuthenticated,user} = useAuth0();

  const navigate=useNavigate();

  const {cartItems,shippingFee,subTotal,handleClearCart}=useCartProvider();

  const goToShopping=()=>{
    navigate('/products')
  }
  
  const loginCheck=()=>{
    if(isAuthenticated){
      navigate('/errorpage')
    }
    else{
      loginWithRedirect()
    }
}
useEffect(()=>{
  setProgress(30)
  window.scrollTo(0,0)
  setProgress(100)
  //eslint-disable-next-line
},[])


  return (
    <>
    {isAuthenticated && <div style={{paddingBottom:"5vh"}} className="user-info container d-flex align-items-center justify-content-center ">
        <img src={user.picture} alt=""  width={"40px"}/>
        {isAuthenticated && <p style={{fontSize:"1.2rem",fontWeight:"400"}} className='light my-2 mx-2'><b>{user.name}</b> Cart Items</p>}
    </div>}

      <div className="container my-4">
      <div className="cart-grid ">
       <div className='cart-heading first-heading'>ITEMS</div> 
       <div className='cart-heading hide-column'>PRICE</div> 
       <div className='cart-heading'>QUANTITY</div> 
       <div className='cart-heading hide-column'>SUBTOTAL</div> 
       <div className='cart-heading'>REMOVE</div> 
      </div>
      <div className="cart-grid child-rows my-3">
        {cartItems.length===0 && <div style={{fontSize:"1.4rem"}}>No Item in Cart !</div>}
        {cartItems.length!==0 && cartItems.map((product)=>{
            return <CartItem key={product.id} product={product}/>
        })}
      </div>
      </div>
      <div className="container d-flex justify-content-between my-4">
      <button onClick={goToShopping} type="button" className="btn btn-primary myButton">CONTINUE SHOPPING</button>
      <button onClick={()=>handleClearCart()}  type="button" className="btn clear-cart-btn">CLEAR CART</button>
      </div>
      <div className=" container d-flex flex-column justify-content-center checkout-box  my-3 ">
        <div className="checkout">
        <div className="total none-bg">
          SubTotal : <b className='none-bg'><FormatPrice price={subTotal}/></b>
        </div>
        <div className="ship-fee none-bg">
          Shipping Fee : <b className='none-bg'><FormatPrice price={shippingFee}/></b>
        </div>
        <div><hr /></div>
        <div className="order-total none-bg">
          Order Total: <b className='none-bg'><FormatPrice price={subTotal+shippingFee}/></b>
        </div>
        </div>
        <button onClick={loginCheck}  type="button" className="btn clear-cart-btn my-4">CLICK HERE TO PROCEED</button>
      </div>
    </>
  )
}
