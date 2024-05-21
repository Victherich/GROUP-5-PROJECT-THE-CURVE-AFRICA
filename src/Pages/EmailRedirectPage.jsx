import React from 'react'
import "../CSS/EmailRedirectPage.css"
import Logo from "../Images/HomeHub Logo.svg"
import { useNavigate } from 'react-router-dom'

const EmailRedirectPage = () => {
    const navigate=useNavigate()
  return (
    <div className='FormSubmitUiWrap' >
            
        <div className='FormSubmitUi'style={{width:'100%',height:"100vh"}} >
        <img src={Logo} alt="Logo"/>
        <h1>Welcome to HomeHub !!!</h1> 
        <p>We have sent a verification link to your email. Please go your email and click on the link to verify your account. After you've verified your account, go to the home page and click on the POST A PROPERTY button to login and start posting. Thanks</p>
        <button onClick={()=>navigate("/")}>Go to Home</button>
        
    </div>
    </div>
  )
}

export default EmailRedirectPage
