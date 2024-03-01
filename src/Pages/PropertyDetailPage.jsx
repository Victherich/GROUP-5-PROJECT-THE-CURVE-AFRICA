import React, { useEffect, useState } from 'react'
import "../CSS/DetailPage.css"
import DetailImg1 from '../Images/house5 1.png'
import DetailImg2 from '../Images/Screenshot 2023-11-22 165826.png'
import DetailImg3 from '../Images/images (7).jpg'
import DetailImg4 from '../Images/images (1) 2.png'
import DetailImg5 from '../Images/pic1 1.png'
import DetailImg6 from '../Images/woodex6 1.png'
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2'
import axios from 'axios'
import { useContext } from 'react'
import { AgentContext } from '../component/AgentContext'




const PropertyDetailPage = () => {
 const {propertyDetailObj}=useContext(AgentContext)
const [ImgDisplay,setImgDisplay]=useState(null)
const [imgMonitor,setImgMonitor]=useState(null)
const [oneAgentObj,setOneAgentObj]=useState({})


  useEffect(()=>{
    if(imgMonitor===2){
      setImgDisplay(propertyDetailObj.images[1])
    }else if(imgMonitor===3){
      setImgDisplay(propertyDetailObj.images[2])
    }else if(imgMonitor===4){
      setImgDisplay(propertyDetailObj.images[3])
    }else if(imgMonitor===5){
      setImgDisplay(propertyDetailObj.images[4])
    }else if(imgMonitor===6){
      setImgDisplay(propertyDetailObj.images[5])
    }else{
      if (propertyDetailObj.images && propertyDetailObj.images.length > 0) {
        setImgDisplay(propertyDetailObj.images[0]);
      }
    }
  },[imgMonitor,propertyDetailObj])
  
  //back to previous page
  const handleBack = () => {
    window.history.back();
  };

  useEffect(()=>{
    oneAgent(propertyDetailObj.agentId)
  },[])

const oneAgent =async (Id)=>{
  try{
    const response = await axios.get(`https://homehub-coxc.onrender.com/api/getOneAgent/${Id}`)
    console.log(response.data)
    setOneAgentObj(response.data.data)
  }catch(error){
      console.error(error)
  }
}



  
  return (
    
    <div className='ForSale'> 
      <h1 className='PropertyForSaleHeading'>Property Detail</h1>      
      <div className='Line'></div>
      <div className='HomeHubRedandBlueWrap'>
        <h1>HOME<span>HUB</span></h1>
        <p>Your dream home awaits, unlock the door with home hub...</p>
      </div> 

      <div className='DetailPage'>
        <h2>| {propertyDetailObj.type} | N {propertyDetailObj.amount} | {propertyDetailObj.location} |{propertyDetailObj.category&&propertyDetailObj.category.type}|</h2><br/>
        <div className='DetailPageUp'>
          <img src={ImgDisplay} alt="DetailImg"/>
        </div>
        <div className='DetailPageMid'>
            {propertyDetailObj.images&&<img src={propertyDetailObj.images[0]} alt="DetailImg1" onClick={()=>setImgMonitor(1)} />}
            {propertyDetailObj.images&&<img src={propertyDetailObj.images[1]} alt="DetailImg2" onClick={()=>setImgMonitor(2)} />}
            {propertyDetailObj.images&&<img src={propertyDetailObj.images[2]} alt="DetailImg3" onClick={()=>setImgMonitor(3)} />}
            {propertyDetailObj.images&&<img src={propertyDetailObj.images[3]} alt="DetailImg4" onClick={()=>setImgMonitor(4)} />}
            {propertyDetailObj.images&&<img src={propertyDetailObj.images[4]} alt="DetailImg5" onClick={()=>setImgMonitor(5)} />}
            {propertyDetailObj.images&&<img src={propertyDetailObj.images[5]} alt="DetailImg6" onClick={()=>setImgMonitor(6)} />}
            {/* <img src={DetailImg2} alt="DetailImg2" onClick={()=>setImgMonitor(2)}  /> */}
            {/* <img src={DetailImg3} alt="DetailImg3" onClick={(e)=>setImgMonitor(3)} /> */}
            {/* <img src={DetailImg4} alt="DetailImg4" onClick={(e)=>setImgMonitor(4)} /> */}
            {/* <img src={DetailImg5} alt="DetailImg5" onClick={(e)=>setImgMonitor(5)} /> */}
            {/* <img src={DetailImg6} alt="DetailImg6" onClick={(e)=>setImgMonitor(6)} /> */}
        </div>
        <p className='ImageClickP'>Click on image to display larger view</p>
        <div className='DetailPageDown'>
            <h4>Full Description</h4>
            <p>{propertyDetailObj.description}</p>
            <br/>
            {/* <p>{propertyDetailObj.agentId}</p> */}
            <h4>Agent's Contact information:</h4>
            <p><span>Name: </span>{oneAgentObj.fullName}</p>
            <p><span>Company Name: </span>{oneAgentObj.companyName}</p> 
            <p><span>Address: </span>{oneAgentObj.address}</p>
            <p><span>Email: </span>{oneAgentObj.email}</p>
            <p><span>Phone no.: </span>{oneAgentObj.phoneNumber}</p>
            <br/>
            <button onClick={handleBack}>Back</button>
        </div>
      </div>
    </div>
  )
}

export default PropertyDetailPage
