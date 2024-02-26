import React, { useContext } from 'react'
// import AgentChangePasswordUI from './AgentChangePasswordUI'
import AgentEditProfileUI from './AgentEditProfileUI'
import '../CSS/Account.css'
// import AccountLogo from '../Images/HomeHub Logo.svg'
import { AgentContext } from './AgentContext'


const AgentAccount = ({toggleAgentChangePasswordUI,
  setToggleAgentChangePasswordUI,
  toggleAgentEditProfileUI,
  setToggleAgentEditProfileUI,
  }) => {
    const{AgentId,setAgentActiveMenu}=useContext(AgentContext)


const handleAgentChangePasswordUI=()=>{
  setToggleAgentChangePasswordUI(!toggleAgentChangePasswordUI)
  setToggleAgentEditProfileUI(false)
}

const handleAgentEditProfileUI=()=>{
  setToggleAgentEditProfileUI(!toggleAgentEditProfileUI)
  setToggleAgentChangePasswordUI(false)
}

  return (
    <div className='Account'>
      
      <div className='AccountUp'>
          <div className='AccountUpLeft'>
          <h3>Agent Account</h3>
              <p><span>Name: </span>Clara John</p>
              <p><span>Company Name: </span>France Real estate Nigeria</p>
              <p><span>Address: </span>No. 2 New hub avenue</p>
              <p><span>Email: </span>clara@gmail.com</p>
              <p><span>Phone no.: </span>01234567</p>
          </div>
          <div className='AccountUpRight'>
              {/* <img src={AccountLogo} alt="Logo"/> */}
              <button 
              className='Makeanewpost'
              onClick={()=>setAgentActiveMenu("post a property")}
              > + Make a new post</button>
          </div>
      </div>
      <div className='AccountDown'>
          <button onClick={handleAgentEditProfileUI}>Edit Profile</button>
          {/* <button onClick={handleAgentChangePasswordUI}>Change Password</button>   */}
          
      </div>  
      {/* {toggleAgentChangePasswordUI&&<AgentChangePasswordUI/>} */}
      {toggleAgentEditProfileUI&&<AgentEditProfileUI/>}
    </div>
  )
}

export default AgentAccount
