// import React, { useState } from 'react';
// import axios from 'axios'; 
// import { useNavigate } from 'react-router-dom';
// import { Context } from '../component/UserContext';
// import { useContext } from 'react';
// import Swal from 'sweetalert2';
// import '../CSS/SignUp.css';
// import { Link } from 'react-router-dom';



// const SignUp = () => {
//     const navigate = useNavigate();
//     const { theme, user, login } = useContext(Context);
//     const [formData, setFormData] = useState({
//       firstName: '',
//       lastName: '',
//     });
  

//     console.log(formData)
//     const [formVisible, setFormVisible] = useState(true);

    

//     const handleChange = (e) => {
//       setFormData({ ...formData, [e.target.name]: e.target.value });
//     };
  
//     const url = ""; // Provide the actual URL for your signup endpoint
  
//     const handleSignUp = async (e) => {
//       e.preventDefault();
      
//       // Show SweetAlert loading animation
//       const loadingSwal = Swal.fire({
//         title: 'Signing Up...',
//         allowOutsideClick: false,
//         onBeforeOpen: () => {
//           Swal.showLoading();
//         },
//       });
  
//       try {
//         const response = await axios.post(url, formData);
//         console.log(response.data);
  
//         // Close SweetAlert loading animation
//         loadingSwal.close();
  
//         // Use SweetAlert to show success message
//         Swal.fire({
//           icon: 'success',
//           title: 'Sign Up Successful!',
//           text: response.data.message,
//           allowOutsideClick: false,
//         });
  
//         login(response.data.data);  
//         navigate('/dashboard');
//       } catch (error) {
//         console.error(error.response.message);
  
//         // Close SweetAlert loading animation
//         loadingSwal.close();
  
//         // Use SweetAlert to show error message
//         Swal.fire({
//           icon: 'error',
//           title: 'Oops...',
//           text: 'Something went wrong!',
//           allowOutsideClick: false,
//         });
//       }
//     };
  
//     return (
//       <div className='SignUp'>
//         <form onSubmit={handleSignUp}>
//           {formVisible && (
//             <div className='SignUpForm1'>
//               <label>
//                 First Name:
//                 <input
//                   type='text'
//                   name='firstName'
//                   value={formData.firstName}
//                   onChange={handleChange}
//                 />
//               </label>
//               <button onClick={() => setFormVisible(false)}>Next</button>
//             </div>
//           )}
//           {!formVisible && (
//             <div className='SignUpForm2'>
//               <label>
//                 Last Name:
//                 <input
//                   type='text'
//                   name='lastName'
//                   value={formData.lastName}
//                   onChange={handleChange}
//                 />
//               </label>
//               <button onClick={() => setFormVisible(true)}>Back</button>
//               <button type='submit'>Sign Up</button>
//             </div>
//           )}
//         </form>
//         <p>Have an account?<Link to={'/'}>Log in</Link></p>
//       </div>
//     );
//   };
  
//   export default SignUp;
  

import React from 'react'

const UserSignUp = () => {
  return (
    <div>
      User sign up
    </div>
  )
}

export default UserSignUp
