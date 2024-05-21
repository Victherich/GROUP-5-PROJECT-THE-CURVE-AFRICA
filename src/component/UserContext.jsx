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


import axios from 'axios';
import React, { useCallback, useState } from 'react'
import { createContext } from 'react'
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';

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
const [favourite,setFavourite]=useState(false)
const [logOutHomeNavigate,setLogoutHomeNavigate]=useState(false)
// console.log(UserToken, UserId, User)


// const Userlogin = useCallback((UserId,token,User)=>{ //receive response.data from handle login function
//   // const {UserId,token} = User;
//   setUserId(UserId)
//   setUserToken(token)
//   setUser(User)
//   localStorage.setItem("UserToken",JSON.stringify(UserToken)); //or try save to http cookie
//   console.log('login context function')
// },[]);

// const Userlogout = useCallback(()=>{
//   setUser(null)
//   setUserId(null)
//   setUserToken(null)
//   localStorage.removeItem("UserToken")
//   console.log("logout contex function")
// },[]);



const userToken = useSelector(state=>state.userUserToken)
console.log(userToken)

const handleAddToFavourite=async(_id)=>{
  const loadingAlert = Swal.fire({
    title: "Loading",
    text: "Please wait...",
    allowOutsideClick: false,
    allowEscapeKey: false,
    showConfirmButton: false
  });

  Swal.showLoading();
  try{
    axios.defaults.headers.common['Authorization'] = `Bearer ${userToken}`
    // const response = await axios.put(`https://homehub-coxc.onrender.com/api/favoriteProperty/${_id}`)
    const response = await axios.post(`https://homehub-coxc.onrender.com/api/user/addToFavorite/${_id}`)
    
    console.log(response.data)
    loadingAlert.close();
    Swal.fire({icon:"success",title:"Item Added to your favourite",showConfirmButton:false,timer:2000})
    alert ("ok ok ok ")
  }catch(error){
    console.error(error);
    loadingAlert.close()
    alert("hey hey hey ")
    // Swal.fire({icon:"error",text:response.data.error.message,showConfirmButton:false,timer:2000})
  }
}


  return (
    <UserContext.Provider value={{
      UserActiveMenu,
    setUserActiveMenu,
    toggleUserChangePasswordUI,
    setToggleUserChangePasswordUI,
    toggleUserEditProfileUI,
    setToggleUserEditProfileUI,
    logoutWarning,setLogoutwarning,
    // Userlogout,Userlogin,UserId,UserToken,
    toggleUserViewDetailpage,setToggleUserViewDetailpage,
    favourite,setFavourite,
    logOutHomeNavigate,setLogoutHomeNavigate,
    handleAddToFavourite
    }}>
        {children}
    </UserContext.Provider>
  )
}

export default  UserContextProvider

