import React, { useCallback, useState } from 'react'
import { createContext } from 'react'

export const AgentContext = createContext();


const AgentContextProvider = ({children}) => {

const [AgentActiveMenu,setAgentActiveMenu]=useState('account')
const [toggleAgentEditProfileUI,setToggleAgentEditProfileUI]=useState(false);
const [toggleAgentChangePasswordUI,setToggleAgentChangePasswordUI]=useState(false)
const [logoutWarning,setLogoutwarning]=useState(false);
const [toggleAgentViewDetailpage,setToggleAgentViewDetailpage]=useState(false)
const [AgentToken,setAgentToken]=useState("yes");
const [AgentId,setAgentId]=useState(null);
const [Agent,setAgent]=useState(null)
// console.log(AgentToken, AgentId, Agent)
const [sponsoredProperties,setSponsoredProperties]=useState([])
const [agentPostedProperties,setAgentPostedProperties]=useState([])


const Agentlogin = useCallback((Agent)=>{ //receive response.data from handle login function
  const {AgentId,token} = Agent;
  setAgentId(AgentId)
  setAgentToken(token)
  setAgent(Agent)
  localStorage.setItem("AgentToken",JSON.stringify(AgentToken)); //or try save to http cookie
  console.log('login context function')
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
    logoutWarning,setLogoutwarning,
    Agentlogout,Agentlogin,AgentId,AgentToken,
    toggleAgentViewDetailpage,setToggleAgentViewDetailpage,
    sponsoredProperties,setSponsoredProperties,
    agentPostedProperties,setAgentPostedProperties
    }}>
        {children}
    </AgentContext.Provider>
  )
}

export default AgentContextProvider
