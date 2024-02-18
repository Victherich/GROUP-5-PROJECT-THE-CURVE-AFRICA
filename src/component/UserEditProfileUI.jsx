import React, { useContext, useState } from 'react'
import '../CSS/ChangePasswordUI.css'
import { UserContext } from './UserContext'
import axios from 'axios'

const UserEditProfileUI = () => {
  const {setToggleUserEditProfileUI}=useContext(UserContext)
  const [UserEditProfile,setUserEditProfile]=useState({phone:567891022, address:"No. 2 franco street"})
  console.log(UserEditProfile)

const url=""
  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
      const response = await axios.post(url,UserEditProfile);
        console.log(response.data)
        setToggleUserEditProfileUI(false)
    }catch(error){
      console.error(error)
      setToggleUserEditProfileUI(false)
    }
  }


  return (
    <>
      <form className='ChangePasswordUI' onSubmit={handleSubmit}>
        {/* <input type="text" value={UserEditProfile.name} onChange={(e)=>setUserEditProfile({...UserEditProfile,name:e.target.value})} placeholder='Enter Name'/> */}
        <input type="text" value={UserEditProfile.address} onChange={(e)=>setUserEditProfile({...UserEditProfile,address:e.target.value})} placeholder='Enter Address'/>
        <input type="text" value={UserEditProfile.phone} onChange={(e)=>setUserEditProfile({...UserEditProfile,phone:e.target.value})} placeholder='Enter Phone no.'/>
        <div className='ChangePasswordUIButtonsWrap'>
        <button type="submit">Update Info</button>
        <button onClick={()=>setToggleUserEditProfileUI(false)}>Cancel</button>
        </div>
      </form>
    </>
  )
}

export default UserEditProfileUI
