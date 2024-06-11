// import React from 'react'
// import axios from 'axios'
// import Swal from 'sweetalert2'
// import { useState } from 'react'
// import { useEffect } from 'react'
// import { useSelector } from 'react-redux'
// import Badge from "../Images/badge5.png"

// const AllAgentsForAdmin = () => {

//     const [allAgents,setAllAgents]=useState([])
//     const [allAgentsB,setAllAgentsB]=useState([])
//     const [search,setSearch]=useState('')

//     const AgentUserToken = useSelector(state=>state.userToken)
  
//     const url="https://homehub-coxc.onrender.com/api/getallagent"
  
//     // const allAgents = dataAgentList
    
//     const handleAllAgents = async()=>{
//       const loadingAlert = Swal.fire({
//         title: "Loading",
//         text: "Please wait...",
//         allowOutsideClick: false,
//         allowEscapeKey: false,
//         showConfirmButton: false
//       });
  
//       Swal.showLoading();
//       try{
//         const response = await axios.get(url)
//       console.log(response.data)
//       loadingAlert.close()
//         // setForSaleProperties(response.data.data)
//         setAllAgents(response.data.data)
//       }
//       catch(error){
//         console.error(error)
//         loadingAlert.close()
//         Swal.fire({icon:"warning",text:"Something went wrong",timer:2000,showConfirmButton:false})
//       }
//     }
  
//     useEffect(()=>{
//       handleAllAgents()
//     },[])
  
//     console.log(allAgents)
  
  
//     // const handleSearch = () => {
//     //   const filteredAgents = allAgents.filter(agents =>
//     //     agents.fullName.toLowerCase().includes(search.toLowerCase()) 
//     //   )
//     //   setAllAgentsB(filteredAgents)
//     // }
  
//     // const handleClearSearch = ()=>{
//     //   setSearch('')
//     //   setAllAgentsB(allAgents)
//     // }
  
//     // ensuring the assignment of allAgentsB
//     useEffect(()=>{
//       setAllAgentsB(allAgents);
//     },[allAgents])



// //getting an agent houses 

// //opening the modal and runung the get agent houses 

// const [toggleAgents,setToggleAgents]=useState(false) //hing and showing agents when an agenet houses modal is opened


// const handleAnAgentHouses1 =(_id)=>{
//       const updatedArray = allAgents.map((e)=>{
//         if(e._id===_id){
//           return{...e,openHouses:true}
//         }
//         return e
//       })
//       setAllAgents(updatedArray)
//       handleAnAgentHouses2(_id)
//       setToggleAgents(true)
// }


// //closing the modal for an agent houses
// const handleCloseAnAgentHouses =(_id)=>{
//   const updatedArray = allAgents.map((e)=>{
//     if(e._id===_id){
//       return {...e,openHouses:false}
//     }
//     return e
//   })
//   setAllAgents(updatedArray)
//   setToggleAgents(false)
// }



//     const [anAgentHouses,setAnAgentHouses]=useState([])
    


//     const handleAnAgentHouses2 = async(_id)=>{
//       const loadingAlert = Swal.fire({
//         title: "Loading",
//         text: "Please wait...",
//         allowOutsideClick: false,
//         allowEscapeKey: false,
//         showConfirmButton: false
//       });
  
//       Swal.showLoading();
//       try{
//         const response = await axios.get(`https://homehub-coxc.onrender.com/api/getAgentHouse/${_id}`)
//       console.log(response.data)
//       loadingAlert.close()
//         // setForSaleProperties(response.data.data)
//         setAnAgentHouses(response.data.houses)
//       }
//       catch(error){
//         console.error(error)
//         loadingAlert.close()
//         Swal.fire({icon:"warning",text:error.message,timer:2000,showConfirmButton:false})
//       }
//     }

//     console.log(anAgentHouses)


//     const handleDeleteAnAgent1 = (_id)=>{
//       Swal.fire({
//         text: 'Are you sure?',
//         icon: 'warning',
//         confirmButtonText: 'Yes, delete it!',
//         showCancelButton: true,
//         // confirmButtonColor: '#3085d6',
//         // cancelButtonColor: '#d33',
        
//       }).then((result) => {
//         if (result.isConfirmed) {
//           handleDeleteAnAgent2(_id)
//           // Swal.fire(
//           //   'Deleted!',
//           //   'Your file has been deleted.',
//           //   'success'
//           // );
//         }
//       });
//     }

//     const handleDeleteAnAgent2 = async(_id)=>{
//       const loadingAlert = Swal.fire({
//         title: "Loading",
//         text: "Please wait...",
//         allowOutsideClick: false,
//         allowEscapeKey: false,
//         showConfirmButton: false
//       });
  
