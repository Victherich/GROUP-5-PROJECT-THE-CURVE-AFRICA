import React, { useContext, useEffect, useState } from 'react';
import "../CSS/Header.css"
import image8 from "../Images/image 8.png"
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from './UserContext';


const Header = () => {
  const location = useLocation()
  const [burger, setBurger] = useState(false)
  const [headerActive,setHeaderActive]=useState("home")
  const {UserToken}=useContext(UserContext)

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
    <div className='HeaderWrap'>
      <div className='HeaderA'>
      <div className='ImageWrap'>
        <img src={image8} alt="" />
      </div>
      <div className='MenuWrap'>
        <NavLink to={"/"} 
        className={headerActive==="home"?"sec2":"sec"}
        >Home</NavLink>

        <NavLink to={"/forsale"} 
        className={headerActive==="ForSale"?"sec2":"sec"}
        >For Sale</NavLink>

        <NavLink to={"/forrent"} 
        className={headerActive==="ForRent"?"sec2":"sec"}
        >For Rent</NavLink>
        <NavLink to={"/allagentslistpage"} 
        className={headerActive==="Agents"?"sec2":"sec"}>Agents</NavLink>

        {UserToken?<div className='SignUpLoginWrap'>
        <NavLink to={"/userdashboard"}>Hi ,Clara</NavLink>
        </div>
        :
        <div className='SignUpLoginWrap'>
        <NavLink to={"/usersignUp"}>Sign up</NavLink>
        <NavLink to={'/userlogin'}>Login</NavLink>
        </div>}
        
      
        {/* <NavLink to={"/agentdashboard"} 
        className='sec'>Become an Agent</NavLink> */}
      </div>

      
      {/* <div className='fourth' onClick={()=>setBurger(!burger)}>
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
      </div> */}
      
    </div>
    </div>
  )
}

export default Header
