// import React, { useContext } from 'react'
// // import AgentChangePasswordUI from './AgentChangePasswordUI'
// import AgentEditProfileUI from './AgentEditProfileUI'
// import '../CSS/Account.css'
// // import AccountLogo from '../Images/HomeHub Logo.svg'
// import { AgentContext } from './AgentContext'


// const AgentAccount = ({toggleAgentChangePasswordUI,
//   setToggleAgentChangePasswordUI,
//   toggleAgentEditProfileUI,
//   setToggleAgentEditProfileUI,
  
//   }) => {
//     const{AgentId,setAgentActiveMenu,Agent}=useContext(AgentContext)
//     // const data = {"_id":"65d9b5957396b66681d6913f","fullName":"Victor Ndu","companyName":"Premium Real Estate","email":"victherich@gmail.com","phoneNumber":"07063480314","password":"$2b$10$kaTUR9PHFBOKmZ5KYb2G7.28qD3fs5QS66PuJYBLQvtXjd5gfTIAW","documentImage":"https://res.cloudinary.com/dipfhvnlw/image/upload/v1708766611/ezcebejpevuuyijigjfh.png","regCert":"https://res.cloudinary.com/dipfhvnlw/image/upload/v1708766612/wr4f9ylc4pjyfxlguww0.png","address":"Lagos street ","isVerified":true,"isGood":false,"isAdmin":false,"house":[],"createdAt":"2024-02-24T09:23:33.089Z","updatedAt":"2024-02-24T22:17:02.529Z","__v":0}
//     // const data=JSON.Parse(`Agent`)
//     // console.log(Agent) 
//     // console.log(data)
//     // console.log(data.fullName)

// const handleAgentChangePasswordUI=()=>{
//   setToggleAgentChangePasswordUI(!toggleAgentChangePasswordUI)
//   setToggleAgentEditProfileUI(false)
// }

// const handleAgentEditProfileUI=()=>{
//   setToggleAgentEditProfileUI(!toggleAgentEditProfileUI)
//   setToggleAgentChangePasswordUI(false)
// }

//   return (
//     <div className='Account'>
      
//       <div className='AccountUp'>
//           <div className='AccountUpLeft'>
//           <h3>Agent Account</h3>
//               <p><span>Name: </span>{Agent.fullName}</p>
//               <p><span>Company Name: </span>France Real estate Nigeria</p>
//               <p><span>Address: </span>No. 2 New hub avenue</p>
//               <p><span>Email: </span>clara@gmail.com</p>
//               <p><span>Phone no.: </span>01234567</p>
//           </div>
//           <div className='AccountUpRight'>
//               {/* <img src={AccountLogo} alt="Logo"/> */}
//               <button 
//               className='Makeanewpost'
//               onClick={()=>setAgentActiveMenu("post a property")}
//               > + Make a new post</button>
//           </div>
//       </div>
//       <div className='AccountDown'>
//           <button onClick={handleAgentEditProfileUI}>Edit Profile</button>
//           {/* <button onClick={handleAgentChangePasswordUI}>Change Password</button>   */}
          
//       </div>  
//       {/* {toggleAgentChangePasswordUI&&<AgentChangePasswordUI/>} */}
//       {toggleAgentEditProfileUI&&<AgentEditProfileUI/>}
//     </div>
//   )
// }

// export default AgentAccount



import React, { useContext } from 'react';
import AgentEditProfileUI from './AgentEditProfileUI';
import { AgentContext } from './AgentContext';
import { useSelector } from 'react-redux';

const AgentAccount = ({
  toggleAgentChangePasswordUI,
  setToggleAgentChangePasswordUI,
  toggleAgentEditProfileUI,
  setToggleAgentEditProfileUI,
}) => {
  const { AgentId, setAgentActiveMenu, Agent, handlePostAPropertyShow} = useContext(AgentContext);

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
          <h3>Agent Account</h3>
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
          <button
            className='Makeanewpost'
            // onClick={() => setAgentActiveMenu('post a property')}
            onClick={handlePostAPropertyShow}
            >
            {' '}
            + Make a new post
          </button>
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

export default AgentAccount;
