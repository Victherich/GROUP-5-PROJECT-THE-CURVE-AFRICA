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
      <div className='hero'>
        <div className='heroright'>
          <h1>Find a <span>comfortable </span>  <br /> home for your family.</h1>
          <p>Your dream home Awaits, Unlock the door with<br/>
          <h2  style={{color:"#F90808"}}>HOME<span style={{color:"#0653C8"}}>HUB</span></h2></p>
          <div className='HeroPostProperty'><p>Are you an Agent?</p><button onClick={handleAgentArea}>POST A PROPERTY</button></div>

          {/* <div  className='herolast'>
            <div className='herolast1'>
              <h2>1500+</h2>
              <p>Listed Properties</p>
            </div>

            <div className='herolast1'> 
              <h2>6500+</h2>
              <p>Happy Customers</p>
            </div>

            <div className='herolast1'>
              <h2>1200+</h2>
              <p>Awards</p>
            </div>
          </div> */}
        </div>
        <div className='heroleft'>
          <img src={house} alt="" />
        </div>
      </div>
      <FeaturedProperties/>
      

    <div 
    style={{display:'flex',
            width:"100%",
          marginTop:"10vh"}}
    className='featured111'>
            <h1 
            onClick={handleViewMore}
            style={{cursor:"pointer",
                    color:"#0E9AFF",
                    }}>View all Listing</h1>
        </div><br/><br/>
    <div className='choose'>
        <h1>Why Choose Us?</h1>
        <div className='choose1'>
            <div className='choosediv'>
                <div className='chooseimg'>
                    <img src={img14} alt="" />
                </div>
                <div className='choosetext'>
                    <span>Get your Properties esposed to our <br /> massive network of social <br /> media followers.</span>
                    <p>With our platform your listing for sale or rent <br /> will gain traction and generate leads like never <br /> 
                     before join us and amplify your real estate <br /> success. </p>
                </div>
            </div>
            <div className='choosediv1'>
                <div className='choosetext1'>
                    <span>Get free post sponsorship as an <br /> Agent. </span>
                    <p>As an agent, unlock five days of complimentary <br /> post sponsorship on our platform. <br /> 
                     Reach potential clients effectively and efficiently. <br /> Start boosting your listings today.  </p>
                </div>

                <div className='chooseimg1'>
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
