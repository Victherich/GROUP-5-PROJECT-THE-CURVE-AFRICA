import React from 'react'
import AdminAccount from '../component/AdminAccount'
import AgentPostAPropertyPage from '../component/AgentPostAPropertyPage'
import AgentSponsoredProperties from '../component/AgentSponsoredProperties'
import AgentDashboardSideBar from '../component/AgentDashboardSideBar'
import { AgentContext } from '../component/AgentContext'
import { useContext } from 'react'
import '../CSS/AgentDashboard.css'
import AgentPostedProperties from '../component/AgentPostedProperties'
import AgentLogOutWarning from '../component/AgentLogOutWarning'
import AgentViewDetailPage from '../component/AgentViewDetailPage'
import { useEffect } from 'react'
import AdminDashBoardSideBar from '../component/AdminDashBoardSideBar'
import AllAgentsForAdmin from '../component/AllAgentsForAdmin'
import AllUserForAdmin from '../component/AllUserForAdmin'


const AdminDashboard = () => {


  const {AgentActiveMenu,
    toggleAgentChangePasswordUI,
    setToggleAgentChangePasswordUI,
    toggleAgentEditProfileUI,
    setToggleAgentEditProfileUI,
  logoutWarning,
  toggleAgentViewDetailpage,Agent,setAgentToken}=useContext(AgentContext)


  useEffect(()=>{
    const storedAgentToken=localStorage.getItem("AgentToken")
    if(storedAgentToken){
      // axios.defaults.headers.common["Authorization"]=`Bearer${storedUserToken}`;
      setAgentToken(storedAgentToken)
    }
    },[])


  return (
    <div className='AgentDashboard'>
      <div className='AgentDashboardLeft'>
    <AdminDashBoardSideBar/>
      </div>
      <div className='AgentDashboardRight'>
            {AgentActiveMenu==="account"&&<AdminAccount 
            toggleAgentChangePasswordUI={toggleAgentChangePasswordUI}
            setToggleAgentChangePasswordUI={setToggleAgentChangePasswordUI}
            toggleAgentEditProfileUI={toggleAgentEditProfileUI}
            setToggleAgentEditProfileUI={setToggleAgentEditProfileUI}/>}
            
            {AgentActiveMenu==="posted property"&&<AllAgentsForAdmin/>}
            {AgentActiveMenu==="sponsored property"&&<AllUserForAdmin/>}
      </div>
      {logoutWarning&&<AgentLogOutWarning/>}
      {AgentActiveMenu==="post a property"&&<AgentPostAPropertyPage/>}
      {AgentActiveMenu==="posted a property2"&&<AgentPostAPropertyPage/>}
      {/* {toggleAgentViewDetailpage&&<AgentViewDetailPage/>} */}
    </div>
  )
}

export default AdminDashboard
