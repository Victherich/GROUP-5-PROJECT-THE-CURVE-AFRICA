import React from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useState } from 'react'
import { useEffect } from 'react'

const AllAgentsForAdmin = () => {

    const [allAgents,setAllAgents]=useState([])
    const [allAgentsB,setAllAgentsB]=useState([])
    const [search,setSearch]=useState('')
  
    const url="https://homehub-coxc.onrender.com/api/getallagent"
  
    // const allAgents = dataAgentList
    
    const handleAllAgents = async()=>{
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
        setAllAgents(response.data.data)
      }
      catch(error){
        console.error(error)
        loadingAlert.close()
        Swal.fire({icon:"warning",title:"Something went wrong",timer:2000,showConfirmButton:false})
      }
    }
  
    useEffect(()=>{
      handleAllAgents()
    },[])
  
    console.log(allAgents)
  
  
    const handleSearch = () => {
      const filteredAgents = allAgents.filter(agents =>
        agents.fullName.toLowerCase().includes(search.toLowerCase()) 
      )
      setAllAgentsB(filteredAgents)
    }
  
    const handleClearSearch = ()=>{
      setSearch('')
      setAllAgentsB(allAgents)
    }
  
    // ensuring the assignment of allAgentsB
    useEffect(()=>{
      setAllAgentsB(allAgents);
    },[allAgents])

  return (
    <div className='PostedPropertiesWrap'>
      <div className='PostedPropertiesTitle'>
      <h4>Agents</h4>
      </div>
      <div className='PostedProperties'>
      {allAgentsB.map((allagents)=>(
          <div key={allagents._id} className='AnAgentWrap' style={{flexDirection:"column"}}>
          
              <div className='AnAgent'>
                  <h3 style={{color:"#0653C8"}}>Company: {allagents.companyName}</h3>
                  <p><span>Name: </span>{allagents.fullName}</p>
                  <p><span>Address:</span> {allagents.address}</p>
                  <p><span>Email:</span> {allagents.email}</p>
                  <p><span>Phone:</span> {allagents.phoneNumber}</p>
              </div>
            <div style={{display:"flex",gap:"20px", marginTop:"10px"}}>
                <button style={{padding:"5px",border:"none",color:"white",backgroundColor:'rgba(0,0,255,0.5)',cursor:"pointer"}}>Delete Agent</button>
                <button style={{padding:"5px",border:"none",color:"white",backgroundColor:'rgba(0,0,255,0.5)',cursor:"pointer"}} >Make Verified</button>
                <button style={{padding:"5px",border:"none",color:"white",backgroundColor:'rgba(0,0,255,0.5)',cursor:"pointer"}}>Make Admin</button>
            </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default AllAgentsForAdmin
