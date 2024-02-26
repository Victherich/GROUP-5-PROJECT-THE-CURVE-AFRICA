import React, { useContext, useEffect, useState } from 'react'
import SponsoredComponent from '../CSS/SponsoredComponent.css'
import { AgentContext } from './AgentContext'

const SponsoredComponent = () => {
    const {agentPostedProperties,
        sponsoredProperties,
        setSponsoredProperties
    }=useContext(AgentContext)
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
        }else {
            setAmountValue(null)
        }
    },[isCheckedA,isCheckedB,isCheckedC])

    const key = `key${Math.random()}`

    function payKorapay() {
        if(amountValue===null){
            // alert("Select sponsor category you wish to pay for")
            Swal.fire({
                icon:"warning",
                text:"Please select the sponsor category you wish to pay for"
            })
        }else{
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
                  // Handle when payment is successful // console.log(data) or alert or any other handling
                  alert('successful')
                  console.log(data)
                },
                onFailed: function (data) {
                  // Handle when payment fails
                  alert("failed transaction")
                  console.log(data)
                }
            });
        }
   }
    
  

  return (
    <div className='SponsoredComponentsWrap'>
        <div className='SponsoredComponents'>
        <div className='SponsoredComponent'>
            <input 
            type="checkbox" 
            checked={isCheckedA}
            onChange={()=>{
                setIsCheckedA(!isCheckedA)
                setIsCheckedB(false)
                setIsCheckedC(false)
                }} />
            <p>One Week Blitz: Elevate your property's visibility with a week of prime sponsorship <br/>
            for just 10,000 Naira and capture more eyes on your listing.</p>
            <button onClick={payKorapay}>Pay</button>
        </div>
        <div className='SponsoredComponent'>
            <input 
            type="checkbox" 
            checked={isCheckedB}
            onChange={()=>{
                setIsCheckedB(!isCheckedB)
                setIsCheckedA(false)
                setIsCheckedC(false)
                }} />
            <p>ODouble Exposure Delight: Extend your property's spotlight for two weeks at an <br/>
            unbeatable value of 15,000 Naira, maximizing your reach----- and generating more leads.</p>
            <button onClick={payKorapay}>Pay</button>
        </div>
        <div className='SponsoredComponent'>
            <input 
            type="checkbox" 
            checked={isCheckedC}
            onChange={()=>{
                setIsCheckedC(prevState=>!prevState);
                // setIsCheckedA(false);
                // setIsCheckedB(false);
                }} />
            <p>Month-long Showcase: Secure long-term success for your listing with a full month <br/>
            of premium sponsorship for only 20,000 Naira, dominating the market and ensuring <br/>
             maximum exposure.</p>
            <button onClick={payKorapay}>Pay</button>
        </div>
        </div>
    </div>
  )
}

export default SponsoredComponent
