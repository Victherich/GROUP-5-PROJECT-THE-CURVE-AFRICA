import React, { useContext, useEffect, useState } from 'react'
import '../CSS/AgentPostedProperties.css'
import axios from 'axios'
import SponsoredImg from '../Images/HOUSE2-removebg-preview (1) 1.png'
import { AgentContext } from './AgentContext'

const AgentSponsoredProperties = () => {
  const {sponsoredProperties}=useContext(AgentContext)

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



  return (
    <div className='PostedPropertiesWrap'>
      <h4>Sponsored Properties</h4>
      <div className='PostedProperties'>
        {sponsoredProperties.map((d)=>(
          <div className='ForSaleProperty'>
          <div className='ForSalePropertyImgWrap'>
            <img src={SponsoredImg} alt="ForSalePropertyImg"/>
          </div>
          <div className='ForSalePropertyNamePriceButtonWrap'>
              <div className='ForSalePropertyNameAndPrice'>
                  <h4>{d.propertyType}</h4>
                  <p><span>Category:</span> {d.category}</p>
                  <p><span>Price:</span> N{d.propertyAmount}</p>
                  <p><span>Location:</span> {d.propertyLocation}</p>
            </div>    
            <div className='ForSalePropertyButtonsWrap'>
              <button>View</button>
              <button>Delete</button>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default AgentSponsoredProperties
