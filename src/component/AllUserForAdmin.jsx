// import React from 'react'
// import axios from 'axios'
// import Swal from 'sweetalert2'
// import { useState } from 'react'
// import { useEffect } from 'react'
// import { useSelector } from 'react-redux'

// const AllUserForAdmin = () => {

//     const [allUser,setAllUser]=useState([])
//     const [allUserB,setAllUserB]=useState([])
//     const [search,setSearch]=useState('')

//     const AgentUserToken = useSelector(state=>state.userToken)
  
  
//     // const allAgents = dataAgentList
    
//     const handleAllUser = async()=>{
//       const loadingAlert = Swal.fire({
//         title: "Loading",
//         text: "Please wait...",
//         allowOutsideClick: false,
//         allowEscapeKey: false,
//         showConfirmButton: false
//       });
  
//       Swal.showLoading();
//       try{
//         axios.defaults.headers.common['Authorization'] = `Bearer ${AgentUserToken}`;
//         const response = await axios.get("https://homehub-coxc.onrender.com/api/user/allusers")
//       console.log(response.data)
//       loadingAlert.close()
//         // setForSaleProperties(response.data.data)
//         setAllUser(response.data.allUsers)
//       }
//       catch(error){
//         console.error(error)
//         loadingAlert.close()
//         Swal.fire({icon:"warning",text:error.message,timer:2000,showConfirmButton:false})
//       }
//     }
  
//     useEffect(()=>{
//       handleAllUser()
//     },[])
  
//     console.log(allUser)
  
  
//     const handleSearch = () => {
//       const filteredUser = allUser.filter(user =>
//         user.fullName.toLowerCase().includes(search.toLowerCase()) 
//       )
//       setAllUserB(filteredUser)
//     }
  
//     const handleClearSearch = ()=>{
//       setSearch('')
//       setAllUserB(allUser)
//     }
  
//     // ensuring the assignment of allAgentsB
//     useEffect(()=>{
//       setAllUserB(allUser);
//     },[allUser])


//     //handling delet user by Admin    
//     const handleDeleteUser1 = (_id) => {
//       Swal.fire({
//           text: 'Are you sure?',
//           icon: 'warning',
//           confirmButtonText: 'Yes "Delete user"',
//           showCancelButton: true,
//       }).then((result) => {
//           if (result.isConfirmed) {
//               handleDeleteUser2(_id,prevState)
//           }
//       });
//   }

//   const handleDeleteUser2 = async (_id, allUser, setAllUser,prevState) => {
//     const loadingAlert = Swal.fire({
//       title: "Loading",
//       text: "Please wait...",
//       allowOutsideClick: false,
//       allowEscapeKey: false,
//       showConfirmButton: false
//     });
  
//     Swal.showLoading();
  
//     try {
//       axios.defaults.headers.common['Authorization'] = `Bearer ${AgentUserToken}`;
//       const response = await axios.delete(`https://homehub-coxc.onrender.com/api/user/deleteAccount/${_id}`);
//       console.log(response.data);
      
//       // Swal.fire({
//       //   icon: "success",
//       //   text: "User is deleted",
//       //   timer: 2000,
//       //   showConfirmButton: false
//       // });
//       updateallUserAfterDelete(_id)
//       // Update the user list
//       // setAllUser(prevState => prevState.filter(e => e._id !== _id));
//     } catch (error) {
//       console.error(error);
      
//       Swal.fire({
//         icon: "warning",
//         text: error.message,
//         timer: 2000,
//         showConfirmButton: false
//       });
//     } finally {
//       loadingAlert.close();
//     }
//   };

//   const updateallUserAfterDelete=(_id)=>{
//     setAllUser(prevState => prevState.filter(e => e._id !== _id));
//   }
  

//   return (
//     <div className='PostedPropertiesWrap'>
//       <div className='PostedPropertiesTitle'>
//       <h4>Users</h4>
//       </div>
//       <div className='PostedProperties'>
//       {allUserB?.map((alluser)=>(
//           <div key={alluser._id} className='AnAgentWrap' style={{flexDirection:"column"}}>
          
