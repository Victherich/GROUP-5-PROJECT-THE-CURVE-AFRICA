import React, { useContext, useState } from 'react';
import "../CSS/AgentLogin.css";
import logo from "../Images/image 8.png";
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { UserContext } from '../component/UserContext';

const UserLogin = () => {
  const { Userlogin } = useContext(UserContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  console.log(formData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const url = '';

  const handleSubmit = async (e) => {
      e.preventDefault();
      const formDataA = new FormData();
      formDataA.append("email", formData.email);
      formDataA.append("password", formData.password);

      const loadingAlert = Swal.fire({
        title: "Loading",
        text: "Please wait...",
        allowOutsideClick: false,
        allowEscapeKey: false,
        showConfirmButton: false
      });

      Swal.showLoading();

      try {
        const response = await axios.post(url, formDataA);
        console.log(response.data);
        alert(response.data.message);
        loadingAlert.close();
        Userlogin(response.data.user.id, response.data.user);
      } catch (error) {
        console.error(error);
        loadingAlert.close();
      }
    
  };

  return (
    <div className='agentbody'>
      <Link to={"/"} className='AgentlogoWrap'>
        <img src={logo} alt="" />
      </Link>
      <div className='agentformWrap'>
        <form onSubmit={handleSubmit} className='agentForm' style={{height:"60%"}}>
            <div className='AgentFormPage1'>
              <div className='SignUpHeadingWrap'>
              <img src={logo}/><h1>Login</h1>
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
                  type="text"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder='Enter password' required />
              </div>
              <button className='AgentSignUpNextButton' style={{height:"11%"}}>Login</button>
              <p className='myspan'>Don't have an account?  
              <Link to={"/usersignUp"} className='AgentFormPage1Link'> Sign Up</Link></p>
            </div>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
