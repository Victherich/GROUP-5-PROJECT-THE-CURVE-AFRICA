import React, { useState ,useEffect} from 'react'
import "../CSS/ContactUs.css"
// import Logo from "../Images/Nima_Logo_dummy-removebg-preview.png"
import Logo from "../Images/HomeHub Logo.svg"
import { FaBackward, FaEraser } from 'react-icons/fa6'
import { FaClosedCaptioning } from 'react-icons/fa'
import { useForm, ValidationError } from '@formspree/react';
import Swal from 'sweetalert2'
import Header from "../component/Header"
import Footer from "../component/Footer"


const ContactUs = () => {
    const [formData, setFormData] = useState({orderName:"General Message",
        fullName: "", email: "", phoneNumber: "", confirmPhoneNumber: "", address: "", message: "", 
    });

    console.log(formData)
    const [isValid, setIsValid] = useState(false);
    const [confirmPhoneNumberError, setConfirmPhoneNumberError] = useState("");
    const [openSubmit,setOpenSubmit]=useState(false)
    const [fullNameError,setFullnameError]=useState("")
    const [emailError,setEmailError]=useState("")
    const [phoneNumberError,setPhoneNumberError]=useState("")
    const [addressError,setAddressError]=useState("")
    const [messageError,setMessageError]=useState("")



    const [enablealidation,setEnablealidatio]=useState(false)
    useEffect(() => {
        if(enablealidation===true){
            handleIsValid();
        }
    }, [formData]);



    const handleIsValid = () => {
        let isValid = true;

        if (formData.fullName==="") {  
            setFullnameError("Please enter your full name")
            isValid = false;
        } else {
            setFullnameError("")
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {  
            setEmailError("Please enter your valid email address")
            isValid = false;
        } else {
            setEmailError("")
        }

        if (formData.phoneNumber==="") {  
            setPhoneNumberError("Please enter your phone number")
            isValid = false;
        } else {
            setPhoneNumberError("")
        }

        // if (formData.phoneNumber !== formData.confirmPhoneNumber) {
        //     setConfirmPhoneNumberError("Phone numbers do not match");
        //     isValid = false;
        // } else {
        //     setConfirmPhoneNumberError("");
        // }

        // if (formData.address==="") {  
        //     setAddressError("Please enter your address")
        //     isValid = false;
        // } else {
        //     setAddressError("")
        // }

        // if (formData.message==="") {
        //     setMessageError("please enter your message");
        //     isValid = false;
        // } else {
        //     setMessageError("");
        // }

        setIsValid(isValid);
    }

    const handleOpenSubmit = async() => {
        await handleIsValid();
        setEnablealidatio(true)
        if (isValid){
            setOpenSubmit(true)
        }
    };


const handleLocation =()=>{
    window.history.back()
}


useEffect(()=>{
    if(formData.phoneNumber.length>=0){
        setEnablealidatio(true)
    }
},[formData.phoneNumber])

// useEffect(()=>{
//         setEnablealidatio(true)
// },[formData])


//form submit by formspree
const [state, handleSubmit] = useForm("mnqervvv");


const handleReload = ()=>{
    const loadingAlert = Swal.fire({
        title: "Loading",
        text: "Please wait...",
        allowOutsideClick: false,
        allowEscapeKey: false,
        showConfirmButton: false,
        timer:1000
      });

      Swal.showLoading();

    window.location.reload();
}

let loadingAlert;

const handleSubmit2 = (e)=>{  
    let loadingAlert = Swal.fire({
        title: "Loading",
        text: "Please wait...",
        allowOutsideClick: false,
        allowEscapeKey: false,
        showConfirmButton: false,
        // timer:2000
      });
      Swal.showLoading();
    handleSubmit(e)
}

    
    if (state.succeeded) {

        loadingAlert=Swal.fire({icon:"success",showConfirmButton:false,timer:2000})

        return<div className='FormSubmitUiWrap' >
            
        <div className='FormSubmitUi'style={{width:'100%',height:"100vh"}} >
        <img src={Logo} alt="Logo"/>
        <p>Your request has been submitted and one of our representatives shall surely get back to you as soon as possible. Thanks.</p>
        <button onClick={handleReload}>Ok</button>
        
    </div>
    </div> ;
    }

  return (
    <div className='ContactUsWrap'>
      <Header/>
        <div className='ContactUs'>
            <div className='ContactUsHeader'>
                <h1>Contact Us</h1>
            </div>
        <div className='ContactUsBody'>
                
                <div className='ContactUsBodyLeft'>
                    {/* <form action="https://formsubmit.co/digitalpremiumtech@gmail.com" method="POST"> */}
                    <form onSubmit={handleSubmit2}>
                        <input type="text" name="Order Name" value={formData.orderName} hidden/>
                        <label>
                            <div className='InputLabelChild'>
                                <p>Enter Full Name:</p>
                                <input id="fullName" type="text" name="Full Name" value={formData.fullName} onChange={(e)=>setFormData({...formData,fullName:e.target.value})} placeholder='Eg. John Ani' required/>
                            </div>
                            <p style={{ color: "red", fontSize: "small", fontStyle: "italic" }}>{fullNameError}</p>
                        </label>
                        
                        <label>
                            <div className='InputLabelChild'>
                                <p>Enter Email address:</p>
                                <input id="email" type="text" name="Email" value={formData.email} onChange={(e)=>setFormData({...formData,email:e.target.value})} placeholder='example@gmail.com' required/>
                            </div>
                            <p style={{ color: "red", fontSize: "small", fontStyle: "italic" }}>{emailError}</p>
                            </label>

                        <label>
                            <div className='InputLabelChild'>
                                <p>Enter Phone number:</p>
                                <input id="phoneNumber" type="text" name='Phone Number' value={formData.phoneNumber} onChange={(e)=>setFormData({...formData,phoneNumber:e.target.value})} placeholder="eg 07063448446" required/>
                            </div>    
                            <p style={{ color: "red", fontSize: "small", fontStyle: "italic" }}>{phoneNumberError}</p>
                        </label>

                        {/* <label>
                                <div className="InputLabelChild" >
                                    <p>Confirm Phone no.:</p>
                                    <input type="text" value={formData.confirmPhoneNumber} onChange={(e)=>setFormData({...formData,confirmPhoneNumber:e.target.value})} placeholder="confirm phone number" required />
                                </div>
                                <p style={{ color: "red", fontSize: "small", fontStyle: "italic" }}>{confirmPhoneNumberError}</p>
                                
                            </label> */}
                            
                        {/* <label>
                            <div className='InputLabelChild'>
                                 <p>Enter Complete address information:</p>
                                <input type="text" name="Address" value={formData.address} onChange={(e)=>setFormData({...formData,address:e.target.value})} placeholder="eg No. 28 Albert street Surulere Lagos state Nigeria" required />
                            </div>
                            <p style={{ color: "red", fontSize: "small", fontStyle: "italic" }}>{addressError}</p>
                        </label> */}

                        <div className='TextAreaWrap'>
                            <div className='InputLabelChild'>
                                <p>Message (optional):</p>
                                <textarea id="Message" type="text" name="Message" value={formData.message} onChange={(e)=>setFormData({...formData,message:e.target.value})} placeholder='Please enter your message here'/>
                            </div>
                            <p style={{ color: "red", fontSize: "small", fontStyle: "italic" }}>{messageError}</p>
                            </div>
                        <div className='SubmitButtonWrap'>
                            <button type="button" onClick={handleOpenSubmit}>Proceed</button>
                            </div>

                            {openSubmit&&
                            <div className='FormSubmitUiWrap'>
                                <div className='FormSubmitUi'>
                                <p>You are about to submit your request and one of our representatives shall surely get back to you as soon as possible. Click on submit now and then expect our callback. Thanks.</p>
                                <button type="submit" disabled={state.submitting}>Submit Now</button>
                                
                                <p onClick={()=>setOpenSubmit(false)} style={{cursor:"pointer",fontWeight:"bold",color:"blue"}}>X</p>
                            </div>
                            </div>
                            }
                        
                        
                    </form>
                </div>
                <div className='ContactUsBodyRight'>
                    <img src={Logo} alt="Contact us"/>
                </div>
        </div>
                <div className='BackButtonWrap'>
                    <button 
                    onClick={handleLocation}
                    ><FaBackward/> Back</button>
                </div>
            </div>
    <Footer/>
    </div>
  )
}

export default ContactUs


