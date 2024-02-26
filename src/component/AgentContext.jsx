import React, { useCallback, useState,useEffect } from 'react'
import { createContext } from 'react'
import axios from 'axios';
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
console.log(Agent)
const [sponsoredProperties,setSponsoredProperties]=useState([])



const Agentlogin = useCallback((token,agentinfo)=>{ //receive response.data from handle login function
  // const {AgentId,token} = Agent;
  // setAgentId(AgentId)
  setAgentToken(token)
  setAgent(agentinfo)
  localStorage.setItem("AgentInfo",JSON.stringify(agentinfo))
  localStorage.setItem("AgentToken",JSON.stringify(token)); //or try save to http cookie
},[]);



const Agentlogout = useCallback(()=>{
  setAgent(null)
  setAgentId(null)
  setAgentToken(null)
  localStorage.removeItem("AgentToken")
  console.log("logout contex function")
},[]);




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
    sponsoredProperties,setSponsoredProperties,
    // agentPostedProperties,setAgentPostedProperties
    }}>
        {children}
    </AgentContext.Provider>
  )
}

export default AgentContextProvider
