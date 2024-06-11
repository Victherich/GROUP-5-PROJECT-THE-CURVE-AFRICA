import React, { useContext, useEffect, useState } from 'react'
import '../CSS/ForSale.css'
import SearchIcon from '../Images/searchIcon.png'
// import dataForSale from '../component/dataForSale.json'
// import dataAgentList from '../component/dataAgentList.json'
import axios from 'axios'
import '../CSS/AllAgentListPage.css'
import AgentImg from '../Images/pic1 1.png'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Swal from 'sweetalert2'
import { AgentContext } from '../component/AgentContext'
import LoadingUI from '../component/LoadingUI'

const AllAgentListPage = () => {
  const {loading,setLoading}=useContext(AgentContext)
 
  const [allAgents,setAllAgents]=useState([])
  const [allAgentsB,setAllAgentsB]=useState([])
  const [search,setSearch]=useState('')

  const url="https://homehub-coxc.onrender.com/api/getallagent"

  // const allAgents = dataAgentList
  
  const handleAllAgents = async()=>{
    // const loadingAlert = Swal.fire({
    //   title: "Loading",
    //   text: "Please wait...",
    //   allowOutsideClick: false,
    //   allowEscapeKey: false,
    //   showConfirmButton: false
    // });

    // Swal.showLoading();
    setLoading(true)
    try{
      const response = await axios.get(url)
    console.log(response.data)
    // loadingAlert.close()
    setLoading(false)
      // setForSaleProperties(response.data.data)
      setAllAgents(response.data.data)
    }
    catch(error){
      console.error(error)
      // loadingAlert.close()
      setLoading(false)
      Swal.fire({icon:"warning",title:"Something went wrong",timer:2000,showConfirmButton:false})
    }
  }

  useEffect(()=>{
    handleAllAgents()
  },[])

  console.log(allAgents)


  const handleSearch = () => {
    const filteredAgents = allAgents.filter(agents =>
      agents.fullName.toLowerCase().includes(search.toLowerCase()) 
    )
    setAllAgentsB(filteredAgents)
  }

  const handleClearSearch = ()=>{
    setSearch('')
    setAllAgentsB(allAgents)
  }

  // ensuring the assignment of allAgentsB
  useEffect(()=>{
    setAllAgentsB(allAgents);
  },[allAgents])

  return (

    <div className='ForSaleWrap'>
      <Header/>
        <div className='ForSale'> 
      <h1 className='PropertyForSaleHeading'>All Agents</h1>
      <div className='SearchAndFilter'>
        {/* <div className='SearchWrap'>
          <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='Enter property name, type or location'/>
          <div onClick={handleSearch} className='SearchIconWrap'>
            <img src={SearchIcon} alt="SearchIcon"/>
          </div>
        </div> */}
        
      </div>
      <div className='ClearSearchWrap'>
        {search&&<button onClick={handleClearSearch}>Clear Search / Sort</button>}
      </div>
      <div className='Line'></div>
      <div className='HomeHubRedandBlueWrap'>
        <h1>HOME<span>HUB</span></h1>
        <p>Your dream home awaits, unlock the door with home hub...</p>
      </div> 

      <div className='AllAgentsPage' style={{width:"60%"}}>
        {allAgentsB.map((allagents)=>(
          <div key={allagents._id} className='AnAgentWrap'>
          
              <div className='AnAgent'>
                  <h3 style={{color:"#0653C8"}}>Company: {allagents.companyName}</h3>
                  <p><span>Name: </span>{allagents.fullName}</p>
                  <p><span>Address:</span> {allagents.address}</p>
                  <p><span>Email:</span> {allagents.email}</p>
                  <p><span>Phone:</span> {allagents.phoneNumber}</p>
              </div>
          
        </div>
        ))}
      </div>
    </div>
    <Footer/>
    {loading&&<LoadingUI/>}
    </div>
  )
}

export default AllAgentListPage




