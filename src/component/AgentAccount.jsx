import React from 'react'
import AgentInfo from './AgentInfo'
import AgentEditProfile from './AgentEditProfile'
import AgentNotification from './AgentNotification'
import AgentSettings from './AgentSettings'
import AgentLogout from './AgentLogout'

const AgentAccount = () => {
  return (
    <div>
      Agent Account will have tabs thats display the following components
      <AgentInfo/>
      <AgentEditProfile/>
      <AgentNotification/>
      <AgentSettings/>
      <AgentLogout/>
    </div>
  )
}

export default AgentAccount
