import React from 'react'
import { UserContext } from '../component/UserContext'
import { useContext } from 'react'
import '../CSS/AgentDashboard.css'
import UserDashboardSideBar from '../component/UserDashboardSideBar'
import UserAccount from '../component/UserAccount'
import UserFavourite from '../component/UserFavourite'
import UserLogOutWarning from '../component/UserLogoutUI'



const UserDashboard = () => {
  const {UserActiveMenu,
    toggleUserChangePasswordUI,
    setToggleUserChangePasswordUI,
    toggleUserEditProfileUI,
    setToggleUserEditProfileUI,logoutWarning}=useContext(UserContext)
  return (
    <div className='AgentDashboard'>
      <div className='AgentDashboardLeft'>
        <UserDashboardSideBar/>
      </div>
      <div className='AgentDashboardRight'>
            {UserActiveMenu==="account"&&<UserAccount 
            toggleUserChangePasswordUI={toggleUserChangePasswordUI}
            setToggleUserChangePasswordUI={setToggleUserChangePasswordUI}
            toggleUserEditProfileUI={toggleUserEditProfileUI}
            setToggleUserEditProfileUI={setToggleUserEditProfileUI}/>}
            {UserActiveMenu==="posted property"&&<UserFavourite/>}
            
      </div>
      {logoutWarning&&<UserLogOutWarning/>}
      {/* {toggleAgentViewDetailpage&&<AgentViewDetailPage/>} */}
    </div>
  )
}

export default UserDashboard
