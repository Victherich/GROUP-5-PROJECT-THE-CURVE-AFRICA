import React from 'react'
import UserLogoutUI from '../component/UserLogoutUI'
import UserFavourite from '../component/UserFavourite'
import UserDashboardSideBar from '../component/UserDashboardSideBar'
import UserAccount from '../component/UserAccount'
const UserDashboard = () => {
  return (
    <div>
      <UserDashboardSideBar/>
      <UserAccount/>
      <UserFavourite/>
      <UserLogoutUI/> 
    </div>
  )
}

export default UserDashboard
