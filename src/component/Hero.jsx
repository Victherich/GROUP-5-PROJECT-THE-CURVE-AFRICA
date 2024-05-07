import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import house from "../Images/compaY 1.png";
import '../CSS/Hero.css';
import { AgentContext } from './AgentContext';
import { UserContext } from './UserContext';

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
        <img src={house} alt="" />
      </div>
    </div>
  );
}

export default Hero;
