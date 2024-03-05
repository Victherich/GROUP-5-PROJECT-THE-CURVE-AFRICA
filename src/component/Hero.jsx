import React from 'react'
import { useNavigate } from 'react-router-dom'
import house from "../Images/compaY 1.png"
import '../CSS/Hero.css'


const Hero = () => {
    const navigate=useNavigate()
    const handleAgentArea = ()=>{
        navigate("/agentlogin")
      }
      



  return (
    <div className='Hero'>
        <div className='HeroLeft'>
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
        <div className='HeroRight'>
          <img src={house} alt="" />
        </div>
      </div>
  )
}

export default Hero
