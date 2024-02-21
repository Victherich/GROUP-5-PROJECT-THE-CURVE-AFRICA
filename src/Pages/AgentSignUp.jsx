import React, { useContext, useState } from 'react';
import "../CSS/AgentLogin.css";
import logo from "../Images/image 8.png";
import axios from 'axios';
import { AgentContext } from '../component/AgentContext';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const AgentSignUp = () => {
  const { Agentlogin } = useContext(AgentContext);
  const [isChecked, setIsChecked] = useState(false);
  const [formFlip, setFormFlip] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    companyName: "",
    address: "",
    documentImage: null,
    regCert: null,
  });

  console.log(formData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
  };

  const url = 'https://homehub-coxc.onrender.com/api/signup';

  const handleSubmit = async (e) => {
    if (isChecked === true) {
      e.preventDefault();
      const formDataA = new FormData();
      formDataA.append("fullName", formData.fullName);
      formDataA.append("email", formData.email);
      formDataA.append("phoneNumber", formData.phoneNumber);
      formDataA.append("password", formData.password);
      formDataA.append("confirmPassword", formData.confirmPassword);
      formDataA.append("companyName",formData.companyName);
      formDataA.append("address", formData.address);
      formDataA.append("documentImage", formData.documentImage);
      formDataA.append("regCert", formData.regCert);

      const loadingAlert = Swal.fire({
        title: "Loading",
        text: "Please wait...",
        allowOutsideClick: false,
        allowEscapeKey: false,
        showConfirmButton: false
      });

      Swal.showLoading();

      try {
        const response = await axios.post(url, formDataA, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
        console.log(response.data);
        alert(response.data.message);
        loadingAlert.close();
        Agentlogin(response.data.agent.id, response.data.agent);
      } catch (error) {
        console.error(error);
        loadingAlert.close();
      }
    } else {
      alert("Please agree to terms and conditions");
      e.preventDefault();
    }
  };

  return (
    <div className='agentbody'>
      <div className='AgentlogoWrap'>
        <img src={logo} alt="" />
      </div>
      <div className='agentformWrap'>
        <form onSubmit={handleSubmit} className='agentForm'>
          {formFlip ? (
            <div className='AgentFormPage1'>
              <h1>Sign Up as Agent </h1>
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
              <button
                type="button"
                onClick={() => {
                  if (
                    formData.fullName &&
                    formData.email &&
                    formData.phoneNumber &&
                    formData.password &&
                    formData.confirmPassword
                  ) {
                    setFormFlip(false);
                  } else {
                    alert("Please fill all the empty fields");
                  }
                }}>Next</button>
              <p className='myspan'>Already have an account?</p>  <Link to={"/agentlogin"}>Login</Link>
            </div>
          ) : (
            <div className='AgentFormPage2'>
              <h2>Agent KYC information </h2>
              <div className='agentinput'>
                <label htmlFor="">Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder='eg. Thompson Real Estates' required />
              </div>
              <div className='agentinputWrap'>
                <label htmlFor="">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder='No. 23 Alfred street lekki phase 1 Lagos Nigeria' required />
              </div>
              <div className='agentinput'>
                <label htmlFor="">Identity Document</label>
                <input
                  type="file"
                  name="documentImage"
                  accept="image/*"
                  onChange={handleImageChange}
                  placeholder='select document image' required />
              </div>
              <div className='agentinput'>
                <label htmlFor=""> Company Registration Certificate</label>
                <input
                  type="file"
                  name="regCert"
                  accept="image/*"
                  onChange={handleImageChange}
                  placeholder='select registration certificate' required />
              </div>
              <input
                type='checkbox'
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)} />
              <p>I agree to the terms and conditions</p>
              <button onClick={() => setFormFlip(true)}>Back</button>
              <button
                type="submit"
                className='agentbtn'>Sign Up</button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default AgentSignUp;