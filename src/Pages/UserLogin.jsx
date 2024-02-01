// import React, { useEffect, useState } from 'react'
// import '../CSS/Login.css'
// // import { Context } from '../component/UserContext'
// // import { useContext } from 'react'
// // import { useNavigate } from 'react-router-dom'
// import axios from 'axios'
// import Swal from 'sweetalert2'
// import { Link } from 'react-router-dom'

// const Login = () => {
//     // const navigate=useNavigate()
//     // const {user,login}=useContext(Context)
//     const [formData,setFormData]=useState({email:"",password:""})

   

//     const handleChange=(e)=>{
//         setFormData({...formData,[e.target.name]:e.target.value})
//     }
//   console.log(formData)

//   const url=""

// const handleLogin = async (e)=>{
//     e.preventDefault()
//     const loadingSwal=Swal.fire({
//         title:"Logging in...",
//         allowOutsideClick:false,
//     })

//     try{
//         const response = await axios.post(url,formData)
//         console.log(response.data)
//         loadingSwal.close()
//         Swal.fire({
//             icon: "success",
//             title: "Log in Successfull",
//             text: response.data.message,
//             allowOutsideClick:false,
//         })
//         // login(response.data.data)
//         // navigate('/dashboard')
//     }catch(error){
//         console.error(error.response.message)
//         loadingSwal.close()
//         Swal.fire({
//             icon:"error",
//             title:"Oops...",
//             text:'Something went wrong!',
//             allowOutsideClick:false,
//         })
//     }
// }

//   return (
//     <div className='Login'>
//         <h1>Login</h1>
//       <form onSubmit={handleLogin}>
//         <label>
//             Enter Email:
//             <input type="text" name="email" value={formData.email} onChange={handleChange} required/>
//         </label>
//         <label>
//             Enter Password:
//             <input type="password" name="password" value={formData.password} onChange={handleChange} required/>
//         </label>
//         <button type="submit">Log in</button>
//       </form>
//       <p>Don't have an Account?<Link to={'/signup'}>Sign up</Link></p>
//     </div>
//   )
// }

// export default Login

import React from 'react'

const UserLogin = () => {
  return (
    <div>
      UserLogin
    </div>
  )
}

export default UserLogin

