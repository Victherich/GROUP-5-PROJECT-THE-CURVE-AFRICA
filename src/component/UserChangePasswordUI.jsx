import React, { useContext, useState } from 'react'
import '../CSS/ChangePasswordUI.css'
import axios from 'axios';
import { UserContext } from './UserContext';

const UserChangePasswordUI = () => {
  const {setToggleUserChangePasswordUI}=useContext(UserContext)
const [UserChangePassword,setUserChangePassword]=useState({currentPassword:"",newPassword:"",confirmNewPassword:""});
// console.log(UserChangePassword)

const UserChangePasswordUrl=""
const handleUserChangePassword = async (e)=>{
  e.preventDefault();
  try{
    const response = await axios.post(UserChangePasswordUrl)
    console.log(response.data)
    setToggleUserChangePasswordUI(false)
  }catch(error){
    console.error(error)
    setToggleUserChangePasswordUI(false)
  }
}

  return (
    <>
      <form onSubmit={handleUserChangePassword} className='ChangePasswordUI'>
        <input type="text" onChange={(e)=>setUserChangePassword({...UserChangePassword,currentPassword:e.target.value})} placeholder='Enter current password'/>
        <input type="text" onChange={(e)=>setUserChangePassword({...UserChangePassword,newPassword:e.target.value})} placeholder='Enter new password'/>
        <input type="text" onChange={(e)=>setUserChangePassword({...UserChangePassword,confirmNewPassword:e.target.value})} placeholder='Confirm new password'/>
        <button type="submit">Change Password</button>
      </form>
    </>
  )
}

export default UserChangePasswordUI
