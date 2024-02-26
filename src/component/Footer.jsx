import React from 'react'
import "../CSS/Footer.css"
import linkedin from "../Images/entypo-social_linkedin.png"
import twitter from "../Images/twitter.png"
import instagram from "../Images/dashicons_instagram.png"
import facebook from "../Images/facebook.png"

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footermain'>
        <div className='footwrite'>
          <h1>Company</h1>
          <div className='line'></div>
          <span>Privacy policy</span>
          
        </div>
        <div className='footwrite'>
          <h1>Contact Us</h1>
          <div className='line'></div>
          <span>Email: homehub@gmail.com</span>
          <span>phone: +2347063798113</span>
        </div>
        <div className='footwrite'>
          <h1>Follow Us</h1>
          <div className='line'></div>
          <div className='footwriteimages'>
            <img src={linkedin} alt="" />
            <img src={twitter} alt="" />
            <img src={instagram} alt="" />
            <img src={facebook} alt="" />
          </div>
        </div>
        <div className='footwrite'>
          <h1>Partners</h1>
          <div className='line'></div>
          <span>Kora pay</span>
          <span>The Curve Africa</span>
        </div>
      </div>
      <div style={{color:"black",backgroundColor:"white",width:"100vw"}}>Send us an email to Advertise with Us</div>
    </div>
  )
}

export default Footer
