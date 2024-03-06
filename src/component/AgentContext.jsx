import React, { useCallback, useState,useEffect } from 'react'
import { createContext } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
export const AgentContext = createContext();


const AgentContextProvider = ({children}) => {

const [AgentActiveMenu,setAgentActiveMenu]=useState('account')
const [toggleAgentEditProfileUI,setToggleAgentEditProfileUI]=useState(false);
const [toggleAgentChangePasswordUI,setToggleAgentChangePasswordUI]=useState(false)
const [logoutWarning,setLogoutwarning]=useState(false);
const [toggleAgentViewDetailpage,setToggleAgentViewDetailpage]=useState(false)
const [AgentToken,setAgentToken]=useState(null||localStorage.getItem("AgentToken"));
const [AgentId,setAgentId]=useState(null);
const [Agent,setAgent]=useState(null||localStorage.getItem("AgentInfo"))
// console.log(Agent)
const [sponsoredProperties,setSponsoredProperties]=useState([]||localStorage.getItem("sponsoredProperties"))
const [propertyDetailObj,setPropertyDetailObj]=useState({})


const Agentlogin = useCallback((token,agentinfo)=>{ //receive response.data from handle login function
  // const {AgentId,token} = Agent;
  // setAgentId(AgentId)
  setAgentToken(token)
  setAgent(agentinfo)
  // localStorage.setItem("AgentInfo",JSON.stringify(agentinfo))
  // localStorage.setItem("AgentToken",JSON.stringify(token)); //or try save to http cookie
},[]);



const Agentlogout = useCallback(()=>{
  setAgent(null)
  setAgentId(null)
  setAgentToken(null)
  localStorage.removeItem("AgentToken")
  console.log("logout contex function")
},[]);

const propertyDetail = async (_id) => {
  // console.log(_id)
  const loadingAlert = Swal.fire({
    title: "Loading",
    text: "Please wait...",
    allowOutsideClick: false,
    allowEscapeKey: false,
    showConfirmButton: false
  });

  Swal.showLoading();
  try {
    const response = await axios.get(`https://homehub-coxc.onrender.com/api/gethouse/${_id}`);
    console.log(response.data)
    loadingAlert.close();
    setPropertyDetailObj(response.data.data)
    
  } catch (error) {
    console.error(error);
    loadingAlert.close();
    Swal.fire({icon:"warning",title:"Something went wrong",timer:2000,showConfirmButton:false})
  }
};


  return (
    <AgentContext.Provider value={{
      AgentActiveMenu,
    setAgentActiveMenu,
    toggleAgentChangePasswordUI,
    setToggleAgentChangePasswordUI,
    toggleAgentEditProfileUI,
    setToggleAgentEditProfileUI,
    logoutWarning,setLogoutwarning,Agent,
    Agentlogout,Agentlogin,AgentId,AgentToken,
    toggleAgentViewDetailpage,setToggleAgentViewDetailpage,
    sponsoredProperties,setSponsoredProperties,propertyDetail,
    propertyDetailObj,
    // agentPostedProperties,setAgentPostedProperties
    }}>
        {children}
    </AgentContext.Provider>
  )
}

export default AgentContextProvider
