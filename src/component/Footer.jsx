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
          <h1>Company:</h1>
          {/* <div className='line'></div> */}
          <span>Privacy policy</span>
          
        </div>
        <div className='footwrite'>
          <h1>Contacts:</h1>
          {/* <div className='line'></div> */}
          <span>homehub95@gmail.com</span>
          <span>+2347063480314<br/> +2347063798113 </span>
        </div>
        <div className='footwrite'>
          <h1>Follow Us:</h1>
          {/* <div className='line'></div> */}
          <div className='footwriteimages'>
            <img onClick={()=>window.open("https://www/linkedin.com/homehub","_blank")} src={linkedin} alt="" />
            <img onClick={()=>window.open("https://www/twitter.com/homehub","_blank")} src={twitter} alt="" />
            <img onClick={()=>window.open("https://www.instagram.com/hubconnect_ng?igsh=MTN4ZWVnMTJmaW5zZw%3D%3D&utm_source=qr","_blank")} src={instagram} alt="" />
            <img onClick={()=>window.open("https://www/facebook.com/homehub","_blank")} src={facebook} alt="" />
          </div>
        </div>
       
      </div>
    </div>
  )
}

export default Footer
