import React from 'react'
import '../CSS/AgentDashboardSideBar.css'
import AgentContextProvider, { AgentContext } from './AgentContext'
import { useContext } from 'react'
import ProfileIcon from '../Images/profile icon.png'
import HomeHubLogo from '../Images/HomeHub Logo.svg'
import AgentLogOutWarning from './AgentLogOutWarning'

const AgentDashboardSideBar = () => {
  const {AgentActiveMenu,setAgentActiveMenu,logoutWarning,setLogoutwarning}=useContext(AgentContext)
  // console.log(AgentActiveMenu)
 
  return (
    <div className='AgentDashboardSidebar'>
      <div className='AgentDashboardSidebarUp'>
        <img src={HomeHubLogo} alt="AgentDashboardSidebarLogo"/>
      </div>
      <div className='AgentDashboardSidebarDown'>
          <div className='AgentDashboardSidebarDownProfileWrap'>
              <img src={ProfileIcon} alt="AgentProfileLogo"/><p>Hi, Clara</p>
          </div>
          <div className='AgentDashboardSidebarDownMenu'>
              <p onClick={()=>setAgentActiveMenu("account")} className={AgentActiveMenu==="account"?"ActiveAgentSideBarMenuP":'AgentSideBarMenuP'}>Account</p>
              <p onClick={()=>setAgentActiveMenu("post a property")} className={AgentActiveMenu==="post a property"?"ActiveAgentSideBarMenuP":'AgentSideBarMenuP'}>Post a Property</p>
              <p onClick={()=>setAgentActiveMenu('posted property')} className={AgentActiveMenu==='posted property'?"ActiveAgentSideBarMenuP":'AgentSideBarMenuP'}>Posted Properties</p>
              <p onClick={()=>setAgentActiveMenu("sponsored property")} className={AgentActiveMenu==="sponsored property"?"ActiveAgentSideBarMenuP":'AgentSideBarMenuP'}>Sponsored Properties</p>
          </div>
          <div className='AgentDashboardSidebarLogoutWrap'>
              <p onClick={()=>setLogoutwarning(!logoutWarning)}>Logout</p>
          </div>          
      </div>
      
    </div>
  )
}

export default AgentDashboardSideBar
