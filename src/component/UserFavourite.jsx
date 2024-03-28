import React, { useContext, useEffect, useState } from 'react'
import '../CSS/AgentPostedProperties.css'
import data from './data.json'
import axios from 'axios'
import PostedImg from '../Images/woodex6 1.png'
import { UserContext } from './UserContext'
import { useSelector } from 'react-redux'

const UserFavourite = () => {
  const User = useSelector(state=>state.userUser)
  const [userFavourites,setuserFavourites]=useState([])
  const {setToggleUserViewDetailpage}=useContext(UserContext)

  const url=""

useEffect(()=>{
    handleuserFavourites()
},[])

const handleuserFavourites =async()=>{
   try{
    const response = await axios.get(url)
    console.log(response.data)
      setuserFavourites(data)
   }catch(error){
    console.error(error)
   }

}



  return (
    <div className='PostedPropertiesWrap'>
      <h4>User Favourite</h4>
      <div className='PostedProperties'>
        {User.UserFavourite?.map((d)=>(
          <div className='ForSaleProperty'>
          <div className='ForSalePropertyImgWrap'>
            <img src={PostedImg} alt="ForSalePropertyImg"/>
          </div>
          <div className='ForSalePropertyNamePriceButtonWrap'>
              <div className='ForSalePropertyNameAndPrice'>
                  <h4>{d.names}</h4>
                  <p><span>Category:</span> {d.category}</p>
                  <p><span>Price:</span> N{d.price}</p>
                  <p><span>Location:</span> {d.location}</p>
            </div>    
            <div className='ForSalePropertyButtonsWrap'>
              <button onClick={()=>setToggleUserViewDetailpage(true)}>View</button>
              
              <button>Remove</button>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default UserFavourite
