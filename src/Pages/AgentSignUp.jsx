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

  const [fullNameError, setFullNameError] = useState("");
   const [emailError, setEmailError] = useState("");
   const [phoneNumberError, setPhoneNumberError] = useState("");
   const [passwordError, setPasswordError] = useState("");
   const [confirmPasswordError, setConfirmPasswordError] = useState("");
   const [idDocError,setIdDocError]=useState("")
   const [regDocError,setRegDocError]=useState("")
   const [termsAndConditionsError,setTermsAndConditionsError]=useState("")

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

//validation 

let isValid = true;
const validateForm = () => {
      
      if (formData.fullName===""||formData.fullName.length < 5) {
        setFullNameError("Full name must be minimum of 5 characters");
        isValid = false;
      } else {
        setFullNameError("");
      }
  
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (formData.email===""||!emailRegex.test(formData.email)) {
        setEmailError("Please enter a valid email address");
        isValid = false;
      } else {
        setEmailError("");
      }
  
      const phoneRegex = /^\d{11}$/;
      if (formData.phoneNumber===""||!phoneRegex.test(formData.phoneNumber)) {
        setPhoneNumberError("Phone number must be 11 digits");
        isValid = false;
      } else {
        setPhoneNumberError("");
      }

      if (formData.password===""||formData.password.length<8) {
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
  
      return isValid;
    };


    // 2nd page form validation
    let isValid2= true;
    const validateForm2 = ()=>{

      if (isChecked===false) {
        setTermsAndConditionsError("Please agree to terms and conditions");
        isValid2 = false;
      } else {
        setTermsAndConditionsError("");
      }

      if (formData.documentImage===null) {
        setIdDocError("Please upload Identity document");
        isValid2 = false;
      } else {
        setIdDocError("");
      }

      if (formData.regCert===null) {
        setRegDocError("Please upload registration document");
        isValid2 = false;
      } else {
        setRegDocError("");
      }

      return isValid2;
    }


    //handling first click for Next button
const [firstFormClick,setFirstFormClick]=useState(false)

const handleNext=()=>{
    validateForm()
    setFirstFormClick(true)
    if(isValid){
      setFormFlip(false);
    }
    setFormData({
      ...formData,
      documentImage: null,
      regCert: null
    });
  } 
  
useEffect(()=>{
  if(firstFormClick===true){
    validateForm()
  }
},[formData])



    //handling first click for submit button
    const [firstFormClick2,setFirstFormClick2]=useState(false)
    
      
    useEffect(()=>{
      if(firstFormClick2===true){
        validateForm2()
      }
    },[formData,isChecked])
    



  const url = 'https://homehub-coxc.onrender.com/api/signup';

  const handleSubmit = async (e) => {
    e.preventDefault();
    validateForm2();
    setFirstFormClick2(true)
    if (isValid2 === true) {
      
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
        Swal.fire({icon:"success",
        title:"Welcome to HomeHub",
        text:"Please click the link sent to your email",
        showConfirmButton:false,
        allowOutsideClick: false,
        allowEscapeKey: false,
      })
        loadingAlert.close();
        // navigate("/") //specify the welcome path
        // Agentlogin(response.data.agent.id, response.data.agent);
      } catch (error) {
        console.error(error);
        loadingAlert.close();
        if(error){
          Swal.fire({icon:"error",text:error.response.data.error,
        text:error.response.data.message,showConfirmButton:true})
        }
      }
    } 
    
    // else {
    //   Swal.fire({
    //     text:"Please agree to terms and conditions",
    //     icon:"warning",
    //     showConfirmButton:true,
    //   })
    //   e.preventDefault();
    // }
  };


  
  


//test
const runAlert = ()=>{
  Swal.fire({icon:"success",
        title:"Welcome to HomeHub",
        text:"Please click the link sent to your email",
        showConfirmButton:false,
        allowOutsideClick: false,
        allowEscapeKey: false,
      })
}

