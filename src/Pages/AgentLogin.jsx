import React from 'react'
import "../CSS/AgentLogin.css"
import logo from '../Images/image 8.png'

const AgentLogin = () => {
  return (
    <div className='agentbody'>
        <div className='agentform'>
          <h2>Login as Agent</h2>
          <div className='agentmain'>
            <div className='agentlogo'>
              <img src={logo} alt="" />
            </div>
            <div className='agentdivs'>
              <div className='agentinput'>
                <label htmlFor="">email address</label>
                <input type="text" placeholder='enter email address' />
              </div>
              <div className='agentinput'>
                <label htmlFor="">password</label>
                <input type="text" placeholder='enter password' />
              </div>
              <button className='agentbtn'>Login</button>
              <div className='agentdont'>
                <div className='thisdiv'></div>
                <p className='myspan'>Don't have an account?  <span >Sign-Up</span> </p>
              </div>
              <p>Forgot password</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AgentLogin