//       Swal.showLoading();
//       try{
//         const response = await axios.delete(`https://homehub-coxc.onrender.com/api/deleteagent/${_id}`)
//       console.log(response.data)
//       loadingAlert.close()
//       Swal.fire({icon:"success",text:"Agent is deleted",timer:2000,showConfirmButton:false})
      
//       }
//       catch(error){
//         console.error(error)
//         loadingAlert.close()
//         Swal.fire({icon:"warning",text:error.message,timer:2000,showConfirmButton:false})
//       }
//     }



//     // const handleGetAllHouses = async()=>{
//     //   const loadingAlert = Swal.fire({
//     //     title: "Loading",
//     //     text: "Please wait...",
//     //     allowOutsideClick: false,
//     //     allowEscapeKey: false,
//     //     showConfirmButton: false
//     //   });
  
//     //   Swal.showLoading();
//     //   try{
//     //     const response = await axios.get("https://homehub-coxc.onrender.com/api/adminGetAllHouses")
//     //   console.log(response.data)
//     //   loadingAlert.close()
//     //     // setForSaleProperties(response.data.data)
//     //     // setAllAgents(response.data.data)
//     //   }
//     //   catch(error){
//     //     console.error(error)
//     //     loadingAlert.close()
//     //     Swal.fire({icon:"warning",text:"Something went wrong",timer:2000,showConfirmButton:false})
//     //   }
//     // }
  
//     // useEffect(()=>{
//     //   handleGetAllHouses()
//     // },[])
  
//     // console.log()



//     const handleMakeIsGood1 = (_id)=>{
//       Swal.fire({
//         text: 'Are you sure?',
//         icon: 'warning',
//         confirmButtonText: 'Yes "Make Good"',
//         showCancelButton: true,
//         // confirmButtonColor: '#3085d6',
//         // cancelButtonColor: '#d33',
        
//       }).then((result) => {
//         if (result.isConfirmed) {
//           handleMakeIsGood2(_id)
//           // Swal.fire(
//           //   'Deleted!',
//           //   'Your file has been deleted.',
//           //   'success'
//           // );
//         }
//       });
//     }



//     //handle make Agent isGood
//     const handleMakeIsGood2 = async(_id)=>{
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
//         const response = await axios.put(`https://homehub-coxc.onrender.com/api/updateIsGood/${_id}`)
//       console.log(response.data)
//       loadingAlert.close()
//       Swal.fire({icon:"success",text:"Agent is now Good",timer:2000,showConfirmButton:false})
      
//       }
//       catch(error){
//         console.error(error)
//         loadingAlert.close()
//         Swal.fire({icon:"warning",text:error.message,timer:2000,showConfirmButton:false})
//       }
//     }



//     //making a property verified
//     const handleMakePropertyVerified1 = (_id)=>{
//       Swal.fire({
//         text: 'Are you sure?',
//         icon: 'warning',
//         confirmButtonText: 'Yes "Make verified"',
//         showCancelButton: true,
//         // confirmButtonColor: '#3085d6',
//         // cancelButtonColor: '#d33',
        
//       }).then((result) => {
//         if (result.isConfirmed) {
//           handleMakePropertyVerified2(_id)
//           // Swal.fire(
//           //   'Deleted!',
//           //   'Your file has been deleted.',
//           //   'success'
//           // );
//         }
//       });
//     }

// //handle make Agent isGood
// const handleMakePropertyVerified2 = async(_id)=>{
//   const loadingAlert = Swal.fire({
//     title: "Loading",
//     text: "Please wait...",
//     allowOutsideClick: false,
//     allowEscapeKey: false,
//     showConfirmButton: false
//   });

//   Swal.showLoading();
//   try{
//     axios.defaults.headers.common['Authorization'] = `Bearer ${AgentUserToken}`;
//     const response = await axios.put(`https://homehub-coxc.onrender.com/api/verifyHouse/${_id}`)
//   console.log(response.data)
//   loadingAlert.close()
//   Swal.fire({icon:"success",text:"Property is now verified",timer:2000,showConfirmButton:false})
  
//   }
//   catch(error){
//     console.error(error)
//     loadingAlert.close()
//     Swal.fire({icon:"warning",text:error.message,timer:2000,showConfirmButton:false})
//   }
// }


//   return (
//     <div className='PostedPropertiesWrap'>
//       <div className='PostedPropertiesTitle'>
//       <h4>Agents</h4>
//       </div>
//       <div className='PostedProperties' style={{position:"relative"}}>
//       {allAgentsB.map((allagents)=>(
//           <div key={allagents._id} className='AnAgentWrap' style={{flexDirection:"column"}}>
          