// runAlert()


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
                  placeholder='eg. John Doe' required />
                  {fullNameError && <p style={{ color: 'red', fontSize: 'small' }}>{fullNameError}</p>}
              </div>
              <div className='agentinput'>
                <label htmlFor="">Email address</label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='eg. example@gmail.com' required />
                  {emailError && <p style={{ color: 'red', fontSize: 'small' }}>{emailError}</p>}
              </div>
              <div className='agentinput'>
                <label htmlFor="">Phone number</label>
                <input
                  type="text"
                  name='phoneNumber'
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder='eg. 08168864508' required />
                  {phoneNumberError && <p style={{ color: 'red', fontSize: 'small' }}>{phoneNumberError}</p>}
              </div>
              <div className='agentinput'>
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder='Enter password' required />
                  {passwordError && <p style={{ color: 'red', fontSize: 'small' }}>{passwordError}</p>}
              </div>
              <div className='agentinput'>
                <label htmlFor="">Confirm Password</label>
                <input
                  type="password"
                  name='confirmPassword'
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder='Confirm password' required />
                  {confirmPasswordError && <p style={{ color: 'red', fontSize: 'small' }}>{confirmPasswordError}</p>}
              </div>
              <button className='AgentSignUpNextButton'
                type="button"
                onClick={handleNext}>Next</button>
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
    // required
/>
<label className="AgentClickToUpload" htmlFor="identityDocument">{imgTitle}</label>
              <p style={{color:"red",fontSize:"small"}}>{idDocError}</p>
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
                  // required 
                  style={{display:"none"}}/>
                  <label className="AgentClickToUpload" htmlFor="registrationCertificate">{imgTitle2}</label>
                  <p style={{color:"red",fontSize:"small"}}>{regDocError}</p>
              </div>
              <div className='AgreeTermsAndConditionsWrap'>
              <input
                type='checkbox'
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)} />
              <p>I agree to the terms and conditions</p>
              </div>
              <p style={{color:"red",fontSize:"small"}}>{termsAndConditionsError}</p>
              <div className='KYCButtons'>
              <button onClick={() => {setFormFlip(true);setImgTitle2("Click to Upload");setImgTitle("Click to Upload")}}>Back</button>
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


// import React, { useState } from 'react';
// import "../CSS/AgentLogin.css";
// import logo from "../Images/image 8.png";
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

// const AgentSignUp = () => {
//   const navigate = useNavigate();
//   const [isChecked, setIsChecked] = useState(false);
//   const [formFlip, setFormFlip] = useState(true);
//   const [imgTitle, setImgTitle] = useState("Click to Upload");
//   const [imgTitle2, setImgTitle2] = useState("Click to Upload");
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phoneNumber: "",
//     password: "",
//     confirmPassword: "",
//     companyName: "",
//     address: "",
//     documentImage: null,
//     regCert: null,
//   });
//   const [fullNameError, setFullNameError] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [phoneNumberError, setPhoneNumberError] = useState("");
//   const [confirmPasswordError, setConfirmPasswordError] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [e.target.name]: file,
//     }));
//     setImgTitle(file.name);
//   };

//   const handleImageChange2 = (e) => {
//     const file = e.target.files[0];
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [e.target.name]: file,
//     }));
//     setImgTitle2(file.name);
//   };

//   const validateForm = () => {
//     let isValid = true;

