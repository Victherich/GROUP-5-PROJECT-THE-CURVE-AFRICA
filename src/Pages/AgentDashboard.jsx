import React from 'react'
import AgentAccount from '../component/AgentAccount'
import AgentPostAPropertyPage from '../component/AgentPostAPropertyPage'
import AgentForSaleProperties from '../component/AgentForSaleProperties'
import AgentForRentProperties from '../component/AgentForRentProperties'
import AgentSponsoredProperties from '../component/AgentSponsoredProperties'
import AgentDashboardSideBar from '../component/AgentDashboardSideBar'
import AgentLogout from '../component/AgentLogoutUI'

const AgentDashboard = () => {
  return (
    <div>
      <AgentDashboardSideBar/>
      <AgentAccount/>
      <AgentPostAPropertyPage/>
      <AgentForSaleProperties/>
      <AgentForRentProperties/>
      <AgentSponsoredProperties/>
      <AgentLogout/>
      
    </div>
  )
}

export default AgentDashboard
