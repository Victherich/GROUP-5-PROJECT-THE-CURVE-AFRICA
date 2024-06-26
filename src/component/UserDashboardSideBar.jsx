import React from 'react'
import '../CSS/AgentDashboardSideBar.css'
import UserContextProvider, { UserContext } from './UserContext'
import { useContext } from 'react'
import ProfileIcon from '../Images/profile icon.png'
import HomeHubLogo from '../Images/HomeHub Logo.svg'
import UserLogOutWarning from './UserLogoutUI'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FaHouseUser, FaPowerOff, FaUser } from 'react-icons/fa'

const UserDashboardSideBar = () => {
  const User = useSelector(state=>state.userUser)
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
              {/* <img src={ProfileIcon} alt="UserProfileLogo"/> */}
              {/* <FaUser/> */}
              <p>Hi, {User.fullName.slice(0,5)}</p>
          </div>
          <div className='AgentDashboardSidebarDownMenu'>
              <p onClick={()=>setUserActiveMenu("account")} className={UserActiveMenu==="account"?"ActiveAgentSideBarMenuP":'AgentSideBarMenuP'}><FaUser/> <span>Account</span></p>
              
              <p onClick={()=>setUserActiveMenu('posted property')} className={UserActiveMenu==='posted property'?"ActiveAgentSideBarMenuP":'AgentSideBarMenuP'}><FaHouseUser/> <span>Favourites</span> </p>
              
          </div>
          <div className='AgentDashboardSidebarLogoutWrap'>
              <p onClick={()=>setLogoutwarning(!logoutWarning)}><FaPowerOff/><span>Logout</span> </p>
          </div> 
          
      </div>
    </div>
  )
}

export default UserDashboardSideBar
