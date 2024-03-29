import React from 'react';
import { AgentContext } from './AgentContext';
import { useContext } from 'react';
import '../CSS/LogOutWarning.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../Features/Slice';

const AgentLogOutWarning = () => {
  const { setLogoutwarning, Agentlogout, AgentToken,setSeekLandingPageoNLogout} = useContext(AgentContext);
  const navigate = useNavigate();
  console.log(AgentToken);

  const parsedAgentToken = typeof Agent === 'string' ? JSON.parse(AgentToken) : AgentToken;

  const Dispatch = useDispatch()
  const AgentUserToken = useSelector(state=>state.userToken)

  const AgentlogoutUrl = 'https://homehub-coxc.onrender.com/api/logout';

  const handleLogout = async (e) => {
    e.preventDefault();
    // handleCancel()
    const loadingAlert = Swal.fire({
      title: "Loading",
      text: "Please wait...",
      allowOutsideClick: false,
      allowEscapeKey: false,
      showConfirmButton: false
    });
    Swal.showLoading();
    try {
      axios.defaults.headers.common['Authorization'] = `Bearer ${AgentUserToken}`;
      const response = await axios.post(AgentlogoutUrl);
      console.log(response.data);
      console.log("logout");
      setLogoutwarning(false);
      // navigate('/');
      // Agentlogout();
      Dispatch(logout())
      setSeekLandingPageoNLogout(true)
      loadingAlert.close();
      Swal.fire({icon:"success",title:"Logout Successful",showConfirmButton:false,timer:2000})
      
    } catch (error) {
      console.error(error);
      console.log("error logging out");
      loadingAlert.close();
      setLogoutwarning(false);
      Swal.fire({icon:"error",title:"Something went wrong",showConfirmButton:false,timer:2000})
      // Handle error, perhaps display a message to the user
    }
  };

  // const handleLogout = ()=>{
  //   Agentlogout();
  //   navigate('/');
  //   setLogoutwarning(false);
  // }

  const handleCancel = () => {
    setLogoutwarning(false);
  };

  return (
    <div className='LogOutWarningWrap'>
      <div className='LogOutWarning'>
        <p>Are you sure you want to Log Out?</p>
        <div className='LogOutWarningButtons'>
          <button onClick={handleLogout}>Yes</button>
          <button onClick={handleCancel}>No</button>
        </div>
      </div>
    </div>
  );
};

export default AgentLogOutWarning;
