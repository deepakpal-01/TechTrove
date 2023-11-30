import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Style/ErrorPage.css'

export default function ErrorPage() {
  const navigate=useNavigate();

  const goToHome=()=>{
      navigate('/')
  }


  return (
    <div  className='errorDiv'>
      <div className="circle">
      <h1 style={{color:"white",fontWeight:"600",width:"fit-content",margin:"auto",background:"none"}}>404</h1>
      <h2 style={{color:"white"}} className='my-2'>UH OH ! You're Lost.</h2>
      <h6 className='my-2' style={{color:"white",width:"fit-content",margin:"auto",background:"none"}}>The page you are looking does not exists.How you got here is a mystery.</h6>
      <h6 className='my-2' style={{color:"white",width:"fit-content",margin:"auto",background:"none"}}>You can click the below button to go back to the Homepage</h6>
      <button style={{zIndex:"99999",padding:"10px 35px",display:"block",width:"fit-content",margin:"auto"}} onClick={goToHome} type="button" className="btn btn-primary myButton my-5">HOME</button>
      </div>
    </div>
  )
}
