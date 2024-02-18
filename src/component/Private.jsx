import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { UserContext } from './UserContext'
import { useContext } from 'react'
import { AgentContext } from './AgentContext'

const Private = () => {
  const {AgentToken}=useContext(AgentContext)
  console.log(AgentToken)

return{
}   // return (user?<Outlet/>:<Navigate to='/'/>)

}

export default Private
