import React from 'react'
import '../CSS/HeaderDummy.css'
import { NavLink } from 'react-router-dom'

const HeaderDummy = () => {

  return (
    <div className='HeaderDummy'>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={'/forsale'}>For Sale</NavLink>
        <NavLink to={"/forrent"}>For Rent</NavLink>
        <NavLink to={"/allagentslistpage"}>Agents</NavLink>
        <NavLink to={"/agentdashboard"}>Post A Property</NavLink>
        <NavLink to={"/userdashboard"}>Login</NavLink>
        <NavLink to={"/usersignUp"}>Sign Up</NavLink>
    </div>
  )
}

export default HeaderDummy


