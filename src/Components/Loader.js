import React from 'react'
import Spinner from './Images/Spinner.gif'

export default function Loader() {

    return (
      <div style={{width:"fit-content",margin:"25px auto"}} id="loader">
        <img src={Spinner} width="200px" alt="loading..." />
      </div>
    )
  
}





