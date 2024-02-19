import React from 'react'
import logo from "../Images/image 8.png"
import "../CSS/Login.css"

const UserSignUp = () => {
  return (
    <div className='userbody'>
    <div className='userform'>
      <h2>Sign_Up </h2>
      <div className='usermain'>
        <div className='userlogo'>
          <img src={logo} alt="" />
        </div>
        <div className='userdivs'>
          <div className='userinput'>
            <label htmlFor="">full_name</label>
            <input type="text" placeholder='enter full name' />
          </div>
          <div className='userinput'>
            <label htmlFor="">email address</label>
            <input type="text" placeholder='enter email address' />
          </div>
          <div className='userinput'>
            <label htmlFor="">Phone number</label>
            <input type="text" placeholder='enter phone number' />
          </div>
          <div className='userinput'>
            <label htmlFor="">password</label>
            <input type="text" placeholder='enter password' />
          </div>
          <button className='userbtn'>Sign_Up</button>
          <div className='userdont'>
            <div className='thisdiv'></div>
            <p>i agree to the terms and condition</p>
          </div>
          <p className='myspan'> have an account?  <span >Login</span> </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default UserSignUp