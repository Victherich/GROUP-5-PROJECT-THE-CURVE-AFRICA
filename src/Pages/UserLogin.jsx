import React, { useState } from 'react'
import logo from '../Images/image 8.png'
import "../CSS/Login.css"

const UserLogin = () => {

  const loginDetails = {
    email : "",
    password : ""
  }

  const [details,setDetails] = useState(loginDetails)
  const [loginError, setLoginError] = useState()


  const handleInputValue = (e)=>{
    // const inputDetails = e.target.value
    const { name, value} = e.target;
    setDetails({...details, [name]: value})
  }

  const  handleLogin = ()=>{
    setLoginError(validate(details))
    
  }
 

  const validate =(value)=>{
    const errors = {}
    console.log(value)

    if (!value){
      errors.email = "email must be filled"    
    }

    if (!value){
      errors.password = "password must be filled"    
    }

    console.log(errors.email)
    
  }

  return (
    <div className='userbody'>
        <div className='userform'>
          <h2>Login </h2>
          <div className='usermain'>
            <div className='userlogo'>
              <img src={logo} alt="" />
            </div>
            <div className='userdivs'>
              <div className='userinput'>
                <label >email address</label>
                <input type="text" placeholder='enter email address' name='email' value={details.email} onChange={handleInputValue} />
              </div>
              <div className='userinput'>
                <label htmlFor="">password</label>
                <input type="text" placeholder='enter password' name='password' value={details.password} onChange={handleInputValue} />
              </div>
              <button className='userbtn' onClick={handleLogin}>Login</button>
              <div className='userdont'>
                <div className='thisdiv'></div>
                <p className='myspan'>Don't have an account?  <span >Sign-Up</span> </p>
              </div>
              <p>Forgot password</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default UserLogin