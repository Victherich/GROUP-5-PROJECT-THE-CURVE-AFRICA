import React, { useContext } from 'react'
import '../CSS/Account.css'
import AccountLogo from '../Images/HomeHub Logo.svg'
import { UserContext } from './UserContext'
import UserChangePasswordUI from './UserChangePasswordUI'
import UserEditProfileUI from '../component/UserEditProfileUI'


const UserAccount = ({toggleUserChangePasswordUI,
  setToggleUserChangePasswordUI,
  toggleUserEditProfileUI,
  setToggleUserEditProfileUI}) => {
    const{UserId}=useContext(UserContext)


const handleUserChangePasswordUI=()=>{
  setToggleUserChangePasswordUI(!toggleUserChangePasswordUI)
  setToggleUserEditProfileUI(false)
}

const handleUserEditProfileUI=()=>{
  setToggleUserEditProfileUI(!toggleUserEditProfileUI)
  setToggleUserChangePasswordUI(false)
}

  return (
    <div className='Account'>
      <h4>User Account</h4>
      <div className='AccountUp'>
          <div className='AccountUpLeft'>
              <p><span>Name: </span>User Name</p>
              <p><span>Address: </span>No. 2 New hub avenue</p>
              <p><span>Email: </span>user@gmail.com</p>
              <p><span>Phone no.: </span>01234567</p>
          </div>
          <div className='AccountUpRight'>
              <img src={AccountLogo} alt="Logo"/>
          </div>
      </div>
      <div className='AccountDown'>
          {/* <button onClick={handleUserEditProfileUI}>Edit Info</button> */}
          {/* <button onClick={handleUserChangePasswordUI}>Change Password</button> */}
          
      </div>  
      {/* {toggleUserChangePasswordUI&&<UserChangePasswordUI/>} */}
      {toggleUserEditProfileUI&&<UserEditProfileUI/>}
    </div>
  )
}

export default UserAccount
