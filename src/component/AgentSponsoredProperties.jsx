import React, { useContext, useEffect, useState } from 'react'
import '../CSS/AgentPostedProperties.css'
import axios from 'axios'
import SponsoredImg from '../Images/HOUSE2-removebg-preview (1) 1.png'
import { AgentContext } from './AgentContext'
import Swal from 'sweetalert2'
import { useSelector } from 'react-redux'

const AgentSponsoredProperties = () => {
  const {sponsoredProperties,setSponsoredProperties,Agent}=useContext(AgentContext)
  const parsedAgent = typeof Agent === 'string' ? JSON.parse(Agent) : Agent;
const AgentUser = useSelector(state=>state.user)
//   const url=""

// useEffect(()=>{
//     handleAgentPostedProperties()
// },[])

// const handleAgentPostedProperties =async()=>{
//    try{
//     const response = await axios.get(url)
//     console.log(response.data)
//       setAgentPostedProperties(data)
//    }catch(error){
//     console.error(error)
//    }

// }


//handle Delete sponsored from sponsored property from front end
// const handleDelete = (_id) => {
//   Swal.fire({
//     title: 'Are you sure?',
//     icon: 'warning',
//     confirmButtonText: 'Yes, delete it!',
//     showCancelButton: true,
//     // confirmButtonColor: '#3085d6',
//     // cancelButtonColor: '#d33',
    
//   }).then((result) => {
//     if (result.isConfirmed) {
//       setSponsoredProperties(sponsoredProperties.filter((e) => e._id !== _id));
//       Swal.fire(
//         'Deleted!',
//         'Your post has been deleted.',
//         'success'
//       );
//     }
//   });
// };

//delet from backend
const handleDelete = async (_id) => {
  const loadingAlert = Swal.fire({
    title: "Loading",
    text: "Please wait...",
    allowOutsideClick: false,
    allowEscapeKey: false,
    showConfirmButton: false
  });

  Swal.showLoading();
  try{
    const response = await axios.delete(`https://homehub-coxc.onrender.com/api/deletehouse/${_id}`)
    console.log(response.data)
    loadingAlert.close()
    Swal.fire({icon:"success",title:"Your post has been deleted",timer:2000})
    setSponsoredProperties(null)
  }catch(error){
    console.error(error)
    // Swal.fire({icon:"error",title:"Something went wrong",timer:2000})
  }
}
  


useEffect(()=>{
  getAgentSponsored()
},[])

const getAgentSponsored = async()=>{
  const loadingAlert = Swal.fire({
    title: "Loading",
    text: "Please wait...",
    allowOutsideClick: false,
    allowEscapeKey: false,
    showConfirmButton: false
  });

  Swal.showLoading();
  try{
    const response = await axios.get(`https://homehub-coxc.onrender.com/api/getSponsored/${AgentUser._id}`)
    console.log(response.data)
    setSponsoredProperties(response.data.data)
    loadingAlert.close()
    
  }catch(error){
      console.error(error)
      // Swal.fire({icon:"error",title:"Something went wrong",showConfirmButton:false,timer:2000});
      loadingAlert.close()
      
  }
}

  return (
    <div className='PostedPropertiesWrap'>
      <h4>Sponsored Properties</h4>
      <div className='PostedProperties'>
        {sponsoredProperties.map((d)=>(
          <div key={d._id} className='ForSaleProperty'>
          <div className='ForSalePropertyImgWrap'>
            {d.images&&<img src={d.images[0]} alt="ForSalePropertyImg"/>}
          </div>
          <div className='ForSalePropertyNamePriceButtonWrap'>
              <div className='ForSalePropertyNameAndPrice'>
                  <h4>{d.type}</h4>
                  <p><span>Category:</span> {d.category==="65c7c1c8a356276634186c7d"?"For Sale":"For Rent"}</p>
                  <p><span>Price:</span> N{d.amount}</p>
                  <p><span>Location:</span> {d.location}</p>
            </div>    
            <div className='ForSalePropertyButtonsWrap'>
              {/* <button>View</button> */}
              {/* <button onClick={()=>handleDelete(d._id)}>Delete</button> */}
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default AgentSponsoredProperties
