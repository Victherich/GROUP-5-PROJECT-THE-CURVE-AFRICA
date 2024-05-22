import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import "animate.css"
import '../CSS/Adert.css'
import Ad1 from "../Images/Ad 1.jpg"
import Ad2 from "../Images/Ad 2.png"
import Ad3 from "../Images/Ad 3.jpg"
import Ad4 from "../Images/Ad 4.jpg"


const AdertUI = () => {
    const [AdNum,SetAdNum]=useState(0)
    
    useEffect(()=>{
        const intervalId = setInterval(()=>{
            SetAdNum(prevState=>(prevState+1)%4)
        },3000)

        return ()=>clearInterval(intervalId)
    },[])

    const handleLeft = ()=>{
        SetAdNum(prevState=>(prevState-1+4)%4)
    }

    const handleRight = ()=>{
        SetAdNum(prevState=>(prevState+1)%4)
    }


  return (
    <div className='AdertWrap'>
        <h1>Advertise With Us !!!</h1>
    <div className='Adert'>
      <FaArrowLeft className='Arrow' onClick={handleLeft}/>
      {AdNum===0&&<img className="animate__animated animate__slideInLeft" src={Ad1} alt="Adert"/>}
      {AdNum===1&&<img className='animate__animated animate__slideInRight' src={Ad2} alt="Adert1"/>}
      {AdNum===2&&<img className='animate__animated animate__slideInLeft' src={Ad3} alt="Adert2"/>}
      {AdNum===3&&<img className='animate__animated animate__slideInRight' src={Ad4} alt="Adert3"/>}
      <FaArrowRight className='Arrow' onClick={handleRight}/>
      
    </div>
    <div className='CircleWrapAd'>
    <div className={AdNum===0?'CircleActiveAd':'CircleAd'}>
       </div>      
       <div className={AdNum===1?'CircleActive':'Circle'}>
       </div> 
       <div className={AdNum===2?'CircleActive':'Circle'}>
       </div> 
       <div className={AdNum===3?'CircleActive':'Circle'}>
       </div>              
</div>
    </div>
  )
}

export default AdertUI
