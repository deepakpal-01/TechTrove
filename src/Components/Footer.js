import React from 'react'
import {NavLink} from 'react-router-dom'
import './Style/Footer.css'
import {useProductContext} from './Contexts/ProductContext'
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';


export default function Footer() {

    const {loginWithRedirect,isAuthenticated} = useAuth0();

    const {isLoading}=useProductContext();

    const navigate=useNavigate();

    const loginCheck=()=>{
        if(isAuthenticated){
          navigate('/')
        }
        else{
          loginWithRedirect()
        }
    }

    
    return (
        <>
            {!isLoading && <div className="footer-box">
            <div className="box2">
                <p style={{ display: "inline-block", background: "none" }} >Ready to get started?<br />Start Today!</p>
                <button onClick={loginCheck} type="button" className="btn btn-primary myButton">GET STARTED</button>
            </div>
            <footer>

                <div id="contact" className="contact">
                    <h3>TechTrove</h3>
                    <h5>Address:-</h5> Delhi University.(DUCS)
                    <h5>Phone:-</h5> +91123456123 +11001410014
                    <h5>Hours:-</h5> 24*7 Monday-Sunday
                    <h5>Follow Us </h5>
                    <div className="social-media">
                        <a href="https://www.facebook.com/login/"><i className="fa-brands fa-facebook fa-xl mx-1"></i></a>
                        <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram fa-xl mx-1"></i></a>
                        <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Flogin%3Flang%3Den"><i className="fa-brands fa-twitter fa-xl mx-1"></i></a>
                        <a href="https://www.youtube.com/"><i className="fa-brands fa-youtube fa-xl mx-1"></i></a>
                    </div>
                </div>

                <div className="app">
                    <h5 className='my-3'>Install App</h5><br />
                    <p id='store-msg'>From App store or Google Play</p>
                    <div className="stores">
                        <div className="apple">
                            <span className="store-logo"><NavLink to="/"><i className="fa-brands fa-apple fa-2xl"></i></NavLink></span>
                            <span className="">Download on the<br /><b>Apple</b></span>
                        </div>
                        <div className="playstore">
                            <NavLink to="/"><i className="fa-brands fa-google-play fa-2xl"></i></NavLink>
                            <b>Google Play</b>
                        </div>
                    </div>
                    <p>Secured Payment Gateways</p>
                    <div className="cards">
                        <NavLink to="/"><i className="fa-brands fa-cc-visa fa-2xl"></i></NavLink>
                        <NavLink to="/"><i className="fa-brands fa-cc-mastercard fa-2xl"></i></NavLink>
                        <NavLink to="/"><i className="fa-brands fa-cc-amazon-pay fa-2xl"></i></NavLink>
                    </div>
                    <div className="copyright my-2">
                        TechTrove&copy;2024. All Rights Reserved.
                    </div>
                </div>

                <div className="account">
                    <h5>My Account</h5><br />
                    <p><NavLink to='/'>Sign In</NavLink></p>
                    <p><NavLink to='/cart'>View Cart</NavLink></p>
                    <p><NavLink to='/contact'>Help</NavLink></p>
                    <p><NavLink to='/'>Sign Up</NavLink></p>
                    <p><NavLink to='/about'>More Information</NavLink></p>
                </div>

            </footer>
            </div>}
        </>
    )
}
