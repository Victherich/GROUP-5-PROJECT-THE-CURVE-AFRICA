import React from 'react'
import '../CSS/AgentDashboardSideBar.css'
import UserContextProvider, { UserContext } from './UserContext'
import { useContext } from 'react'
import ProfileIcon from '../Images/profile icon.png'
import HomeHubLogo from '../Images/HomeHub Logo.svg'
import UserLogOutWarning from './UserLogoutUI'
import { useNavigate } from 'react-router-dom'

const UserDashboardSideBar = () => {
  const {UserActiveMenu,setUserActiveMenu,setLogoutwarning,logoutWarning}=useContext(UserContext)
  console.log(UserActiveMenu)

  const navigate=useNavigate()

  const handleNavigate=()=>{
    navigate('/')
  }

  return (
    <div className='AgentDashboardSidebar'>
      <div title="Back to Home" onClick={handleNavigate} className='AgentDashboardSidebarUp'>
        <img src={HomeHubLogo} alt="AgentDashboardSidebarLogo"/>
      </div>
      <div className='AgentDashboardSidebarDown'>
          <div className='AgentDashboardSidebarDownProfileWrap'>
              <img src={ProfileIcon} alt="UserProfileLogo"/><p>Hi, User</p>
          </div>
          <div className='AgentDashboardSidebarDownMenu'>
              <p onClick={()=>setUserActiveMenu("account")} className={UserActiveMenu==="account"?"ActiveAgentSideBarMenuP":'AgentSideBarMenuP'}>Account</p>
              
              <p onClick={()=>setUserActiveMenu('posted property')} className={UserActiveMenu==='posted property'?"ActiveAgentSideBarMenuP":'AgentSideBarMenuP'}>Favourites</p>
              
          </div>
          <div className='AgentDashboardSidebarLogoutWrap'>
              <p onClick={()=>setLogoutwarning(!logoutWarning)}>Logout</p>
          </div> 
          
      </div>
    </div>
  )
}

export default UserDashboardSideBar
