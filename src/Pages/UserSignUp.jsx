import React, { useContext, useEffect, useState } from 'react';
import "../CSS/AgentLogin.css";
import logo from "../Images/image 8.png";
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { UserContext } from '../component/UserContext';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userUserLogin } from '../Features/Slice';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import LoadingUI from '../component/LoadingUI';
import { AgentContext } from '../component/AgentContext';

const UserSignUp = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { Userlogin } = useContext(UserContext);
  const {loading,setLoading}=useContext(AgentContext)
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  // console.log(formData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [fullNameError, setFullNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [termsError,setTermsError]=useState("")
  const [signUpFirstClick,setSignUpFirstClick]=useState(false)


useEffect(()=>{
  if(signUpFirstClick===true){
    validateForm()
  }
},[formData,isChecked])

  //form Validation
  let isValid = true;
const validateForm = () => {
      
      if (formData.fullName.length < 5) {
        setFullNameError("Full name must be minimum of 5 characters");
        isValid = false;
      } else {
        setFullNameError("");
      }
  
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setEmailError("Please enter a valid email address");
        isValid = false;
      } else {
        setEmailError("");
      }
  
      const phoneRegex = /^\d{11}$/;
      if (!phoneRegex.test(formData.phoneNumber)) {
        setPhoneNumberError("Phone number must be 11 digits");
        isValid = false;
      } else {
        setPhoneNumberError("");
      }

      if (formData.password.length<8) {
          setPasswordError("Password must be minimum of 8 characters")
          isValid = false;
      }else {
        setPasswordError("");
      }
  
      if (formData.password !== formData.confirmPassword) {
        setConfirmPasswordError("Passwords do not match");
        isValid = false;
      } else {
        setConfirmPasswordError("");
      }

      if(isChecked!==true){
        setTermsError("Please agree with terms and conditions");
        isValid = false
      }else{
        setTermsError('');
      }
  
      return isValid;
    };


  const url = 'https://homehub-coxc.onrender.com/api/user/usersignup' ;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSignUpFirstClick(true)
    validateForm();
    if (isValid === true) {
      // const formDataA = new FormData();
      // formDataA.append("fullName", formData.fullName);
      // formDataA.append("email", formData.email);
      // formDataA.append("phoneNumber", formData.phoneNumber);
      // formDataA.append("password", formData.password);
      // formDataA.append("confirmPassword", formData.confirmPassword);

      // const loadingAlert = Swal.fire({
      //   title: "Loading",
      //   text: "Please wait...",
      //   allowOutsideClick: false,
      //   allowEscapeKey: false,
      //   showConfirmButton: false
      // });

      // Swal.showLoading();
      setLoading(true)

      try {
        const response = await axios.post(url, formData);
        console.log(response.data);
        // alert(response.data.message);
        // loadingAlert.close();
        setLoading(false)
        Swal.fire({
          title:"Sign up successfull",
          text:response.data.message,
          showConfirmButton:true,
          // timer:2000, 
        })
        const user = response.data.user
        const id = response.data.user._id
        dispatch(userUserLogin({user,id}))
        navigate("/userdashboard")
      } catch (error) {
        console.error(error);
        // loadingAlert.close();
        setLoading(false)
        // alert(error)
        Swal.fire({
          icon:"error",title:error.message,text:error.response.data,showConfirmButton:true
        })
      }
    } 
    
    // else {
    //   Swal.fire({
    //     icon:"warning",
    //     text:"Please agree to terms and conditions",
    //     showConfirmButton:true,
    //   })
    //   e.preventDefault();
    // }
  };



//handling password input show
const [passwordShow,setPasswordShow]=useState("password")
const [confirmPasswordShow,setConfirmPasswordShow]=useState("password")

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
              {fullNameError && <p style={{ color: 'red', fontSize: 'small' }}>{fullNameError}</p>}

              <div className='agentinput'>
                <label htmlFor="">Email address</label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='example@gmail.com' required />
              </div>
              {emailError && <p style={{ color: 'red', fontSize: 'small' }}>{emailError}</p>}
              <div className='agentinput'>
                <label htmlFor="">Phone number</label>
                <input
                  type="text"
                  name='phoneNumber'
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder='234801234567' required />
              </div>
              {phoneNumberError && <p style={{ color: 'red', fontSize: 'small' }}>{phoneNumberError}</p>}

              <div className='agentinput' style={{position:"relative"}}>
                <label htmlFor="">Password</label>
                <input
                  type={passwordShow}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder='Enter password' required />
                  {passwordShow==="text"?<FaEye onClick={()=>setPasswordShow("password")} style={{color:"#0e9bffa1",fontSize:"1.5rem",cursor:"pointer",position:"absolute",top:"50%",right:"10px"}}/>:
                  <FaEyeSlash onClick={()=>setPasswordShow("text")} style={{color:"#0e9bffa1",fontSize:"1.5rem",cursor:"pointer",position:"absolute",top:"50%",right:"10px"}}/>}
              </div>
              {passwordError && <p style={{ color: 'red', fontSize: 'small' }}>{passwordError}</p>}

              <div className='agentinput' style={{position:"relative"}}>
                <label htmlFor="">Confirm Password</label>
                <input
                  type={confirmPasswordShow}
                  name='confirmPassword'
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder='Confirm password' required />
                  {confirmPasswordShow==="text"?<FaEye onClick={()=>setConfirmPasswordShow("password")} style={{color:"#0e9bffa1",fontSize:"1.5rem",cursor:"pointer",position:"absolute",top:"50%",right:"10px"}}/>:
                  <FaEyeSlash onClick={()=>setConfirmPasswordShow("text")} style={{color:"#0e9bffa1",fontSize:"1.5rem",cursor:"pointer",position:"absolute",top:"50%",right:"10px"}}/>}
              </div>
              {confirmPasswordError && <p style={{ color: 'red', fontSize: 'small' }}>{confirmPasswordError}</p>}

              <div className='AgreeTermsAndConditionsWrap'>
              <input
                type='checkbox'
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)} />
              <p>I agree to the terms and conditions</p>
              </div>
              {termsError && <p style={{ color: 'red', fontSize: 'small' }}>{termsError}</p>}
              <button className='AgentSignUpNextButton'
                type="submit">Sign Up</button>
              <p className='myspan'>Already have an account?  
              <Link to={"/userlogin"} className='AgentFormPage1Link'> Login</Link></p>
            </div>
        </form>
      </div>
      {loading&&<LoadingUI/>}
    </div>
  );
};

export default UserSignUp;