//     if (formData.fullName.length > 11) {
//       setFullNameError("Full name must be maximum 11 characters");
//       isValid = false;
//     } else {
//       setFullNameError("");
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(formData.email)) {
//       setEmailError("Please enter a valid email address");
//       isValid = false;
//     } else {
//       setEmailError("");
//     }

//     const phoneRegex = /^\d{11}$/;
//     if (!phoneRegex.test(formData.phoneNumber)) {
//       setPhoneNumberError("Phone number must be 11 digits");
//       isValid = false;
//     } else {
//       setPhoneNumberError("");
//     }

//     if (formData.password !== formData.confirmPassword) {
//       setConfirmPasswordError("Passwords do not match");
//       isValid = false;
//     } else {
//       setConfirmPasswordError("");
//     }

//     return isValid;
//   };

//   const handleNext = () => {
//     if (
//       !formData.fullName ||
//       !formData.email ||
//       !formData.phoneNumber ||
//       !formData.password ||
//       !formData.confirmPassword
//     ) {
//       Swal.fire({
//         icon: "warning",
//         text: "Please fill all the empty fields",
//         showConfirmButton: true,
//       });
//       return;
//     }

//     if (!validateForm()) {
//       return;
//     }

//     setFormFlip(false);
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   if (!isChecked) {
//   //     Swal.fire({
//   //       text: "Please agree to terms and conditions",
//   //       icon: "warning",
//   //       showConfirmButton: true,
//   //     });
//   //     return;
//   //   }

//   //   try {
//   //     const response = await axios.post('https://homehub-coxc.onrender.com/api/signup', formData, {
//   //       headers: { 'Content-Type': 'multipart/form-data' }
//   //     });
//   //     Swal.fire({
//   //       icon: "success",
//   //       title: "Welcome to HomeHub",
//   //       text: "Please click the link sent to your email",
//   //       showConfirmButton: false,
//   //       allowOutsideClick: false,
//   //       allowEscapeKey: false,
//   //     });
//   //     navigate("/");
//   //   } catch (error) {
//   //     console.error(error);
//   //     Swal.fire({
//   //       icon: "error",
//   //       title: "Something went wrong",
//   //       showConfirmButton: false,
//   //       timer: 2000
//   //     });
//   //   }
//   // };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!isChecked) {
//       Swal.fire({
//         text: "Please agree to terms and conditions",
//         icon: "warning",
//         showConfirmButton: true,
//       });
//       return;
//     }
// const loadingAlert = Swal.fire({
//   title: "Loading",
//   text: "Please wait...",
//   allowOutsideClick: false,
//   allowEscapeKey: false,
//   showConfirmButton: false
// });

// Swal.showLoading();
// const formDataA = new FormData();
//        formDataA.append("fullName", formData.fullName);
//        formDataA.append("email", formData.email);
//        formDataA.append("phoneNumber", formData.phoneNumber);
//        formDataA.append("password", formData.password);
//        formDataA.append("confirmPassword", formData.confirmPassword);
//        formDataA.append("companyName",formData.companyName);
//        formDataA.append("address", formData.address);
//        formDataA.append("documentImage", formData.documentImage);
//        formDataA.append("regCert", formData.regCert);
  
//     try {
//       // const formDataToSend = new FormData();
//       // Object.keys(formData).forEach((key) => {
//       //   formDataToSend.append(key, formData[key]);
//       // });
  
//       const response = await axios.post(
//         "https://homehub-coxc.onrender.com/api/signup",
//         formDataA,
//         {
//           headers: { "Content-Type": "multipart/form-data" },
//         }
//       );
//        loadingAlert.close();
//       Swal.fire({
//         icon: "success",
//         title: "Welcome to HomeHub",
//         text: "Please click the link sent to your email",
//         showConfirmButton: false,
//         allowOutsideClick: false,
//         allowEscapeKey: false,
//       });
//       navigate("/");
//     } catch (error) {
//       console.error(error);
//        loadingAlert.close();
//       Swal.fire({
//         icon: "error",
//         text:error.response.data.error,
//         text:error.response.data.message,
//          showConfirmButton:true,
//       });
//     }
//   };
  

//   return (
//     <div className='agentbody'>
//       <Link to={"/"} className='AgentlogoWrap'>
//         <img src={logo} alt="" />
//       </Link>
//       <div className='agentformWrap'>
//         <form onSubmit={handleSubmit} className='agentForm'>
//           {formFlip ? (
//             <div className='AgentFormPage1'>
//               <div className='SignUpHeadingWrap'>
//                 <img src={logo} alt="" /><h1>Sign Up as Agent </h1>
//               </div>
//               <div className='agentinput'>
//                 <label htmlFor="">Full name</label>
//                 <input
//                   type="text"
//                   name="fullName"
//                   value={formData.fullName}
//                   onChange={handleChange}
//                   placeholder='eg. John Doe'
//                   required
//                 />
//                 {fullNameError && <p style={{ color: 'red', fontSize: 'small' }}>{fullNameError}</p>}
//               </div>
//               <div className='agentinput'>
//                 <label htmlFor="">Email address</label>
//                 <input
//                   type="text"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder='eg. example@gmail.com'
//                   required
//                 />
//                 {emailError && <p style={{ color: 'red', fontSize: 'small' }}>{emailError}</p>}
//               </div>
//               <div className='agentinput'>
//                 <label htmlFor="">Phone number</label>
//                 <input
//                   type="text"
//                   name='phoneNumber'
//                   value={formData.phoneNumber}
//                   onChange={handleChange}
//                   placeholder='eg. 08168864508'
//                   required
//                 />
//                 {phoneNumberError && <p style={{ color: 'red', fontSize: 'small' }}>{phoneNumberError}</p>}
//               </div>
//               <div className='agentinput'>
//                 <label htmlFor="">Password</label>
//                 <input
//                   type="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   placeholder='Enter password'
//                   required
//                 />
//               </div>
//               <div className='agentinput'>
//                 <label htmlFor="">Confirm Password</label>
//                 <input
//                   type="password"
//                   name="confirmPassword"
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                   placeholder='Confirm password'
//                   required
//                 />
//                 {confirmPasswordError && <p style={{ color: 'red', fontSize: 'small' }}>{confirmPasswordError}</p>}
//               </div>
//               <button className='AgentSignUpNextButton' type="button" onClick={handleNext}>Next</button>
//               <p className='myspan'>Already have an account? <Link to={"/agentlogin"} className='AgentFormPage1Link'>Login</Link></p>
//             </div>
//           ) : (
//             <div className='AgentFormPage1'>
//               <div className='SignUpHeadingWrap'>
//                 <img src={logo} alt="" /><h1>Agent KYC information </h1>
//               </div>
//               {/* Input fields for the second part of the form */}
//               <div className='agentinput'>
//                 <label htmlFor="">Company Name</label>
//                 <input
//                   type="text"
//                   name="companyName"
//                   value={formData.companyName}
//                   onChange={handleChange}
//                   placeholder='eg. Thompson Real Estates' required />
//               </div>

//               <div className='agentinput'>
//                 <label htmlFor="">Address</label>
//                  <input
//                    type="text"
//                    name="address"
//                    value={formData.address}
//                    onChange={handleChange}
//                    placeholder='No. 23 Alfred street lekki phase 1 Lagos Nigeria' required />
//                </div>

//                <div className='agentinput'>
//                <label style={{color:"#0000FF",fontWeight:"500"}} htmlFor="" >Upload Identity Document</label><div style={{height:"1.5vh"}}></div>

//               <input
//                 id="identityDocument"
//                 type="file"
//                 name="documentImage"
//                 accept="image/*"
//                 onChange={handleImageChange}
//                 style={{ display: 'none' }}
//                 required
//               />
              
//               <label className="AgentClickToUpload" htmlFor="identityDocument">{imgTitle}</label>
//               </div> 

//               <div className='agentinput'>
//               <label style={{color:"#0000FF",fontWeight:"500"}} htmlFor="" >Registration Document</label><div style={{height:"1.5vh"}}></div>
//               <input
//                 id="registrationCertificate"
//                 type="file"
//                 name="regCert"
//                 accept="image/*"
//                 onChange={handleImageChange2}
//                 style={{ display: 'none' }}
//                 required
//               />
//               <label className="AgentClickToUpload" htmlFor="registrationCertificate">{imgTitle2}</label>
//               </div>


//               <div className='AgreeTermsAndConditionsWrap'>
//                 <input
//                   type='checkbox'
//                   checked={isChecked}
//                   onChange={() => setIsChecked(!isChecked)} />
//                 <p>I agree to the terms and conditions</p>
//               </div>
//               <div className='KYCButtons'>
//                 <button onClick={() => {setFormFlip(true);setImgTitle("Click to upload");setImgTitle2("Click to upload")}}>Back</button>
//                 <button type="submit">Sign Up</button>
//               </div>
//             </div>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AgentSignUp;
