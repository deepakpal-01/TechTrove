import React, { useState,useContext, useEffect } from 'react'
import { createContext } from "react";

const CartContext=createContext();




function CartProvider(props) {

    const getLocalCart=()=>{
        //eslint-disable-next-line
        let localItems=localStorage.getItem("MyCart")
        const parsedLocalItems=JSON.parse(localItems);
        if(!Array.isArray(parsedLocalItems)) return [];
        return parsedLocalItems;
        
        // if(localItems.length===0){
        //     return []
        // }
        // else{
        //     return JSON.parse(localItems)
        // }
    }   
    const getCartQuantity=()=>{
        let localCartQuantity=localStorage.getItem("CartQuantity")

        if(getLocalCart().length===0){
            return 0;
        }
            return JSON.parse(localCartQuantity)
    } 
    const getSubTotal=()=>{
        let localSubTotal=localStorage.getItem("subTotal")
        
        if(getLocalCart().length===0){
            return 0;
        }
            return JSON.parse(localSubTotal)
    } 

    const [cartItems,setCartItems]=useState(getLocalCart())
    const [subTotal,setSubTotal]=useState(getSubTotal())
    const [shippingFee,setShippingFee]=useState()
    const [totalCartQuantity,setTotalCartQuantity]=useState(getCartQuantity())


    const updateSubTotal=(price,quantity)=>{
        let newSubTotal=subTotal+price*quantity
          setSubTotal(newSubTotal)
      }
    const updateSubTotalForDecrease=(price,quantity)=>{
        let newSubTotal=subTotal-price*quantity
          setSubTotal(newSubTotal)
      }

    const addItemToCart=(product,color,quantity)=>{
       let cartProduct={
        id:product.id+color,
        title:product.title,
        color:color,
        quantity:quantity,
        image:product.thumbnail,
        price:product.price
       }
       if(!cartItems.some(item=>item.id===product.id+color)){
        setCartItems([...cartItems,cartProduct])
        updateSubTotal(product.price,quantity)
       }
       else{
        let item=cartItems.find(item=>item.id===product.id+color)
        let newItem={...item,quantity:item.quantity+1}
        
        let newArr=cartItems.filter((oldItem)=>{
            return oldItem.id!==item.id
        })
        setCartItems([...newArr,newItem])
        updateSubTotal(product.price,quantity)
    }
    setTotalCartQuantity(totalCartQuantity+quantity)
    }
    const decreaseQuantity=(product)=>{
        if(product.quantity>1){
        let item=cartItems.find(item=>item.id===product.id)
        let newItem={...item,quantity:item.quantity-1}
        
        let newArr=cartItems.filter((oldItem)=>{
            return oldItem.id!==item.id
        })
        setCartItems([...newArr,newItem])
        updateSubTotalForDecrease(product.price,1)
        setTotalCartQuantity(totalCartQuantity-1)
    }
    }
    const increaseQuantity=(product)=>{
        if(product.quantity<5){
        let item=cartItems.find(item=>item.id===product.id)
        let newItem={...item,quantity:item.quantity+1}
        
        let newArr=cartItems.filter((oldItem)=>{
            return oldItem.id!==item.id
        })
        setCartItems([...newArr,newItem])
        updateSubTotal(product.price,1)
        setTotalCartQuantity(totalCartQuantity+1)
    }
    }
    const removeItem=(id)=>{
        let item=cartItems.find(item=>item.id===id)
        
        let newArr=cartItems.filter((oldItem)=>{
            return oldItem.id!==item.id
        })
        setCartItems([...newArr])
        updateSubTotalForDecrease(item.price,item.quantity)
        setTotalCartQuantity(totalCartQuantity-item.quantity)
    }
    const handleClearCart=()=>{
        setCartItems([])
        setSubTotal(0)
        setTotalCartQuantity(0)
      }



    useEffect(()=>{
        localStorage.setItem('MyCart',JSON.stringify(cartItems))
        localStorage.setItem('CartQuantity',JSON.stringify(totalCartQuantity))
        localStorage.setItem('subTotal',JSON.stringify(subTotal))
        if(cartItems.length===0) {
            setShippingFee(0)
        }
        else setShippingFee(Math.random()*3);
        //eslint-disable-next-line
    },[cartItems])

    return(
        <CartContext.Provider value={{totalCartQuantity,addItemToCart,cartItems,setCartItems,subTotal,shippingFee,decreaseQuantity,increaseQuantity,removeItem,handleClearCart}}>
            {props.children}
        </CartContext.Provider>
    );
}



const useCartProvider=()=>{
    return useContext(CartContext);
}

export {CartProvider,useCartProvider}
