// import axios from 'axios'
// import React, { useState } from 'react'
// import { resolvePath } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
// import Swal from 'sweetalert2'

// const UserLogoutUI = () => {
// const navigate=useNavigate()
// const url = ""

// const handleLogOut= async ()=>{
// const loadingSwal = Swal.fire({}) //call the loading state Ui

//     try{
//         const response = await axios.post(url)
//         console.log(response.data)
//         Swal.fire({
//             icon:"success",
//             title:"Log out Successful",
//             text:response.data.message,
//             allowOutsideClick:false,
//         })
//         navigate('/')
//     }catch(error){
//         console.error(error.response.message)
//         Swal.fire({
//             icon:"error",
//             title:"Oops...",
//             text:"Something went wrong!",
//             allowOutsideClick:false,
//         })
//     }
// }


//   return (
//     <div className='Logout'>
//       <p onClick={handleLogOut}>Logout</p>
//     </div>
//   )
// }

// export default UserLogoutUI
import React from 'react'

const UserLogoutUI = () => {
  return (
    <div>
      User LogOut UI
    </div>
  )
}

export default UserLogoutUI
