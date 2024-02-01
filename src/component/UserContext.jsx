import React, { useState } from 'react'
import { createContext,useContext } from 'react'

export const Context = createContext();

const ContextProvider = ({children}) => {
const [theme,setTheme]=useState(true)
const [user,setUser]=useState(null)

const login = (userData) => {
    setUser(userData)
}


  return (
    <Context.Provider value={{theme,setTheme,user,login}}>
        {children}
    </Context.Provider>
  )
}

export default ContextProvider
