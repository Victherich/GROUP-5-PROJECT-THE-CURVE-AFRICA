import React, { useContext, useEffect, useState } from 'react';
import "../CSS/AgentLogin.css";
import logo from "../Images/image 8.png";
import axios from 'axios';
import { AgentContext } from '../component/AgentContext';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const AgentSignUp = () => {
  const { Agentlogin } = useContext(AgentContext);
  const navigate=useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const [formFlip, setFormFlip] = useState(true);
  const [imgTitle,setImgTitle]=useState("Click to Upload")
  const [imgTitle2,setImgTitle2]=useState("Click to Upload")
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
// console.log(formData.documentImage.name)
  console.log(formData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    setImgTitle(e.target.files[0].name)
  };

  const handleImageChange2 = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    setImgTitle2(e.target.files[0].name)
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
        // alert(response.data.message);
        Swal.fire({icon:"success",title:response.data.message,showConfirmButton:false,timer:2000})
        loadingAlert.close();
        navigate("/") //specify the welcome path
        // Agentlogin(response.data.agent.id, response.data.agent);
      } catch (error) {
        console.error(error);
        loadingAlert.close();
        Swal.fire({icon:"error",title:"Something went wrong",showConfirmButton:false,timer:2000})
      }
    } else {
      Swal.fire({
        text:"Please agree to terms and conditions",
        icon:"warning",
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
          {formFlip ? (
            <div className='AgentFormPage1'>
              <div className='SignUpHeadingWrap'>
              <img src={logo}/><h1>Sign Up as Agent </h1>
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
              <button className='AgentSignUpNextButton'
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
                    Swal.fire({
                      icon:"warning",
                      // title:"Please fill all the empty fields",
                      text:"Please fill all the empty fields",
                      showConfirmButton:true,
                    })
                  }
                }}>Next</button>
              <p className='myspan'>Already have an account?  <Link to={"/agentlogin"} className='AgentFormPage1Link'>Login</Link></p>
            </div>
          ) : (
            <div className='AgentFormPage1'>
              <div className='SignUpHeadingWrap'>
              <img src={logo}/><h1>Agent KYC information </h1>
              </div>
              <div className='agentinput'>
                <label htmlFor="">Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder='eg. Thompson Real Estates' required />
              </div>
              <div className='agentinput'>
                <label htmlFor="">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder='No. 23 Alfred street lekki phase 1 Lagos Nigeria' required />
              </div>
              <div className='agentinput'>
                <label style={{color:"#0000FF",fontWeight:"500"}} htmlFor="" >Upload Identity Document</label><div style={{height:"1.5vh"}}></div>
                <input
    id="identityDocument"
    type="file"
    name="documentImage"
    accept="image/*"
    onChange={handleImageChange}
    style={{ display: 'none' }} // or visibility: 'hidden'
    required
/>
<label className="AgentClickToUpload" htmlFor="identityDocument">{imgTitle}</label>

              </div>
              <div className='agentinput'>
                <label style={{color:"#0000FF",fontWeight:"500"}} htmlFor=""> Company Registration Certificate</label><div style={{height:"1.5vh"}}></div>
                <input
                
                id="registrationCertificate"
                  type="file"
                  name="regCert"
                  accept="image/*"
                  onChange={handleImageChange2}
                  placeholder='select registration certificate' 
                  required 
                  style={{display:"none"}}/>
                  <label className="AgentClickToUpload" htmlFor="registrationCertificate">{imgTitle2}</label>
              </div>
              <div className='AgreeTermsAndConditionsWrap'>
              <input
                type='checkbox'
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)} />
              <p>I agree to the terms and conditions</p>
              </div>
              <div className='KYCButtons'>
              <button onClick={() => setFormFlip(true)}>Back</button>
              <button
                type="submit"
                >Sign Up</button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default AgentSignUp;