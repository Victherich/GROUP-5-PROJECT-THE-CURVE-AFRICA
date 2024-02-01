import React from 'react'
import AgentAccount from '../component/AgentAccount'
import AgentPostAPropertyPage from '../component/AgentPostAPropertyPage'
import AgentForSaleProperties from '../component/AgentForSaleProperties'
import AgentForRentProperties from '../component/AgentForRentProperties'
import AgentSponsoredProperties from '../component/AgentSponsoredProperties'

const AgentDashboard = () => {
  return (
    <div>
        Agent DashBoard Side bar here
      <AgentAccount/>
      <AgentPostAPropertyPage/>
      <AgentForSaleProperties/>
      <AgentForRentProperties/>
      <AgentSponsoredProperties/>
    </div>
  )
}

export default AgentDashboard