//               <div className='AnAgent'>
//                   {/* <h3 style={{color:"#0653C8"}}>Company: {alluser.companyName}</h3> */}
//                   <p><span>Name: </span>{alluser.fullName}</p>
//                   {/* <p><span>Address:</span> {alluser.address}</p> */}
//                   <p><span>Email:</span> {alluser.email}</p>
//                   <p><span>Phone:</span> {alluser.phoneNumber}</p>
//               </div>
//             <div style={{display:"flex",gap:"20px", marginTop:"10px"}}>
//                 <button onClick={()=>handleDeleteUser1(alluser._id)} style={{padding:"5px",border:"none",color:"white",backgroundColor:'#0E9AFF',cursor:"pointer"}}>Delete User</button>
             
//             </div>
//         </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default AllUserForAdmin


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';

const AllUserForAdmin = () => {
  const [allUser, setAllUser] = useState([]);
  const [allUserB, setAllUserB] = useState([]);
  const [search, setSearch] = useState('');

  const AgentUserToken = useSelector(state => state.userToken);

  const handleAllUser = async () => {
    const loadingAlert = Swal.fire({
      title: "Loading",
      text: "Please wait...",
      allowOutsideClick: false,
      allowEscapeKey: false,
      showConfirmButton: false
    });

    Swal.showLoading();
    try {
      axios.defaults.headers.common['Authorization'] = `Bearer ${AgentUserToken}`;
      const response = await axios.get("https://homehub-coxc.onrender.com/api/user/allusers");
      console.log(response.data);
      setAllUser(response.data.allUsers);
    } catch (error) {
      console.error(error);
      Swal.fire({ icon: "warning", text: error.message, timer: 2000, showConfirmButton: false });
    } finally {
      loadingAlert.close();
    }
  };

  useEffect(() => {
    handleAllUser();
  }, []);

  const handleSearch = () => {
    const filteredUser = allUser.filter(user =>
      user.fullName.toLowerCase().includes(search.toLowerCase())
    );
    setAllUserB(filteredUser);
  };

  const handleClearSearch = () => {
    setSearch('');
    setAllUserB(allUser);
  };

  useEffect(() => {
    setAllUserB(allUser);
  }, [allUser]);

  const handleDeleteUser1 = (_id) => {
    Swal.fire({
      text: 'Are you sure?',
      icon: 'warning',
      confirmButtonText: 'Yes, delete user',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        handleDeleteUser2(_id);
      }
    });
  };

  const handleDeleteUser2 = async (_id) => {
    const loadingAlert = Swal.fire({
      title: "Loading",
      text: "Please wait...",
      allowOutsideClick: false,
      allowEscapeKey: false,
      showConfirmButton: false
    });

    Swal.showLoading();
    try {
      axios.defaults.headers.common['Authorization'] = `Bearer ${AgentUserToken}`;
      const response = await axios.delete(`https://homehub-coxc.onrender.com/api/user/deleteAccount/${_id}`);
      console.log(response.data);
      updateAllUserAfterDelete(_id);
      Swal.fire({
        icon: "success",
        text: "User is deleted",
        timer: 2000,
        showConfirmButton: false
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "warning",
        text: error.message,
        timer: 2000,
        showConfirmButton: false
      });
    } finally {
      loadingAlert.close();
    }
  };

  const updateAllUserAfterDelete = (_id) => {
    setAllUser(prevState => prevState.filter(e => e._id !== _id));
  };

  return (
    <div className='PostedPropertiesWrap'>
      <div className='PostedPropertiesTitle'>
        <h4>Users</h4>
      </div>
      <div className='PostedProperties'>
        {allUserB.map(alluser => (
          <div key={alluser._id} className='AnAgentWrap' style={{ flexDirection: "column" }}>
            <div className='AnAgent'>
              <p><span>Name: </span>{alluser.fullName}</p>
              <p><span>Email:</span> {alluser.email}</p>
              {/* <p><span>Phone:</span> {alluser.phoneNumber}</p> */}
            </div>
            <div style={{ display: "flex", gap: "20px", marginTop: "10px" }}>
              <button onClick={() => handleDeleteUser1(alluser._id)} style={{ padding: "5px", border: "none", color: "white", backgroundColor: '#0E9AFF', cursor: "pointer" }}>Delete User</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllUserForAdmin;

