import React, { useContext, useEffect, useState } from 'react'
import '../CSS/AgentPostedProperties.css'
import axios from 'axios'
import SponsoredImg from '../Images/HOUSE2-removebg-preview (1) 1.png'
import { AgentContext } from './AgentContext'
import Swal from 'sweetalert2'

const AgentSponsoredProperties = () => {
  const {sponsoredProperties,setSponsoredProperties}=useContext(AgentContext)

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



const handleDelete = (_id) => {
  Swal.fire({
    title: 'Are you sure?',
    icon: 'warning',
    confirmButtonText: 'Yes, delete it!',
    showCancelButton: true,
    // confirmButtonColor: '#3085d6',
    // cancelButtonColor: '#d33',
    
  }).then((result) => {
    if (result.isConfirmed) {
      setSponsoredProperties(sponsoredProperties.filter((e) => e._id !== _id));
      Swal.fire(
        'Deleted!',
        'Your post has been deleted.',
        'success'
      );
    }
  });
};

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
              <button onClick={()=>handleDelete(d._id)}>Delete</button>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default AgentSponsoredProperties
