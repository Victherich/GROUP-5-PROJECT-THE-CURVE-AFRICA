import React, { useContext, useState,useEffect } from 'react';
import "../CSS/AgentLogin.css";
import logo from "../Images/image 8.png";
import axios from 'axios';
import { AgentContext } from '../component/AgentContext';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../Features/Slice';
import { useSelector } from 'react-redux';

const AgentLogin = () => {
  const { Agentlogin,seekLandingpageOnLogout,setSeekLandingPageoNLogout } = useContext(AgentContext);
  
  const navigate = useNavigate();
  const Dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  console.log(formData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const AgentUserToken = useSelector(state=>state.userToken)
useEffect(()=>{
  if(AgentUserToken){
    navigate("/agentdashboard")
  } else if(seekLandingpageOnLogout===true){
    navigate("/")
  }
},[])
// console.log(seekLandingpageOnLogout)

  const url = 'https://homehub-coxc.onrender.com/api/login';

  const handleSubmit = async (e) => {
      e.preventDefault();
      const loadingAlert = Swal.fire({
        title: "Loading",
        text: "Please wait...",
        allowOutsideClick: false,
        allowEscapeKey: false,
        showConfirmButton: false
      });

      Swal.showLoading();

      try {
        const response = await axios.post(url,formData);
        console.log(response.data);
        // alert(response.data.message);
        Swal.fire({icon:"success",title:response.data.message,showConfirmButton:false,timer:2000})
        loadingAlert.close();
        // Agentlogin(response.data.token, response.data.agentExist);
        const user = response.data.agentExist
        const token = response.data.token
        Dispatch(login({user,token}))
        navigate("/agentdashboard")
        // console.log(token)
      } catch (error) {
        console.error(error);
        loadingAlert.close();
        Swal.fire({icon:"error",title:"Something went wrong",showConfirmButton:false,timer:2000});
      }
    
  };


  // useEffect(()=>{
  //   keepLogin()
  // },[])
  
  // const keepLogin = ()=>{
  //   const storedAgentToken=localStorage.getItem("AgentToken");
  //   if(storedAgentToken){
  //     axios.defaults.headers.common["Authorization"]=`Bearer${storedAgentToken}`;
  //     AgentLogin(storedAgentToken)
  //   }
  // }

  //ensureing navigation back to dashboard after going back to home page and also preventing throttle navigation
  //during logout
  
  

  return (
    <div className='agentbody'>
      <Link to={"/"} className='AgentlogoWrap'>
        <img src={logo} alt="" />
      </Link>
      <div className='agentformWrap'>
        <form onSubmit={handleSubmit} className='agentForm' style={{height:"60%"}}>
            <div className='AgentFormPage1'>
              <div className='SignUpHeadingWrap'>
              <Link to={"/"}><img src={logo}/></Link>
              <h1>Login as Agent </h1>
              </div>
      
              <div className='agentinput' style={{height:"22%"}}>
                <label htmlFor="">Email address</label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='example@gmail.com' required />
              </div>
              
              <div className='agentinput' style={{height:"22%"}}>
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder='Enter password' required />
              </div>
              <button type="submit"
              className='AgentSignUpNextButton' 
              style={{height:"11%"}}>Login</button>
              <p className='myspan'>Don't have an account?  
              <Link to={"/agentsignup"} className='AgentFormPage1Link'> Sign Up</Link></p>
            </div>
        </form>
      </div>
    </div>
  );
};

export default AgentLogin;