//               <div className='AnAgent'>
//                   <h3 style={{color:"#0653C8"}}>Company: {allagents.companyName}</h3>
//                   <p><span>Name: </span>{allagents.fullName}</p>
//                   <p><span>Address:</span> {allagents.address}</p>
//                   <p><span>Email:</span> {allagents.email}</p>
//                   <p><span>Phone:</span> {allagents.phoneNumber}</p>
//               </div>
//             <div style={{display:"flex",gap:"20px", marginTop:"10px",flexWrap:"wrap",justifyContent:"center",alignItems:"center"}}>
//                 <button onClick={()=>handleDeleteAnAgent1(allagents._id)} style={{padding:"5px",border:"none",color:"white",backgroundColor:'rgba(0,0,255,0.5)',cursor:"pointer"}}>Delete Agent</button>
//                 <button onClick={()=>handleMakeIsGood1(allagents._id)} style={{padding:"5px",border:"none",color:"white",backgroundColor:allagents?.isGood?"green":'rgba(0,0,255,0.5)',cursor:"pointer"}} >{allagents?.isGood?"isGood ✔": "Make isGood"}</button>
//                 {/* <button style={{padding:"5px",border:"none",color:"white",backgroundColor:'rgba(0,0,255,0.5)',cursor:"pointer"}}>Make Admin</button> */}
//                 <button onClick={()=>handleAnAgentHouses1(allagents._id)} style={{padding:"5px",border:"none",color:"white",backgroundColor:'rgba(0,0,255,0.5)',cursor:"pointer"}}>Houses</button>
                
                
//             </div>
//             {!allagents?.isVerified&&<p style={{color:"red",textAlign:"center"}}>Agent account is not verified</p>}
            
//             {allagents?.openHouses&&<div className='ForSaleProperties' 
//             style={{
//                 overflowY:"scroll",
//                 width:"100%",
//                 height:"100vh",
//                 backgroundColor:"rgba(0,0,0,0.6)",
//                 top:0,
//                 left:0,
//                 position:"fixed",
//                 padding:"30px"
//             }}>    
//           {anAgentHouses?.map((d) => (
//             <div key={d._id} className='ForSaleProperty' style={{position:"relative"}}>
//               <div className='ForSalePropertyImgWrap'>
//                 <img src={d.images[0]} alt='ForSalePropertyImg' />
//               </div>
//               <div className='ForSalePropertyNamePriceButtonWrap'>
//                 <div className='ForSalePropertyNameAndPrice'>
//                 {d.isSponsored&&<p style={{backgroundColor:"#0653C8", color:"white", fontSize:"0.8vw", padding:"2px", borderRadius:"5px"}}>Sponsored</p>}
//                   <h4>{d.type}</h4>
//                   <p>
//                     <span>Category:</span> {d.category==="65e43620b24d39a99a1c06f7"?"For Sale":"For Rent"}
//                   </p>
//                   <p>
//                     <span>Price:</span> N{d.amount}
//                   </p>
//                   <p>
//                     <span>Location:</span> {d.location}
//                   </p>
//                 </div>
//                 {d.isVerified===true?<img style={{borderRadius:"50%", width:"30px",height:"30px",position:"absolute",top:"2%",right:"10px"}} src={Badge} alt="verified"/>:""}
//                 <div className='ForSalePropertyButtonsWrap'>
//                   {/* <button onClick={() => handleNavigate(d._id,d.agentId)}>View</button> */}
//                   <button onClick={() => handleMakePropertyVerified1(d._id)} style={{backgroundColor:d.isVerified===true?"green":""}}>{d.isVerified===true?"Verified ✔":"Make verified"}</button>
//                 </div>
//               </div>
//             </div>
//           ))}
//           <div className='SubmitButtonWrap'>
//                             <button type="button" onClick={()=>handleCloseAnAgentHouses(allagents._id)}>Close</button>
//                             </div>
//         </div>}
//         </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default AllAgentsForAdmin





import React from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Badge from "../Images/badge5.png"

