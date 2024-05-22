import React from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useState } from 'react'
import { useEffect } from 'react'

const AllUserForAdmin = () => {

    const [allUser,setAllUser]=useState([])
    const [allUserB,setAllUserB]=useState([])
    const [search,setSearch]=useState('')
  
    const url="https://homehub-coxc.onrender.com/api/allusers"
  
    // const allAgents = dataAgentList
    
    const handleAllUser = async()=>{
      const loadingAlert = Swal.fire({
        title: "Loading",
        text: "Please wait...",
        allowOutsideClick: false,
        allowEscapeKey: false,
        showConfirmButton: false
      });
  
      Swal.showLoading();
      try{
        const response = await axios.get(url)
      console.log(response.data)
      loadingAlert.close()
        // setForSaleProperties(response.data.data)
        setAllUser(response.data.data)
      }
      catch(error){
        console.error(error)
        loadingAlert.close()
        Swal.fire({icon:"warning",text:"Something went wrong",timer:2000,showConfirmButton:false})
      }
    }
  
    useEffect(()=>{
      handleAllUser()
    },[])
  
    console.log(allUser)
  
  
    const handleSearch = () => {
      const filteredAgents = allUser.filter(user =>
        user.fullName.toLowerCase().includes(search.toLowerCase()) 
      )
      setAllUserB(filteredUser)
    }
  
    const handleClearSearch = ()=>{
      setSearch('')
      setAllUserB(allUser)
    }
  
    // ensuring the assignment of allAgentsB
    useEffect(()=>{
      setAllUserB(allUser);
    },[allUser])

  return (
    <div className='PostedPropertiesWrap'>
      <div className='PostedPropertiesTitle'>
      <h4>Users</h4>
      </div>
      <div className='PostedProperties'>
      {allUserB.map((alluser)=>(
          <div key={alluser._id} className='AnAgentWrap' style={{flexDirection:"column"}}>
          
              <div className='AnAgent'>
                  <h3 style={{color:"#0653C8"}}>Company: {allagents.companyName}</h3>
                  <p><span>Name: </span>{alluser.fullName}</p>
                  <p><span>Address:</span> {alluser.address}</p>
                  <p><span>Email:</span> {alluser.email}</p>
                  <p><span>Phone:</span> {alluser.phoneNumber}</p>
              </div>
            <div style={{display:"flex",gap:"20px", marginTop:"10px"}}>
                <button style={{padding:"5px",border:"none",color:"white",backgroundColor:'#0E9AFF',cursor:"pointer"}}>Delete Agent</button>
                <button style={{padding:"5px",border:"none",color:"white",backgroundColor:'#0E9AFF',cursor:"pointer"}} >Make Verified</button>
                <button style={{padding:"5px",border:"none",color:"white",backgroundColor:'#0E9AFF',cursor:"pointer"}}>Make Admin</button>
            </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default AllUserForAdmin
