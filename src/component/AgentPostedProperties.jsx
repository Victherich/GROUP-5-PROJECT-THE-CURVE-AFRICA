import React, { useContext, useEffect, useState } from 'react'
import '../CSS/AgentPostedProperties.css'
import data from './data.json'
import axios from 'axios'
import PostedImg from '../Images/woodex6 1.png'
import { AgentContext } from './AgentContext'
import '../CSS/SponsorUI.css'
import { useNavigate } from 'react-router-dom'

const AgentPostedProperties = () => {
  const navigate = useNavigate()
  const { agentPostedProperties, 
    setAgentPostedProperties, 
    setToggleAgentViewDetailpage,
    setSponsoredProperties,
    sponsoredProperties } = useContext(AgentContext)

  useEffect(() => {
    handleAgentPostedProperties()
  }, [])

  const handleAgentPostedProperties = async () => {
    try {
      // const response = await axios.get(url)
      // console.log(response.data)
      setAgentPostedProperties(data)
    } catch (error) {
      console.error(error)
    }
  }

  const handleDelete = (id) => {
    setAgentPostedProperties(agentPostedProperties.filter((e) => e.id !== id))
  }

  const handleOpenSponsorUI = (id) => {
    const updatedProperties = agentPostedProperties.map(item => {
      if (item.id === id) {
        return { ...item, open: true }
      }
      return item
    })
    setAgentPostedProperties(updatedProperties)
  }


  const handleCloseSponsorUI =(id)=>{
    const updatedProperties = agentPostedProperties.map((item)=>{
      if(item.id===id){
        return {...item,open:false}
      }
      return item
    })
    setAgentPostedProperties(updatedProperties)
  }


const [amountValue,setAmountValue]=useState(null)
const [isCheckedA,setIsCheckedA]=useState(false)
const [isCheckedB,setIsCheckedB]=useState(false)
const [isCheckedC,setIsCheckedC]=useState(false)

useEffect(()=>{
  if(isCheckedA===true){
    setAmountValue(10000)
  }else if(isCheckedB===true){
    setAmountValue(15000)
  }else if(isCheckedC===true){
    setAmountValue(20000)
  }else{
    setAmountValue(null)
  }
},[isCheckedA,isCheckedB,isCheckedC])

// console.log(amountValue)

function payKorapay(id) {
  const key = `key${Math.random()}`;
  if (amountValue == null) {
    alert("Please select a category you wish to pay for by checking one of the boxes");
    return; // Exit the function early if amountValue is null
  }

  try {
    window.Korapay.initialize({
      key: "pk_test_eR5xsWZRG1XfPVe8JvDJyHQWR1nieyBU2DaE5dBm", // replace with the api key you generated
      reference: key,
      amount: amountValue, // make dynamic
      currency: "NGN", // you can make dynamic
      customer: {
        name: "John Doe", // you can make dynamic
        email: "john@doe.com" // you can make dynamic
      },
      onClose: function () {
        // Handle when modal is closed
      },
      onSuccess: function (data) {
        // Handle when payment is successful
        console.log(data);
        handleSponsor(id);
        navigate('/');
      },
      onFailed: function (data) {
        // Handle when payment fails
        alert("Failed transaction");
        console.log(data);
      }
    });
  } catch (error) {
    console.error(error);
  }
}


 const handleSponsor = (id)=>{
  const propertyToSponsor=agentPostedProperties.find((e)=>e.id===id)
  setSponsoredProperties([...sponsoredProperties,propertyToSponsor])
}

  return (
    <div className='PostedPropertiesWrap'>
      <h4>Posted Properties</h4>
      <div className='PostedProperties'>
        {agentPostedProperties.map((d) => (
          <div key={d.id} className='ForSaleProperty'>
            <div className='ForSalePropertyImgWrap'>
              <img src={PostedImg} alt="ForSalePropertyImg" />
            </div>
            <div className='ForSalePropertyNamePriceButtonWrap'>
              <div className='ForSalePropertyNameAndPrice'>
                <h4>{d.names}</h4>
                <p><span>Category:</span> {d.category}</p>
                <p><span>Price:</span> N{d.price}</p>
                <p><span>Location:</span> {d.location}</p>
              </div>
              <div className='ForSalePropertyButtonsWrap'>
                <button onClick={() => setToggleAgentViewDetailpage(true)}>View</button>
                <button onClick={() => handleDelete(d.id)}>Delete</button>
                <button onClick={() => handleOpenSponsorUI(d.id)}>Sponsor</button>
              </div>
            </div>
            {d.open && <div className='SponsorUIWrap'>
              <div className='SponsorUI'>
                <h3>Sponsorship Categories</h3>
                <p>Please check one of the check boxes to select a category and then click the corresponding Pay button</p>
                <div className='SponsorUIA'>
                  <input 
                  type="checkbox"
                  checked={isCheckedA}
                  onChange={()=>{
                    setIsCheckedA(true);
                    setIsCheckedB(false);
                    setIsCheckedC(false);
                    }} />

                  <p><span>One Week Blitz:</span> Elevate your property's visibility with a week of prime sponsorship
                    for just <strong>10,000 Naira</strong> and capture more eyes on your listing</p>
                  
                </div>
                <div className='SponsorUIA'>
                  <input 
                  type="checkbox"
                  checked={isCheckedB}
                  onChange={()=>{
                    setIsCheckedB(true);
                    setIsCheckedA(false);
                    setIsCheckedC(false);
                  }}
                  />
                  <p><span>Double Exposure Delight:</span>  Extend your property's spotlight for two
                   weeks at an unbeatable value of <strong>15,000 Naira</strong>, maximizing your reach and generating
                    more leads.</p>
                  
                </div>
                <div className='SponsorUIA'>
                  <input 
                  type="checkbox"
                  checked={isCheckedC}
                  onChange={()=>{
                    setIsCheckedA(false);
                    setIsCheckedB(false);
                    setIsCheckedC(true);
                  }} />
                  <p><span>Month-long Showcase:</span>  Secure long-term success for your listing with a 
                  full month of premium sponsorship for only <strong>20,000 Naira</strong>, dominating the market and 
                  ensuring maximum exposure.</p>
                  
                </div>
                <div className='SponsorUIButtonswrap'>
                <button onClick={()=>handleCloseSponsorUI(d.id)}>Back</button>
                <button onClick={()=>{payKorapay(d.id)}}>Pay</button>
                {/* <button onClick={()=>handleSponsor(d.id)}>Test add</button> */}
                </div>
              </div>
            </div>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AgentPostedProperties
