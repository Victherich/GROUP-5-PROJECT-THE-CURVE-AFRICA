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
import { FaHSquare, FaPodcast, FaPowerOff, FaToggleOff, FaUser } from 'react-icons/fa'
import { FaHouse, FaHouseCircleCheck, FaHouseFlag, FaUserLargeSlash, FaUsers } from 'react-icons/fa6'


const AgentDashboardSideBar = () => {
  // const User = useSelector(state=>state.userUser)
  const {AgentActiveMenu,setAgentActiveMenu,Agent,logoutWarning,setLogoutwarning,setSwitchDashboard,}=useContext(AgentContext)

  // console.log(AgentActiveMenu)

  const parsedAgent = typeof Agent === 'string' ? JSON.parse(Agent) : Agent;

  const AgentUser = useSelector(state=>state.user)
  
 
  return (
    <div className='AgentDashboardSidebar' style={{backgroundColor:"lightblue"}}>
      <Link title="Back to Home" to={"/"} className='AgentDashboardSidebarUp'>
        <img src={HomeHubLogo} alt="AgentDashboardSidebarLogo"/>
      </Link>
      <div className='AgentDashboardSidebarDown'>
          {/* <div className='AgentDashboardSidebarDownProfileWrap'>
              <img src={ProfileIcon} alt="AgentProfileLogo"/><p>Hi, Clara</p>
          </div> */}
          <div className='AgentDashboardSidebarDownMenu'>
              <p onClick={()=>setAgentActiveMenu("account")} 
              className={AgentActiveMenu==="account"?"ActiveAgentSideBarMenuP":'AgentSideBarMenuP'}
              ><FaUser/><span>Hi, {AgentUser.fullName.slice(0,6)}</span>
              {/* <img className="MenuIcon"src={ProfileIcon} alt="icon"/> */}
              
              </p>

              <p onClick={()=>setAgentActiveMenu('posted property')} 
              className={AgentActiveMenu==='posted property'?"ActiveAgentSideBarMenuP":'AgentSideBarMenuP'}
              ><FaHouseCircleCheck/> <span>Agents</span>
              {/* <img className="MenuIcon"src={postIcon} alt="icon"/> */}
              
              </p>

              <p onClick={()=>setAgentActiveMenu("sponsored property")} 
              className={AgentActiveMenu==="sponsored property"?"ActiveAgentSideBarMenuP":'AgentSideBarMenuP'}
              ><FaUsers/>
              <span>Users</span>
              {/* <img className="MenuIcon"src={sponsorIcon} alt="icon"/> */}
              </p>

              <p  onClick={()=>setSwitchDashboard(false)}
              className='AgentSideBarMenuP'
              ><FaToggleOff/>
              <span>Switch to Agent</span>
           
              </p>
          </div>
          <div className='AgentDashboardSidebarLogoutWrap'>
              <p onClick={()=>setLogoutwarning(!logoutWarning)}>
                <FaPowerOff/>
                <span>Logout</span>
                {/* <img className="MenuIcon"src={logoutIcon} alt="icon"/> */}
                </p>
          </div>          
      </div>
      
    </div>
  )
}

export default AgentDashboardSideBar
