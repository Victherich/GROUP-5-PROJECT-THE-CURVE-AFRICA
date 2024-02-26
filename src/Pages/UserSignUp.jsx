import React, { useContext, useState } from 'react';
import "../CSS/AgentLogin.css";
import logo from "../Images/image 8.png";
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { UserContext } from '../component/UserContext';

const UserSignUp = () => {
  const { Userlogin } = useContext(UserContext);
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  console.log(formData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const url = '';

  const handleSubmit = async (e) => {
    if (isChecked === true) {
      e.preventDefault();
      const formDataA = new FormData();
      formDataA.append("fullName", formData.fullName);
      formDataA.append("email", formData.email);
      formDataA.append("phoneNumber", formData.phoneNumber);
      formDataA.append("password", formData.password);
      formDataA.append("confirmPassword", formData.confirmPassword);

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
    } else {
      Swal.fire({
        icon:"warning",
        text:"Please agree to terms and conditions",
        showConfirmButton:true,
      })
      e.preventDefault();
    }
  };

  return (
    <div className='agentbody'>
      <Link to={"/"} className='AgentlogoWrap'>
        <img src={logo} alt="" />
      </Link>
      <div className='agentformWrap'>
        <form onSubmit={handleSubmit} className='agentForm'>
            <div className='AgentFormPage1'>
              <div className='SignUpHeadingWrap'>
              <img src={logo}/><h1>Sign Up</h1>
              </div>
              <div className='agentinput'>
                <label htmlFor="">Full name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder='John Doe' required />
              </div>
              <div className='agentinput'>
                <label htmlFor="">Email address</label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='example@gmail.com' required />
              </div>
              <div className='agentinput'>
                <label htmlFor="">Phone number</label>
                <input
                  type="text"
                  name='phoneNumber'
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder='234801234567' required />
              </div>
              <div className='agentinput'>
                <label htmlFor="">Password</label>
                <input
                  type="text"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder='Enter password' required />
              </div>
              <div className='agentinput'>
                <label htmlFor="">Confirm Password</label>
                <input
                  type="text"
                  name='confirmPassword'
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder='Confirm password' required />
              </div>
              <div className='AgreeTermsAndConditionsWrap'>
              <input
                type='checkbox'
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)} />
              <p>I agree to the terms and conditions</p>
              </div>
              <button className='AgentSignUpNextButton'
                type="submit">Sign Up</button>
              <p className='myspan'>Already have an account?  
              <Link to={"/userlogin"} className='AgentFormPage1Link'>Login</Link></p>
            </div>
        </form>
      </div>
    </div>
  );
};

export default UserSignUp;