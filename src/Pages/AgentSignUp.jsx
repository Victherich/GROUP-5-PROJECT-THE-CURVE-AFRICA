import React from 'react'
import "../CSS/AgentLogin.css"
import logo from "../Images/image 8.png"

const AgentSignUp = () => {
  return (
    <div className='agentbody'>
    <div className='agentform'>
      <h2>Sign_Up as Agent </h2>
      <div className='agentmain'>
        <div className='agentlogo'>
          <img src={logo} alt="" />
        </div>
        <div className='agentdivs'>
          <div className='agentinput'>
            <label htmlFor="">full_name</label>
            <input type="text" placeholder='enter full name' />
          </div>
          <div className='agentinput'>
            <label htmlFor="">email address</label>
            <input type="text" placeholder='enter email address' />
          </div>
          <div className='agentinput'>
            <label htmlFor="">Phone number</label>
            <input type="text" placeholder='enter phone number' />
          </div>
          <div className='agentinput'>
            <label htmlFor="">password</label>
            <input type="text" placeholder='enter password' />
          </div>
          <button className='agentbtn'>Sign_Up</button>
          <div className='agentdont'>
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

export default AgentSignUp
