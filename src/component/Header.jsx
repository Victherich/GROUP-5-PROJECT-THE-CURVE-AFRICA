import React, { useEffect, useState } from 'react';
import '../CSS/Header.css'
// import Vector from "../Images/Vector.png"
import image8 from "../Images/image 8.png"
import { NavLink, useLocation } from 'react-router-dom';
import { Location } from 'react-router-dom';


const Header = () => {
  const location = useLocation()
  const [burger, setBurger] = useState(false)
  const [headerActive,setHeaderActive]=useState("home")

useEffect(()=>{
  const path=location.pathname;
  if(path==="/forsale"){
    setHeaderActive("ForSale")
  }else if(path==="/"){
    setHeaderActive("home")
  }else if (path==="/forrent"){
    setHeaderActive("ForRent")
  }else if(path==="/allagentslistpage"){
    setHeaderActive("Agents")
  }else if(path==="/allpropertieslistpage"){
    setHeaderActive(null)
  }
},[location])


  return (
    <div className='Header'>
      <div className='first'>
        <img src={image8} alt="" />
      </div>
      <div className='second'>
        <NavLink to={"/"} 
        className={headerActive==="home"?"sec2":"sec"}
        >Home</NavLink>

        <NavLink to={"/forsale"} 
        className={headerActive==="ForSale"?"sec2":"sec"}
        >For Sale</NavLink>

        <NavLink to={"/forrent"} 
        className={headerActive==="ForRent"?"sec2":"sec"}
        >For Rent</NavLink>
        <NavLink to={"/allagentslistpage"} className={headerActive==="Agents"?"sec2":"sec"}>Agents</NavLink>
        <NavLink to={"/agentdashboard"} className='sec'>Post a Property</NavLink>
      </div>
      <div className='thirddad'>
        <NavLink to={"/userdashboard"} className="logintext">Login</NavLink>

        <div className='third'>
           <NavLink to={"/usersignUp"} className="signuptext">Sign Up</NavLink>
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
              <NavLink to={"/"} 
                  className={headerActive==="home"?"sec2":"sec"}
              >Home</NavLink>
          <NavLink to={"/forsale"} 
                  className={headerActive==="ForSale"?"sec2":"sec"}
          >For Sale</NavLink>
          <NavLink to={"/forrent"} 
                  className={headerActive==="ForRent"?"sec2":"sec"}
          >For Rent</NavLink>
          <NavLink to={"/allagentslistpage"} className={headerActive==="Agents"?"sec2":"sec"}>Agents</NavLink>
          <NavLink to={"/agentdashboard"} className='sec'>Post a Property</NavLink>
        </div>) : null
      }
       </>
      </div>
      
    </div>
  )
}

export default Header
