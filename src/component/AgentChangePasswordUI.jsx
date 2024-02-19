import React, { useContext, useState } from 'react'
import '../CSS/ChangePasswordUI.css'
import axios from 'axios';
import { AgentContext } from './AgentContext';

const AgentChangePasswordUI = () => {
  const {setToggleAgentChangePasswordUI}=useContext(AgentContext)
const [AgentChangePassword,setAgentChangePassword]=useState({currentPassword:"",newPassword:"",confirmNewPassword:""});
// console.log(AgentChangePassword)

const AgentChangePasswordUrl=""
const handleAgentChangePassword = async (e)=>{
  e.preventDefault();
  try{
    const response = await axios.post(AgentChangePasswordUrl)
    console.log(response.data)
    setToggleAgentChangePasswordUI(false)
  }catch(error){
    console.error(error)
    setToggleAgentChangePasswordUI(false)
  }
}

  return (
    <>
      <form onSubmit={handleAgentChangePassword} className='ChangePasswordUI'>
        <input type="text" onChange={(e)=>setAgentChangePassword({...AgentChangePassword,currentPassword:e.target.value})} placeholder='Enter current password'/>
        <input type="text" onChange={(e)=>setAgentChangePassword({...AgentChangePassword,newPassword:e.target.value})} placeholder='Enter new password'/>
        <input type="text" onChange={(e)=>setAgentChangePassword({...AgentChangePassword,confirmNewPassword:e.target.value})} placeholder='Confirm new password'/>
        <button type="submit">Change Password</button>
      </form>
    </>
  )
}

export default AgentChangePasswordUI
