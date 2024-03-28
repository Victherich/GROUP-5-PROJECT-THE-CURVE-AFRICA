
import React from 'react';
import { UserContext } from './UserContext';
import { useContext } from 'react';
import '../CSS/LogOutWarning.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userUserLogout } from '../Features/Slice';


const UserLogOutWarning = () => {
  const dispatch = useDispatch()
  const {setLogoutwarning,Userlogout,logOutHomeNavigate,setLogoutHomeNavigate}=useContext(UserContext)
  // const navigate = useNavigate() //use later


  const UserlogoutUrl = ""; // URL to be specified
// const handleLogout = async (e)=>{
//   e.preventDefault();
//   const response = axios.post(UserlogoutUrl);
//   try{
//     console.log(response.data);
//     console.log("logout");
//     setLogoutwarning(false);
//     // Userlogout()
//     // navigate('/') // use later
//   }catch(error){
//     console.error(error)
//     console.log("error logging out")
//   }

// };
  


const handleLogout =()=>{
  dispatch(userUserLogout())
  setLogoutwarning(false)
  setLogoutHomeNavigate(true)
}


  return (
    <div className='LogOutWarningWrap'>
      <div className='LogOutWarning'>
      <p>Are you sure you want to Log Out?</p>
      <div className='LogOutWarningButtons'>
        <button onClick={handleLogout}>Yes</button>
        <button onClick={()=>setLogoutwarning(false)}>No</button>
      </div>
    </div>
    </div>
  );
};

export default UserLogOutWarning;

