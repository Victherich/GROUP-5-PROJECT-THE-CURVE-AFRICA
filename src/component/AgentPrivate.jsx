import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { AgentContext } from './AgentContext'


const AgentPrivate = () => {
  const {AgentToken}=useContext(AgentContext)
  console.log(AgentToken)

return(
  <div>
      {AgentToken?<Outlet/>:<Navigate to="/agentlogin"/>}
  </div>
)
}

export default AgentPrivate