import React from 'react'
import UserEditProfileUI from './UserEditProfileUI'
import UserChangePasswordUI from './UserChangePasswordUI'

const UserAccount = () => {
  return (
    <div>
      Agent Info with edit button and change password button
      <UserChangePasswordUI/>
      <UserEditProfileUI/>
    </div>
  )
}

export default UserAccount
