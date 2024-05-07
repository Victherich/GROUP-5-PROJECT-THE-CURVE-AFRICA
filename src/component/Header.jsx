import React, { useContext, useEffect, useRef, useState } from 'react';
import "../CSS/Header.css"
import image8 from "../Images/image 8.png"
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from './UserContext';
import Burger from "../Images/Burger Icon.png"
import { useSelector } from 'react-redux';
import "animate.css"

const Header = () => {
  const location = useLocation();
  const [mobileMenuShow, setMobileMenuShow] = useState(false);
  const [headerActive, setHeaderActive] = useState("home");
  const { UserToken } = useContext(UserContext);
  const UserId = useSelector(state => state.userUserId);
  const User = useSelector(state => state.userUser);

  // Detecting active menu item based on route
  useEffect(() => {
    const path = location.pathname;
    if (path === "/forsale") {
      setHeaderActive("ForSale");
    } else if (path === "/") {
      setHeaderActive("home");
    } else if (path === "/forrent") {
      setHeaderActive("ForRent");
    } else if (path === "/allagentslistpage") {
      setHeaderActive("Agents");
    } else if (path === "/allpropertieslistpage") {
      setHeaderActive(null);
    }
  }, [location]);



  //Ref for clickOutside functionality
const menuRef = useRef()

//ClickOutside functionality
useEffect(()=>{
  const handleClickOutside = (event)=>{
    if(menuRef.current && !menuRef.current.contains(event.target)){
        setMobileMenuShow(false)
    }
  }
  document.addEventListener("mousedown",handleClickOutside)
  return ()=>{
    document.removeEventListener("mousedown",handleClickOutside)
  }
},[])

  return (
    <div className='HeaderWrap'>
      <div className='HeaderA'>
        <div className='ImageWrap'>
          <img src={image8} alt="" />
        </div>
        <div className='MenuWrap'>
          {/* Main menu links */}
          <NavLink to={"/"} className={headerActive === "home" ? "sec2" : "sec"}>Home</NavLink>
          <NavLink to={"/forsale"} className={headerActive === "ForSale" ? "sec2" : "sec"}>For Sale</NavLink>
          <NavLink to={"/forrent"} className={headerActive === "ForRent" ? "sec2" : "sec"}>For Rent</NavLink>
          <NavLink to={"/allagentslistpage"} className={headerActive === "Agents" ? "sec2" : "sec"}>Agents</NavLink>

          {/* Conditional rendering of user actions */}
          {UserId ? (
            <div className='SignUpLoginWrap'>
              <NavLink to={"/userdashboard"}>Hi, {User.fullName.slice(0, 6)}</NavLink>
            </div>
          ) : (
            <div className='SignUpLoginWrap'>
              <NavLink to={"/usersignUp"}>Sign up</NavLink>
              <NavLink to={'/userlogin'}>Login</NavLink>
            </div>
          )}
        </div>
      </div>


      {UserId&&<div className='UserMobileNameDisplay'>
              <NavLink to={"/userdashboard"}>Hi, {User.fullName.slice(0,6)}</NavLink>
            </div>}

      {/* Burger menu icon */}
      <div className='Burger'>
        <img src={Burger} alt="Burger" onClick={() => setMobileMenuShow(!mobileMenuShow)} />
      </div>

      {/* Mobile menu */}
      {mobileMenuShow && (
        <div ref={menuRef} className='HeaderMobile animate__animated animate__slideInRight'>
          {/* Mobile menu links */}
          <NavLink to={"/"} className={headerActive === "home" ? "sec2" : "sec"}>Home</NavLink>
          <div className='MenuLine'></div>
          <NavLink to={"/forsale"} className={headerActive === "ForSale" ? "sec2" : "sec"}>For Sale</NavLink>
          <div className='MenuLine'></div>
          <NavLink to={"/forrent"} className={headerActive === "ForRent" ? "sec2" : "sec"}>For Rent</NavLink>
          <div className='MenuLine'></div>
          <NavLink to={"/allagentslistpage"} className={headerActive === "Agents" ? "sec2" : "sec"}>Agents</NavLink>
          <div className='MenuLine'></div>

          {/* Conditional rendering of user actions */}
          {UserId ? (
            <div className='SignUpLoginWrapMobile'>
              <NavLink to={"/userdashboard"}>Hi, {User.fullName.slice(0,6)}</NavLink>
            </div>
          ) : (
            <div className='SignUpLoginWrapMobile'>
              <NavLink to={"/usersignUp"}>Sign up</NavLink>
              <NavLink to={'/userlogin'}>Login</NavLink>
            </div>
          )}
          <div className='MenuLine'></div>
          <NavLink style={{ textDecoration: "none", color: "white" }} onClick={() => setMobileMenuShow(false)}>X-Close Menu</NavLink>
        </div>
      )}
    </div>
  );
}

export default Header;
