import React from 'react'
import UserLogoutUI from '../component/UserLogoutUI'
import UserEditProfile from '../component/UserEditProfile'
import UserInfo from '../component/UserInfo'
import UserNotification from '../component/UserNotification'
import UserSettings from '../component/UserSettings'
import UserFavourite from '../component/UserFavourite'
const UserDashboard = () => {
  return (
    <div>
      UserDashBoard SideBar Here
      <UserInfo/>
      <UserEditProfile/>
      <UserNotification/>
      <UserSettings/>
      <UserFavourite/>
      {/* <UserLogoutUI/> */} //uncomment latter
    </div>
  )
}

export default UserDashboard
