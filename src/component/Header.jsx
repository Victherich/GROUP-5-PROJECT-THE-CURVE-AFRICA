import React, { useState } from 'react';
import '../CSS/Header.css'
import Vector from "../Images/Vector.png"
import image8 from "../Images/image 8.png"
import { NavLink } from 'react-router-dom';


const Header = () => {
  const [burger, setBurger] = useState(false)


  return (
    <div className='Header'>
      <div className='first'>
        <img src={image8} alt="" />
      </div>
      <div className='second'>
        <NavLink to={"/"} className='sec'>Home</NavLink>
        <NavLink to={"/forsale"} className='sec'>For Sale</NavLink>
        <NavLink to={"/forrent"} className='sec'>For Rent</NavLink>
        <NavLink to={"/allagentslistpage"} className='sec'>Agents</NavLink>
        <NavLink to={"/agentdashboard"} className='sec'>Post a Property</NavLink>
      </div>
      <div className='thirddad'>
        <NavLink to={"/userdashboard"} className="logintext">Login</NavLink>
        <div className='third'>
            <img src={Vector} alt="" />
            <NavLink to={"/usersignUp"} className="signuptext">Sign_Up</NavLink>
        </div>
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
