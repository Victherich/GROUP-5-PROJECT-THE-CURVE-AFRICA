import React, { useState } from 'react';
import '../CSS/Header.css'
import Vector from "../Images/Vector.png"
import image8 from "../Images/image 8.png"


const Header = () => {
  const [burger, setBurger] = useState(false)


  return (
    <div className='Header'>
      <div className='first'>
        <img src={image8} alt="" />
      </div>
      <div className='second'>
        <span className='sec'>Home</span>
        <span>For Sale</span>
        <span>For Rent</span>
        <span>Agents</span>
        <span>Post a Property</span>
      </div>
      <div className='third'>
        <img src={Vector} alt="" />
        <span>Sign_Up</span>
      </div>

      <div className='fourth' onClick={()=>setBurger(!burger)}>
        <div className='fourthdiv'>
          <div className='fourthd'>
            <span className='fourth1'></span>
            <span className='fourth2'></span>
          </div>
          <div className='fourthd'>
            <span className='fourth1'></span>
            <span className='fourth2'></span>
          </div>
          <div className='fourthd'>
            <span className='fourth1'></span>
            <span className='fourth2'></span>
          </div>
        </div>

       <>
       {
        burger ?
         ( <div className='related'>
          <span className='sec'>Home</span>
          <span>For Sale</span>
          <span>For Rent</span>
          <span>Agents</span>
          <span>Post a Property</span>
        </div>) : null
      }
       </>
      </div>
      
    </div>
  )
}

export default Header
