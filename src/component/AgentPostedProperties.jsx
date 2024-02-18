import React, { useContext, useEffect, useState } from 'react'
import '../CSS/AgentPostedProperties.css'
import data from './data.json'
import axios from 'axios'
import PostedImg from '../Images/woodex6 1.png'
import { AgentContext } from './AgentContext'

const AgentPostedProperties = () => {
  const{agentPostedProperties,setAgentPostedProperties}=useContext(AgentContext)
  const {setToggleAgentViewDetailpage}=useContext(AgentContext)

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

const handleDelete = (id)=>{
  setAgentPostedProperties(agentPostedProperties.filter((e)=>e.id!==id))
}


const handleAddToSponsored = (id)=>{
  
}

  return (
    <div className='PostedPropertiesWrap'>
      <h4>Posted Properties</h4>
      <div className='PostedProperties'>
        {agentPostedProperties.map((d)=>(
          <div key={d.id} className='ForSaleProperty'>
          <div className='ForSalePropertyImgWrap'>
            <img src={PostedImg} alt="ForSalePropertyImg"/>
          </div>
          <div className='ForSalePropertyNamePriceButtonWrap'>
              <div className='ForSalePropertyNameAndPrice'>
                  <h4>{d.names}</h4>
                  <p><span>Category:</span> {d.category}</p>
                  <p><span>Price:</span> N{d.price}</p>
                  <p><span>Location:</span> {d.location}</p>
            </div>    
            <div className='ForSalePropertyButtonsWrap'>
              <button onClick={()=>setToggleAgentViewDetailpage(true)}>View</button>
              <button onClick={()=>handleDelete(d.id)}>Delete</button>
              <button onClick={()=>handleAddToSponsored(d.id)}>Sponsor</button>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default AgentPostedProperties
