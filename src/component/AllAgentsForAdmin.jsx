import React from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const AllAgentsForAdmin = () => {

    const [allAgents,setAllAgents]=useState([])
    const [allAgentsB,setAllAgentsB]=useState([])
    const [search,setSearch]=useState('')

    const AgentUserToken = useSelector(state=>state.userToken)
  
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
        Swal.fire({icon:"warning",text:"Something went wrong",timer:2000,showConfirmButton:false})
      }
    }
  
    useEffect(()=>{
      handleAllAgents()
    },[])
  
    console.log(allAgents)
  
  
    // const handleSearch = () => {
    //   const filteredAgents = allAgents.filter(agents =>
    //     agents.fullName.toLowerCase().includes(search.toLowerCase()) 
    //   )
    //   setAllAgentsB(filteredAgents)
    // }
  
    // const handleClearSearch = ()=>{
    //   setSearch('')
    //   setAllAgentsB(allAgents)
    // }
  
    // ensuring the assignment of allAgentsB
    useEffect(()=>{
      setAllAgentsB(allAgents);
    },[allAgents])



//getting an agent houses 
    const [anAgentHouses,setAnAgentHouses]=useState([])

    const handleAnAgentHouses = async(_id)=>{
      const loadingAlert = Swal.fire({
        title: "Loading",
        text: "Please wait...",
        allowOutsideClick: false,
        allowEscapeKey: false,
        showConfirmButton: false
      });
  
      Swal.showLoading();
      try{
        const response = await axios.get(`https://homehub-coxc.onrender.com/api/getAgentHouses/${_id}`)
      console.log(response.data)
      loadingAlert.close()
        // setForSaleProperties(response.data.data)
        setAnAgentHouses(response.data.data)
      }
      catch(error){
        console.error(error)
        loadingAlert.close()
        Swal.fire({icon:"warning",text:error.message,timer:2000,showConfirmButton:false})
      }
    }

    console.log(anAgentHouses)


    const handleDeleteAnAgent1 = (_id)=>{
      Swal.fire({
        text: 'Are you sure?',
        icon: 'warning',
        confirmButtonText: 'Yes, delete it!',
        showCancelButton: true,
        // confirmButtonColor: '#3085d6',
        // cancelButtonColor: '#d33',
        
      }).then((result) => {
        if (result.isConfirmed) {
          handleDeleteAnAgent2(_id)
          // Swal.fire(
          //   'Deleted!',
          //   'Your file has been deleted.',
          //   'success'
          // );
        }
      });
    }

    const handleDeleteAnAgent2 = async(_id)=>{
      const loadingAlert = Swal.fire({
        title: "Loading",
        text: "Please wait...",
        allowOutsideClick: false,
        allowEscapeKey: false,
        showConfirmButton: false
      });
  
      Swal.showLoading();
      try{
        const response = await axios.delete(`https://homehub-coxc.onrender.com/api/deleteagent/${_id}`)
      console.log(response.data)
      loadingAlert.close()
      Swal.fire({icon:"success",text:"Agent is deleted",timer:2000,showConfirmButton:false})
      
      }
      catch(error){
        console.error(error)
        loadingAlert.close()
        Swal.fire({icon:"warning",text:error.message,timer:2000,showConfirmButton:false})
      }
    }



    // const handleGetAllHouses = async()=>{
    //   const loadingAlert = Swal.fire({
    //     title: "Loading",
    //     text: "Please wait...",
    //     allowOutsideClick: false,
    //     allowEscapeKey: false,
    //     showConfirmButton: false
    //   });
  
    //   Swal.showLoading();
    //   try{
    //     const response = await axios.get("https://homehub-coxc.onrender.com/api/adminGetAllHouses")
    //   console.log(response.data)
    //   loadingAlert.close()
    //     // setForSaleProperties(response.data.data)
    //     // setAllAgents(response.data.data)
    //   }
    //   catch(error){
    //     console.error(error)
    //     loadingAlert.close()
    //     Swal.fire({icon:"warning",text:"Something went wrong",timer:2000,showConfirmButton:false})
    //   }
    // }
  
    // useEffect(()=>{
    //   handleGetAllHouses()
    // },[])
  
    // console.log()



    const handleMakeIsGood1 = (_id)=>{
      Swal.fire({
        text: 'Are you sure?',
        icon: 'warning',
        confirmButtonText: 'Yes "Make Good"',
        showCancelButton: true,
        // confirmButtonColor: '#3085d6',
        // cancelButtonColor: '#d33',
        
      }).then((result) => {
        if (result.isConfirmed) {
          handleMakeIsGood2(_id)
          // Swal.fire(
          //   'Deleted!',
          //   'Your file has been deleted.',
          //   'success'
          // );
        }
      });
    }



    //handle make Agent isGood
    const handleMakeIsGood2 = async(_id)=>{
      const loadingAlert = Swal.fire({
        title: "Loading",
        text: "Please wait...",
        allowOutsideClick: false,
        allowEscapeKey: false,
        showConfirmButton: false
      });
  
      Swal.showLoading();
      try{
        axios.defaults.headers.common['Authorization'] = `Bearer ${AgentUserToken}`;
        const response = await axios.put(`https://homehub-coxc.onrender.com/api/updateIsGood/${_id}`)
      console.log(response.data)
      loadingAlert.close()
      Swal.fire({icon:"success",text:"Agent is now Good",timer:2000,showConfirmButton:false})
      
      }
      catch(error){
        console.error(error)
        loadingAlert.close()
        Swal.fire({icon:"warning",text:error.message,timer:2000,showConfirmButton:false})
      }
    }


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
            <div style={{display:"flex",gap:"20px", marginTop:"10px",flexWrap:"wrap",justifyContent:"center",alignItems:"center"}}>
                <button onClick={()=>handleDeleteAnAgent1(allagents._id)} style={{padding:"5px",border:"none",color:"white",backgroundColor:'rgba(0,0,255,0.5)',cursor:"pointer"}}>Delete Agent</button>
                <button onClick={()=>handleMakeIsGood1(allagents._id)} style={{padding:"5px",border:"none",color:"white",backgroundColor:'rgba(0,0,255,0.5)',cursor:"pointer"}} >Make isGood</button>
                {/* <button style={{padding:"5px",border:"none",color:"white",backgroundColor:'rgba(0,0,255,0.5)',cursor:"pointer"}}>Make Admin</button> */}
                <button onClick={()=>handleAnAgentHouses(allagents._id)} style={{padding:"5px",border:"none",color:"white",backgroundColor:'rgba(0,0,255,0.5)',cursor:"pointer"}}>Houses</button>
                
            </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default AllAgentsForAdmin
