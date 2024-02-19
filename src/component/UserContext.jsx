// import React, { useState } from 'react'
// import { createContext,useContext } from 'react'

// export const UserContext = createContext();

// const UserContextProvider = ({children}) => {

//   return (
//     <UserContext.Provider value={{}}>
//         {children}
//     </UserContext.Provider>
//   )
// }

// export default UserContextProvider


import React, { useCallback, useState } from 'react'
import { createContext } from 'react'

export const UserContext = createContext();


const UserContextProvider = ({children}) => {

const [UserActiveMenu,setUserActiveMenu]=useState('account')
const [toggleUserEditProfileUI,setToggleUserEditProfileUI]=useState(false);
const [toggleUserChangePasswordUI,setToggleUserChangePasswordUI]=useState(false)
const [logoutWarning,setLogoutwarning]=useState(false);
const [toggleUserViewDetailpage,setToggleUserViewDetailpage]=useState(false)
const [UserToken,setUserToken]=useState(null);
const [UserId,setUserId]=useState("User name");
const [User,setUser]=useState(null)
// console.log(UserToken, UserId, User)


const Userlogin = useCallback((UserId,token,User)=>{ //receive response.data from handle login function
  // const {UserId,token} = User;
  setUserId(UserId)
  setUserToken(token)
  setUser(User)
  localStorage.setItem("UserToken",JSON.stringify(UserToken)); //or try save to http cookie
  console.log('login context function')
},[]);

const Userlogout = useCallback(()=>{
  setUser(null)
  setUserId(null)
  setUserToken(null)
  localStorage.removeItem("UserToken")
  console.log("logout contex function")
},[]);

  return (
    <UserContext.Provider value={{
      UserActiveMenu,
    setUserActiveMenu,
    toggleUserChangePasswordUI,
    setToggleUserChangePasswordUI,
    toggleUserEditProfileUI,
    setToggleUserEditProfileUI,
    logoutWarning,setLogoutwarning,
    Userlogout,Userlogin,UserId,UserToken,
    toggleUserViewDetailpage,setToggleUserViewDetailpage,
    }}>
        {children}
    </UserContext.Provider>
  )
}

export default  UserContextProvider

