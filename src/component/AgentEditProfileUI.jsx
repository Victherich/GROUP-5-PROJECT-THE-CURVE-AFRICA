import React, { useContext, useState } from 'react'
import '../CSS/ChangePasswordUI.css'
import { AgentContext } from './AgentContext'
import axios from 'axios'

const AgentEditProfileUI = () => {
  const {AgentId,setToggleAgentEditProfileUI}=useContext(AgentContext)
  const [AgentEditProfile,setAgentEditProfile]=useState({name:"Clara John",phone:5678936,address:"no 2. nigeria street"})
  console.log(AgentEditProfile)

const url=""
  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
      const response = await axios.post(url,AgentEditProfile);
        console.log(response.data)
        setToggleAgentEditProfileUI(false)
    }catch(error){
      console.error(error)
      setToggleAgentEditProfileUI(false)
    }
  }


  return (
    <>
      <form className='ChangePasswordUI' onSubmit={handleSubmit}>
        <input type="text" value={AgentEditProfile.name} onChange={(e)=>setAgentEditProfile({...AgentEditProfile,name:e.target.value})} placeholder='Enter Name'/>
        <input type="text" value={AgentEditProfile.address} onChange={(e)=>setAgentEditProfile({...AgentEditProfile,address:e.target.value})} placeholder='Enter Address'/>
        <input type="text" value={AgentEditProfile.phone} onChange={(e)=>setAgentEditProfile({...AgentEditProfile,phone:e.target.value})} placeholder='Enter Phone no.'/>
        <div className='ChangePasswordUIButtonsWrap'>
          <button type="submit">Update Profile</button>
          <button onClick={()=>setToggleAgentEditProfileUI(false)}>Cancel</button>
        </div>
      </form>
    </>
  )
}

export default AgentEditProfileUI
