import React, { useContext, useEffect, useState } from 'react'
import '../CSS/ForSale.css'
import SearchIcon from '../Images/searchIcon.png'
import PropertyImg from '../Images/images (1) 2.png'
import data from "../component/data.json"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Header from '../component/Header'


const AllPropertiesListPage = () => {
  const [forSaleProperties,setForSaleProperties]=useState([])
  // console.log(forSaleProperties)
  const [search,setSearch]=useState('')
  // console.log(search)
  const [sort,setSort]=useState('')
  // console.log(sort)
  const [minFilter, setMinFilter]=useState(null)
  const [maxFilter,setMaxFilter]=useState(null)


  const url=""

  useEffect(()=>{
    forSaleData()
  },[])

  const forSaleData = async()=>{
    try{
      // const response = await axios.get(url)
    // console.log(response.data)
      // setForSaleProperties(response.data)
      setForSaleProperties(data)
    }
    catch(error){
      console.error(error)
    }
  }


  const handleSearch = () => {
    const filteredProperties = data.filter(property =>
      property.propertyType.toLowerCase().includes(search.toLowerCase()) ||
      property.propertyLocation.toLowerCase().includes(search.toLowerCase())
    )
    setForSaleProperties(filteredProperties)
  }
  

  const handleClearSearch = ()=>{
    setSearch('')
    setSort('')
    setForSaleProperties(data)
  }

  useEffect(()=>{
    const filteredProperties = data.filter(property =>
      property.propertyType.toLowerCase().includes(search.toLowerCase()) ||
      property.propertyLocation.toLowerCase().includes(search.toLowerCase())
    )

    if(minFilter==!null&&maxFilter==!null){
       const newForsaleProperties = [...filteredProperties].filter(e=>e.price>=minFilter&&e.price<=maxFilter)
    setForSaleProperties(newForsaleProperties)
    }
  },[minFilter,maxFilter])


 useEffect(()=>{
    if(sort==="Highest Price First"){
      setForSaleProperties([...forSaleProperties].sort((a,b)=>b.price-a.price))
    }else if (sort === "Lowest Price First"){
      setForSaleProperties([...forSaleProperties].sort((a,b)=>a.price-b.price))
  }else{
    handleSearch()
  }
 },[sort])


 

  return (
    <div className='ForSaleWrap'>
      <Header/>
      <div className='ForSale'> 
      <h1 className='PropertyForSaleHeading'>All Properties</h1>
      <div className='SearchAndFilter'>
        <div className='SearchWrap'>
          <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='Enter property name, type or location'/>
          <div onClick={handleSearch} className='SearchIconWrap'>
            <img src={SearchIcon} alt="SearchIcon"/>
          </div>
        </div>
      
        <p>Sort By:</p>
        <select value={sort} onChange={(e)=>setSort(e.target.value)}>
        <option>-- Select --</option>
          <option value="Lowest Price First">Lowest Price First</option>
          <option value="Highest Price First">Highest Price First</option>
        </select>
      </div>
      <div className='ClearSearchWrap'>
        {search&&<button onClick={handleClearSearch}>Clear Search / Sort</button>}
      </div>
      <div className='Line'></div>
      <div className='HomeHubRedandBlueWrap'>
        <h1>HOME<span>HUB</span></h1>
        <p>Your dream home awaits, unlock the door with home hub...</p>
      </div> 

      <div className='ForSaleProperties'>
        {forSaleProperties.map((d)=>(
          <div className='ForSaleProperty'>
          <div className='ForSalePropertyImgWrap'>
            <img src={PropertyImg} alt="ForSalePropertyImg"/>
          </div>
          <div className='ForSalePropertyNamePriceButtonWrap'>
              <div className='ForSalePropertyNameAndPrice'>
                  <h4>{d.propertyType}</h4>
                  <p><span>Category:</span> {d.category}</p>
                  <p><span>Price:</span> N{d.propertyAmount}</p>
                  <p><span>Location:</span> {d.propertyLocation}</p>
            </div>
            
            
            <div className='ForSalePropertyButtonsWrap'>
              <button>View</button>
              {/* <button>Add to Favourite</button> */}
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default AllPropertiesListPage