const AllAgentsForAdmin = () => {

    const [allAgents, setAllAgents] = useState([])
    const [allAgentsB, setAllAgentsB] = useState([])
    const [anAgentHouses, setAnAgentHouses] = useState([])
    const [search, setSearch] = useState('')
    const [toggleAgents, setToggleAgents] = useState(false)

    const AgentUserToken = useSelector(state => state.userToken)
    const url = "https://homehub-coxc.onrender.com/api/getallagent"

    const handleAllAgents = async () => {
        const loadingAlert = Swal.fire({
            title: "Loading",
            text: "Please wait...",
            allowOutsideClick: false,
            allowEscapeKey: false,
            showConfirmButton: false
        });

        Swal.showLoading();
        try {
            const response = await axios.get(url)
            loadingAlert.close()
            setAllAgents(response.data.data)
            
            console.log(response.data)
        }
        catch (error) {
            console.error(error)
            loadingAlert.close()
            Swal.fire({ icon: "warning", text:error.message, timer: 2000, showConfirmButton: false })
        }
    }

    useEffect(() => {
        handleAllAgents()
    }, [])

    useEffect(() => {
        setAllAgentsB(allAgents);
    }, [allAgents])

    const handleAnAgentHouses1 = (_id) => {
        const updatedArray = allAgents.map((e) => {
            if (e._id === _id) {
                return { ...e, openHouses: true }
            }
            return e
        })
        setAllAgents(updatedArray)
        handleAnAgentHouses2(_id)
        setToggleAgents(true)
    }

    const handleCloseAnAgentHouses = (_id) => {
        const updatedArray = allAgents.map((e) => {
            if (e._id === _id) {
                return { ...e, openHouses: false }
            }
            return e
        })
        setAllAgents(updatedArray)
        setToggleAgents(false)
    }

    const handleAnAgentHouses2 = async (_id) => {
        const loadingAlert = Swal.fire({
            title: "Loading",
            text: "Please wait...",
            allowOutsideClick: false,
            allowEscapeKey: false,
            showConfirmButton: false
        });

        Swal.showLoading();
        try {
            const response = await axios.get(`https://homehub-coxc.onrender.com/api/getAgentHouse/${_id}`)
            loadingAlert.close()
            setAnAgentHouses(response.data.houses)
        }
        catch (error) {
            console.error(error)
            loadingAlert.close()
            Swal.fire({ icon: "warning", text: error.message, timer: 2000, showConfirmButton: false })
        }
    }

    const handleMakePropertyVerified1 = (_id) => {
        Swal.fire({
            text: 'Are you sure?',
            icon: 'warning',
            confirmButtonText: 'Yes "Make verified"',
            showCancelButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                handleMakePropertyVerified2(_id)
            }
        });
    }

    const handleMakePropertyVerified2 = async (_id) => {
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
            const response = await axios.put(`https://homehub-coxc.onrender.com/api/verifyHouse/${_id}`)
            loadingAlert.close()
            Swal.fire({ icon: "success", text: "Property is now verified", timer: 2000, showConfirmButton: false })
            setAnAgentHouses(prevHouses => 
                prevHouses.map(house => 
                    house._id === _id ? { ...house, isVerified: true } : house
                )
            );
           
        }
        catch (error) {
            console.error(error)
            loadingAlert.close()
            Swal.fire({ icon: "warning", text: error.message, timer: 2000, showConfirmButton: false })
        }
    }

    const handleDeleteAnAgent1 = (_id) => {
        Swal.fire({
            text: 'Are you sure?',
            icon: 'warning',
            confirmButtonText: 'Yes, delete it!',
            showCancelButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                handleDeleteAnAgent2(_id)
            }
        });
    }

    const handleDeleteAnAgent2 = async (_id) => {
        const loadingAlert = Swal.fire({
            title: "Loading",
            text: "Please wait...",
            allowOutsideClick: false,
            allowEscapeKey: false,
            showConfirmButton: false
        });

        Swal.showLoading();
        try {
            const response = await axios.delete(`https://homehub-coxc.onrender.com/api/deleteagent/${_id}`)
            loadingAlert.close()
            Swal.fire({ icon: "success", text: "Agent is deleted", timer: 2000, showConfirmButton: false })
            const updatedArray= allAgents.filter((e)=>e._id!==_id)
            setAllAgents(updatedArray)
        }
        catch (error) {
            console.error(error)
            loadingAlert.close()
            Swal.fire({ icon: "warning", text: error.message, timer: 2000, showConfirmButton: false })
        }
    }

    const handleMakeIsGood1 = (_id) => {
        Swal.fire({
            text: 'Are you sure?',
            icon: 'warning',
            confirmButtonText: 'Yes "Make Good"',
            showCancelButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                handleMakeIsGood2(_id)
            }
        });
    }

    const handleMakeIsGood2 = async (_id) => {
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
            const response = await axios.put(`https://homehub-coxc.onrender.com/api/updateIsGood/${_id}`)
            loadingAlert.close()
            Swal.fire({ icon: "success", text: "Agent is now Good", timer: 2000, showConfirmButton: false })
            setAllAgents(prevAgents=>prevAgents.map((agent)=>agent._id===_id?{...agent,isGood:true}:agent))
        }
        catch (error) {
            console.error(error)
            loadingAlert.close()
            Swal.fire({ icon: "warning", text: error.message, timer: 2000, showConfirmButton: false })
        }
    }

    return (
        <div className='PostedPropertiesWrap'>
            <div className='PostedPropertiesTitle'>
                <h4>Agents</h4>
            </div>
            <div className='PostedProperties' style={{ position: "relative" }}>
                {allAgentsB.map((allagents) => (
                    <div key={allagents._id} className='AnAgentWrap' style={{ flexDirection: "column" }}>

                        <div className='AnAgent'>
                            <h3 style={{ color: "#0653C8" }}>Company: {allagents.companyName}</h3>
                            <p><span>Name: </span>{allagents.fullName}</p>
                            <p><span>Address:</span> {allagents.address}</p>
                            <p><span>Email:</span> {allagents.email}</p>
                            <p><span>Phone:</span> {allagents.phoneNumber}</p>
                        </div>
                        <div style={{ display: "flex", gap: "20px", marginTop: "10px", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
                            <button onClick={() => handleDeleteAnAgent1(allagents._id)} style={{ padding: "5px", border: "none", color: "white", backgroundColor: 'rgba(0,0,255,0.5)', cursor: "pointer" }}>Delete Agent</button>
                            <button onClick={() => handleMakeIsGood1(allagents._id)} style={{ padding: "5px", border: "none", color: "white", backgroundColor: allagents?.isGood ? "green" : 'rgba(0,0,255,0.5)', cursor: "pointer" }} >{allagents?.isGood ? "isGood ✔" : "Make isGood"}</button>
                            <button onClick={() => handleAnAgentHouses1(allagents._id)} style={{ padding: "5px", border: "none", color: "white", backgroundColor: 'rgba(0,0,255,0.5)', cursor: "pointer" }}>Houses</button>
                            <button onClick={()=>window.open(allagents.regCert)} style={{ padding: "5px", border: "none", color: "white", backgroundColor: 'rgba(0,0,255,0.5)', cursor: "pointer" }}>View Certificate Doc.</button>
                            <button onClick={()=>window.open(allagents.documentImage)} style={{ padding: "5px", border: "none", color: "white", backgroundColor: 'rgba(0,0,255,0.5)', cursor: "pointer" }}>View ID Doc.</button>
            
                        </div>
                        {!allagents?.isVerified && <p style={{ color: "red", textAlign: "center" }}>Agent account is not verified</p>}

                        {allagents?.openHouses && <div className='ForSaleProperties'
                            style={{
                                overflowY: "scroll",
                                width: "100%",
                                height: "100vh",
                                backgroundColor: "rgba(0,0,0,0.6)",
                                top: 0,
                                left: 0,
                                position: "fixed",
                                padding: "30px"
                            }}>
                            {anAgentHouses?.map((d) => (
                                <div key={d._id} className='ForSaleProperty' style={{ position: "relative" }}>
                                    <div className='ForSalePropertyImgWrap'>
                                        <img src={d.images[0]} alt='ForSalePropertyImg' />
                                    </div>
                                    <div className='ForSalePropertyNamePriceButtonWrap'>
                                        <div className='ForSalePropertyNameAndPrice'>
                                            {d.isSponsored && <p style={{ backgroundColor: "#0653C8", color: "white", fontSize: "0.8vw", padding: "2px", borderRadius: "5px" }}>Sponsored</p>}
                                            <h4>{d.type}</h4>
                                            <p>
                                                <span>Category:</span> {d.category === "65e43620b24d39a99a1c06f7" ? "For Sale" : "For Rent"}
                                            </p>
                                            <p>
                                                <span>Price:</span> N{d.amount}
                                            </p>
                                            <p>
                                                <span>Location:</span> {d.location}
                                            </p>
                                        </div>
                                        {d.isVerified === true ? <img style={{ borderRadius: "50%", width: "30px", height: "30px", position: "absolute", top: "2%", right: "10px" }} src={Badge} alt="verified" /> : ""}
                                        <div className='ForSalePropertyButtonsWrap'>
                                            <button onClick={() => handleMakePropertyVerified1(d._id)} style={{ backgroundColor: d.isVerified === true ? "green" : "" }}>{d.isVerified === true ? "Verified ✔" : "Make verified"}</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className='SubmitButtonWrap'>
                                <button type="button" onClick={() => handleCloseAnAgentHouses(allagents._id)}>Close</button>
                            </div>
                        </div>}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AllAgentsForAdmin

