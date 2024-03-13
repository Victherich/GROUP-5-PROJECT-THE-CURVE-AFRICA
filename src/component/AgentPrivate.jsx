import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { AgentContext } from './AgentContext'
import { useSelector} from 'react-redux'


const AgentPrivate = () => {
  // const {AgentToken}=useContext(AgentContext)
  const token=useSelector(state=>state.userToken)
  // console.log(AgentToken)
  console.log(token)

return(
  // <div>
  //     {AgentToken?<Outlet/>:<Navigate to="/agentlogin"/>}
  // </div>
  <div>
  {token?<Outlet/>:<Navigate to="/agentlogin"/>}
</div>
)
}

export default AgentPrivate