import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Context } from './UserContext'
import { useContext } from 'react'

const Private = () => {
const {user}=useContext(Context)
console.log(user)

  return (user?<Outlet/>:<Navigate to='/'/>)
}

export default Private
