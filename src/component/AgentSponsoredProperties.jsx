import React, { useEffect, useState } from 'react'
import '../CSS/AgentPostedProperties.css'
import data from '../component/data.json'
import axios from 'axios'
import SponsoredImg from '../Images/HOUSE2-removebg-preview (1) 1.png'

const AgentSponsoredProperties = () => {
  const [agentPostedProperties,setAgentPostedProperties]=useState([])

  const url=""

useEffect(()=>{
    handleAgentPostedProperties()
},[])

const handleAgentPostedProperties =async()=>{
   try{
    const response = await axios.get(url)
    console.log(response.data)
      setAgentPostedProperties(data)
   }catch(error){
    console.error(error)
   }

}



  return (
    <div className='PostedPropertiesWrap'>
      <h4>Sponsored Properties</h4>
      <div className='PostedProperties'>
        {agentPostedProperties.map((d)=>(
          <div className='ForSaleProperty'>
          <div className='ForSalePropertyImgWrap'>
            <img src={SponsoredImg} alt="ForSalePropertyImg"/>
          </div>
          <div className='ForSalePropertyNamePriceButtonWrap'>
              <div className='ForSalePropertyNameAndPrice'>
                  <h4>{d.names}</h4>
                  <p><span>Category:</span> {d.category}</p>
                  <p><span>Price:</span> N{d.price}</p>
                  <p><span>Location:</span> {d.location}</p>
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
