import React, { useContext, useEffect, useState } from 'react'
import '../CSS/AgentPostedProperties.css'
import data from './data.json'
import axios from 'axios'
import PostedImg from '../Images/woodex6 1.png'
import { UserContext } from './UserContext'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { AgentContext } from './AgentContext'
import { useNavigate } from 'react-router-dom'

const UserFavourite = () => {
  const navigate = useNavigate();
  const User = useSelector(state=>state.userUser)
  const [userFavourites,setuserFavourites]=useState([])
  const {setToggleUserViewDetailpage}=useContext(UserContext)
  const userToken = useSelector(state=>state.userUserToken)

  const {oneAgent,propertyDetail}=useContext(AgentContext)
  

  const url="https://homehub-coxc.onrender.com/api/user/getAllFavorites"

useEffect(()=>{
    handleuserFavourites()
},[])

const handleuserFavourites =async()=>{
  const loadingAlert = Swal.fire({
    title: "Loading",
    text: "Please wait...",
    allowOutsideClick: false,
    allowEscapeKey: false,
    showConfirmButton: false
  });

  Swal.showLoading();

   try{
    axios.defaults.headers.common['Authorization'] = `Bearer ${userToken}`;
    const response = await axios.get(url)
    console.log(response.data)
      setuserFavourites(response.data.data)
      loadingAlert.close();
      userFavouritesAlert()
   }catch(error){
    console.error(error)
    Swal.fire({icon:"error",title:error.response.data.error,text:error.message,showConfirmButton:false,timer:2000});
    loadingAlert.close();
   }

}

console.log(userFavourites)

const forSaleId = "65e43620b24d39a99a1c06f7"

const handleNavigate=(_id,agentId)=>{
  navigate("/propertydetailpage")
  propertyDetail(_id)
  oneAgent(agentId)
  // {console.log(_id)}

}


const handleRemoveFromUserFavourites =async(_id)=>{
  const loadingAlert = Swal.fire({
    title: "Loading",
    text: "Please wait...",
    allowOutsideClick: false,
    allowEscapeKey: false,
    showConfirmButton: false
  });

  Swal.showLoading();
  removeFromFavouritesFrontEnd(_id)

   try{
    axios.defaults.headers.common['Authorization'] = `Bearer ${userToken}`;
    const response = await axios.post(`https://homehub-coxc.onrender.com/api/user/removeFavorite/${_id}`)
    
    console.log(response.data)
      // setuserFavourites(response.data.data)
      loadingAlert.close();
      Swal.fire({icon:"success",text:"Successfully removed",timer:2000,showConfirmButton:false})
      

   }catch(error){
    console.error(error.response)
    // Swal.fire({icon:"error",title:error.response.data.error,text:error.response.data.message,showConfirmButton:false,timer:2000});
    Swal.fire({icon:"error",text:error.response.data,showConfirmButton:false,timer:2000});
    loadingAlert.close();
   }

}

const removeFromFavouritesFrontEnd =(_id)=>{
    setuserFavourites(userFavourites.filter((e)=>e._id!==_id))
}

const userFavouritesAlert=()=>{
  if(userFavourites.length===0){
    return "you hae no faourite Property"  
  }
}


  return (
    <div className='PostedPropertiesWrap'>
      <h4>User Favourite</h4>
      {userFavourites?.length<=0&&<h4>You have no favourite property</h4>}
      {userFavourites?.length>0&&<div className='PostedProperties'>
        {userFavourites?.map((d)=>(
          <div key={d._id} className='ForSaleProperty'>
          <div className='ForSalePropertyImgWrap'>
            <img src={d.images[0]} alt="ForSalePropertyImg"/>
          </div>
          <div className='ForSalePropertyNamePriceButtonWrap'>
              <div className='ForSalePropertyNameAndPrice'>
                  <h4>{d.type}</h4>
                  <p><span>Category:</span> {d.category===forSaleId?"For sale":"For rent"}</p>
                  <p><span>Price:</span> N{d.amount}</p>
                  <p><span>Location:</span> {d.location}</p>
            </div>    
            <div className='ForSalePropertyButtonsWrap'>
              <button onClick={()=>handleNavigate(d._id,d.agentId)}>View</button>
              
              <button onClick={()=>handleRemoveFromUserFavourites(d._id)}>Remove</button>
            </div>
          </div>
        </div>
        ))}
      </div>}
    </div>
  )
}

export default UserFavourite
