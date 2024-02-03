import React from 'react'
import AgentChangePasswordUI from './AgentChangePasswordUI'
import AgentEditProfileUI from './AgentEditProfileUI'

const AgentAccount = () => {
  return (
    <div>
      Agent Info with edit button and change password button
      <AgentChangePasswordUI/>
      <AgentEditProfileUI/>
    </div>
  )
}

export default AgentAccount
