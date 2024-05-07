import React, { useState } from 'react'
import Header from "../component/Header"
import house from "../Images/compaY 1.png"
import FeaturedProperties from '../component/FeaturedProperties'
import "../CSS/LandingPage.css"
import Footer from '../component/Footer'
import img6 from "../Images/sixth.jpg"
import img7 from "../Images/seventh.webp"
import img8 from "../Images/eight.jpg"
import img9 from "../Images/ninth.webp"
import img14 from "../Images/image 14.png"
import img15 from "../Images/image 15.png"
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import axios from 'axios'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AgentContext } from '../component/AgentContext'
import Hero from '../component/Hero'




const LandingPage = () => {
const {propertyDetail,sponsoredProperties}=useContext(AgentContext)
const navigate =useNavigate()
const handleViewMore = ()=>{
    navigate("/allpropertieslistpage")
}

const handleAgentArea = ()=>{
  navigate("/agentlogin")
}

  const handleNavigate=(_id)=>{
    navigate("/propertydetailpage")
    propertyDetail(_id)
    // {console.log(_id)}
  }

  return (
    <div className='LandingPage'>
      <Header/>
      <Hero/>
      <FeaturedProperties/>
      

    <div className='ViewAllListingWrap'>
            <h1 onClick={handleViewMore}>View all Listing</h1>
        </div>
        <br/>
        <br/>

    <div className='choose'>
        <h1>Why Choose Us?</h1>
        <div className='chooseItems'>
            <div className='choosediv'>
                <div className='chooseimg'>
                    <img src={img14} alt="" />
                </div>
                <div className='choosetext'>
                    <span>Get your Properties exposed to our <br /> massive network of social <br /> media followers.</span>
                    <p>With our platform your listing for sale or rent <br /> will gain traction and generate leads like never <br /> 
                     before join us and amplify your real estate <br /> success. </p>
                </div>
            </div>
            <div className='choosediv'>
                <div className='choosetext'>
                    <span>Get free post sponsorship as an Agent. </span>
                    <p>As an agent, unlock five days of complimentary <br /> post sponsorship on our platform. <br /> 
                     Reach potential clients effectively and efficiently. <br /> Start boosting your listings today.  </p>
                </div>

                <div className='chooseimg'>
                    <img src={img15} alt="" />
                </div>
            </div>
        </div>
    </div>
      <Footer/>
    </div>
  )
}

export default LandingPage
