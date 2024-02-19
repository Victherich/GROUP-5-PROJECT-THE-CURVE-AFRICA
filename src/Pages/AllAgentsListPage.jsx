import React, { useContext, useEffect, useState } from 'react'
import '../CSS/ForSale.css'
import SearchIcon from '../Images/searchIcon.png'
import dataForSale from '../component/dataForSale.json'
import dataAgentList from '../component/dataAgentList.json'
import axios from 'axios'
import '../CSS/AllAgentListPage.css'
import AgentImg from '../Images/pic1 1.png'

const AllAgentListPage = () => {
 
  const [allAgents,setAllAgents]=useState([])
  const [search,setSearch]=useState('')

  const url=""

  // const allAgents = dataAgentList
  
  const handleAllAgents = async()=>{
    try{
      // const response = await axios.get(url)
    // console.log(response.data)
      // setForSaleProperties(response.data)
      setAllAgents(dataAgentList)
    }
    catch(error){
      console.error(error)
    }
  }

  useEffect(()=>{
    handleAllAgents()
  },[])

  console.log(allAgents)


  const handleSearch = () => {
    const filteredAgents = dataAgentList.filter(agents =>
      agents.name.toLowerCase().includes(search.toLowerCase()) 
    )
    setAllAgents(filteredAgents)
  }

  const handleClearSearch = ()=>{
    setSearch('')
    setAllAgents(dataAgentList)
  }

  return (
    <div className='ForSale'> 
      <h1 className='PropertyForSaleHeading'>All Agents</h1>
      <div className='SearchAndFilter'>
        <div className='SearchWrap'>
          <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='Enter property name, type or location'/>
          <div onClick={handleSearch} className='SearchIconWrap'>
            <img src={SearchIcon} alt="SearchIcon"/>
          </div>
        </div>
        
      </div>
      <div className='ClearSearchWrap'>
        {search&&<button onClick={handleClearSearch}>Clear Search / Sort</button>}
      </div>
      <div className='Line'></div>
      <div className='HomeHubRedandBlueWrap'>
        <h1>HOME<span>HUB</span></h1>
        <p>Your dream home awaits, unlock the door with home hub...</p>
      </div> 

      <div className='AllAgentsPage'>
        {allAgents.map((allagents)=>(
          <div className='AnAgent'>
          <div className='AnAgentLeft'>
            <img src={AgentImg} alt="AngentImg"/>
          </div>
          <div className='AnAgentRight'>
              <div className='AnAgentRightUp'>
                  <h4>{allagents.name}</h4>
                  <p>{allagents.address}</p>
                  <p>{allagents.email}</p>
                  <p>{allagents.phone}</p>
              </div>
              <div className='AnAgentRightDown'>
                <button>View Agent's Properties</button>
              </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default AllAgentListPage




