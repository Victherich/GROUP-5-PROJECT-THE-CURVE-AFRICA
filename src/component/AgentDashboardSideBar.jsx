import React from 'react'
import '../CSS/AgentDashboardSideBar.css'
import AgentContextProvider, { AgentContext } from './AgentContext'
import { useContext } from 'react'
import ProfileIcon from '../Images/profile icon.png'
import HomeHubLogo from '../Images/HomeHub Logo.svg'
import AgentLogOutWarning from './AgentLogOutWarning'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import logoutIcon from "../Images/logout icon.svg"
import postIcon from "../Images/post icon.svg"
import sponsorIcon from '../Images/sponsor icon.svg'

const AgentDashboardSideBar = () => {
  const {AgentActiveMenu,setAgentActiveMenu,logoutWarning,setLogoutwarning,Agent}=useContext(AgentContext)
  // console.log(AgentActiveMenu)

  const parsedAgent = typeof Agent === 'string' ? JSON.parse(Agent) : Agent;

  const AgentUser = useSelector(state=>state.user)
  
 
  return (
    <div className='AgentDashboardSidebar'>
      <Link to={"/"} className='AgentDashboardSidebarUp'>
        <img src={HomeHubLogo} alt="AgentDashboardSidebarLogo"/>
      </Link>
      <div className='AgentDashboardSidebarDown'>
          {/* <div className='AgentDashboardSidebarDownProfileWrap'>
              <img src={ProfileIcon} alt="AgentProfileLogo"/><p>Hi, Clara</p>
          </div> */}
          <div className='AgentDashboardSidebarDownMenu'>
              <p onClick={()=>setAgentActiveMenu("account")} 
              className={AgentActiveMenu==="account"?"ActiveAgentSideBarMenuP":'AgentSideBarMenuP'}
              ><span>Hi, {AgentUser.fullName.slice(0,6)}</span><img className="MenuIcon"src={ProfileIcon} alt="icon"/></p>

              <p onClick={()=>setAgentActiveMenu('posted property')} 
              className={AgentActiveMenu==='posted property'?"ActiveAgentSideBarMenuP":'AgentSideBarMenuP'}
              ><span>Posted Properties</span><img className="MenuIcon"src={postIcon} alt="icon"/></p>

              <p onClick={()=>setAgentActiveMenu("sponsored property")} 
              className={AgentActiveMenu==="sponsored property"?"ActiveAgentSideBarMenuP":'AgentSideBarMenuP'}
              ><span>Sponsored Properties</span><img className="MenuIcon"src={sponsorIcon} alt="icon"/></p>
          </div>
          <div className='AgentDashboardSidebarLogoutWrap'>
              <p onClick={()=>setLogoutwarning(!logoutWarning)}><span>Logout</span><img className="MenuIcon"src={logoutIcon} alt="icon"/></p>
          </div>          
      </div>
      
    </div>
  )
}

export default AgentDashboardSideBar
