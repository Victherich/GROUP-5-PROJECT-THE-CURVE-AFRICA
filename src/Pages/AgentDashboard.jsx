import React, { useState } from 'react'
import AgentAccount from '../component/AgentAccount'
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
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'


const AgentDashboard = () => {

  const AgentUser = useSelector(state=>state.user)


  const {AgentActiveMenu,
    toggleAgentChangePasswordUI,
    setToggleAgentChangePasswordUI,
    toggleAgentEditProfileUI,
    setToggleAgentEditProfileUI,
  logoutWarning,
  toggleAgentViewDetailpage,Agent,setAgentToken,PostAPropertyShow,setPostAPropertyShow}=useContext(AgentContext)


  useEffect(()=>{
    const storedAgentToken=localStorage.getItem("AgentToken")
    if(storedAgentToken){
      // axios.defaults.headers.common["Authorization"]=`Bearer${storedUserToken}`;
      setAgentToken(storedAgentToken)
    }
    },[])


   
  



  return (
    <div className='AgentDashboard animate__animated animate__slideInRight'>
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
      {/* {AgentActiveMenu==="posted a property2"&&AgentUser?.isGood?<AgentPostAPropertyPage/>:""} */}
      {PostAPropertyShow&&<AgentPostAPropertyPage/>}
      {/* {toggleAgentViewDetailpage&&<AgentViewDetailPage/>} */}
    </div>
  )
}

export default AgentDashboard
