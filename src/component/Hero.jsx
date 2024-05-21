import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import house from "../Images/compaY 1.png";
import '../CSS/Hero.css';
import { AgentContext } from './AgentContext';
import { UserContext } from './UserContext';
import house2 from "../Images/house7.jpg"
import house3 from "../Images/ninth.webp"
import house4 from "../Images/house6.jpg"

const Hero = () => {
  const { seekLandingpageOnLogout, setSeekLandingPageoNLogout } = useContext(AgentContext);
  const { logOutHomeNavigate, setLogoutHomeNavigate } = useContext(UserContext);
  const navigate = useNavigate();

  // Function to handle navigation to agent login area
  const handleAgentArea = () => {
    navigate("/agentlogin");
  };

  // Setting up effects for landing page navigation after logout
  useEffect(() => {
    setSeekLandingPageoNLogout(false); // Resetting agent landing page seek
    setLogoutHomeNavigate(false); // Resetting user home navigation on logout
  }, []);


  const [HeroImgSelect,setHeroImgSelect]=useState(0)
  useEffect(()=>{
    const intervalId = setInterval(()=>{
        setHeroImgSelect((prevState) => (prevState+1)%4);
    },3000)

    return ()=>{
      clearInterval(intervalId)
    }
  },[])


  console.log(HeroImgSelect)

  return (
    <div className='Hero'>
      <div className='HeroLeft'>
        <h1>Find a <span>comfortable</span> <br /> home for your family.</h1>
        <p>Your dream home awaits, Unlock the door with<br />
          <h2 style={{ color: "#F90808" }}>HOME<span style={{ color: "#0653C8" }}>HUB</span></h2></p>
        <div className='HeroPostProperty'>
          <p>Are you an Agent?</p>
          <button onClick={handleAgentArea}>POST A PROPERTY</button>
        </div>
      </div>
      <div className='HeroRight'>
        {HeroImgSelect===0&&<img src={house} alt=""  className='animate__animated animate__fadeIn'/>}
        {HeroImgSelect===1&&<img src={house2} alt="" className='animate__animated animate__fadeIn'/>}
        {HeroImgSelect===2&&<img src={house3} alt="" className='animate__animated animate__fadeIn'/>}
        {HeroImgSelect===3&&<img src={house4} alt="" className='animate__animated animate__fadeIn'/>}
        <div className='CircleWrap'>
             <div className={HeroImgSelect===0?'CircleActive':'Circle'}>
                </div>      
                <div className={HeroImgSelect===1?'CircleActive':'Circle'}>
                </div> 
                <div className={HeroImgSelect===2?'CircleActive':'Circle'}>
                </div> 
                <div className={HeroImgSelect===3?'CircleActive':'Circle'}>
                </div>              
        </div>
      </div>
      
    </div>
  );
}

export default Hero;
