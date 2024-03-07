import React from 'react'
import AgentAccount from '../component/AgentAccount'
import AgentPostAPropertyPage from '../component/AgentPostAPropertyPage'
import AgentForSaleProperties from '../component/AgentForSaleProperties'
import AgentForRentProperties from '../component/AgentForRentProperties'
import AgentSponsoredProperties from '../component/AgentSponsoredProperties'
import AgentDashboardSideBar from '../component/AgentDashboardSideBar'
import AgentLogout from '../component/AgentLogoutUI'
import { AgentContext } from '../component/AgentContext'
import { useContext } from 'react'
import '../CSS/AgentDashboard.css'
import AgentPostedProperties from '../component/AgentPostedProperties'
import AgentLogOutWarning from '../component/AgentLogOutWarning'
import AgentViewDetailPage from '../component/AgentViewDetailPage'
import { useEffect } from 'react'


const AgentDashboard = () => {


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
        <AgentDashboardSideBar/>
      </div>
      <div className='AgentDashboardRight'>
            {AgentActiveMenu==="account"&&<AgentAccount 
            toggleAgentChangePasswordUI={toggleAgentChangePasswordUI}
            setToggleAgentChangePasswordUI={setToggleAgentChangePasswordUI}
            toggleAgentEditProfileUI={toggleAgentEditProfileUI}
            setToggleAgentEditProfileUI={setToggleAgentEditProfileUI}/>}
            
            {AgentActiveMenu==="posted property"&&<AgentPostedProperties/>}
            {AgentActiveMenu==="sponsored property"&&<AgentSponsoredProperties/>}
      </div>
      {logoutWarning&&<AgentLogOutWarning/>}
      {AgentActiveMenu==="post a property"&&<AgentPostAPropertyPage/>}
      {AgentActiveMenu==="posted a property2"&&<AgentPostAPropertyPage/>}
      {/* {toggleAgentViewDetailpage&&<AgentViewDetailPage/>} */}
    </div>
  )
}

export default AgentDashboard
