import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from './UserContext'

const UserPrivate = () => {
    const {UserToken}=useContext(UserContext)
    
  return (
    <div>
      {UserToken?<Outlet/>:<Navigate to="/userlogin"/>}
    </div>
  )
}

export default UserPrivate
