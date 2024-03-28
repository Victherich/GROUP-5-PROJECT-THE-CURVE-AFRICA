import React, { useContext } from 'react'
import '../CSS/Account.css'
import AccountLogo from '../Images/HomeHub Logo.svg'
import { UserContext } from './UserContext'
import UserChangePasswordUI from './UserChangePasswordUI'
import UserEditProfileUI from '../component/UserEditProfileUI'
import { useSelector } from 'react-redux'


const UserAccount = ({toggleUserChangePasswordUI,
  setToggleUserChangePasswordUI,
  toggleUserEditProfileUI,
  setToggleUserEditProfileUI}) => {
    const{UserId}=useContext(UserContext)
    const User = useSelector(state=>state.userUser)


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
              <p><span>Name: </span>{User.fullName}</p>
              {/* <p><span>Address: </span>{User}</p> */}
              <p><span>Email: </span>{User.email}</p>
              <p><span>Phone no.: </span>{User.phoneNumber}</p>
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
