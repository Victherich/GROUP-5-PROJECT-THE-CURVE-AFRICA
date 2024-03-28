import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from './UserContext'
import { useSelector } from 'react-redux'

const UserPrivate = () => {
    // const {UserToken}=useContext(UserContext)
    const UserId=useSelector(state=>state.userUserId)
    console.log(UserId)

    const UserToken = useSelector(state=>state.userUserToken)
    console.log(UserToken)
    
  return (
    <div>
      {UserId||UserToken?<Outlet/>:<Navigate to="/userlogin"/>}
    </div>
  )
}

export default UserPrivate
