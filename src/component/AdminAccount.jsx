import React, { useContext } from 'react';
import AgentEditProfileUI from './AgentEditProfileUI';
import { AgentContext } from './AgentContext';
import { useSelector } from 'react-redux';

const AdminAccount = ({
  toggleAgentChangePasswordUI,
  setToggleAgentChangePasswordUI,
  toggleAgentEditProfileUI,
  setToggleAgentEditProfileUI,
}) => {
  const { AgentId, setAgentActiveMenu, Agent } = useContext(AgentContext);

  // Parse Agent state if it's in JSON format
  const parsedAgent = typeof Agent === 'string' ? JSON.parse(Agent) : Agent;
  // console.log(parsedAgent);
  // console.log(parsedAgent.fullName);

  const AgentUser = useSelector(state=>state.user)

  const handleAgentChangePasswordUI = () => {
    setToggleAgentChangePasswordUI(!toggleAgentChangePasswordUI);
    setToggleAgentEditProfileUI(false);
  };

  const handleAgentEditProfileUI = () => {
    setToggleAgentEditProfileUI(!toggleAgentEditProfileUI);
    setToggleAgentChangePasswordUI(false);
  };

  return (
    <div className='Account'>
      <div className='AccountUp'>
        <div className='AccountUpLeft'>
          <h3>Admin Account</h3>
          <p>
            <span>Name: </span>
            {AgentUser.fullName}
          </p>
          <p>
            <span>Company Name: </span>
            {AgentUser.companyName}
          </p>
          <p>
            <span>Address: </span>
            {AgentUser.address}
          </p>
          <p>
            <span>Email: </span>
            {AgentUser.email}
          </p>
          <p>
            <span>Phone no.: </span>
            {AgentUser.phoneNumber}
          </p>
        </div>
        <div className='AccountUpRight'>
          
        </div>
      </div>
      <div className='AccountDown'>
        {/* <button onClick={handleAgentEditProfileUI}>Edit Profile</button> */}
        {/* <button onClick={handleAgentChangePasswordUI}>Change Password</button>   */}
      </div>
      {/* {toggleAgentChangePasswordUI&&<AgentChangePasswordUI/>} */}
      {toggleAgentEditProfileUI && <AgentEditProfileUI />}
    </div>
  );
};

export default AdminAccount;
