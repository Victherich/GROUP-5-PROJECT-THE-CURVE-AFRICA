
import React, { useContext, useState } from 'react'
import "../CSS/FeaturedProperties.css"
import img1 from "../Images/first.jpg"
import img2 from "../Images/second.jpg"
import img3 from "../Images/third.jpg"
import img4 from "../Images/fourth.jpeg"
// import img5 from "../Images/fifth.jpg"
// import love from "../Images/love.png"
import Swal from 'sweetalert2'
import { useEffect } from 'react'
import axios from 'axios'
import { AgentContext } from './AgentContext'
import { useNavigate } from 'react-router-dom'

const FeaturedProperties = () => {
    const navigate = useNavigate();
    const [featuredPropertiesArray,setFeaturedPropertiesArray]=useState([])
    const{propertyDetail,sponsoredProperties}=useContext(AgentContext) 

    useEffect(()=>{
        featuredProperties() 
 },[])
 
 const url='https://homehub-coxc.onrender.com/api/allSponsoredPost'
   const featuredProperties = async () => {
     const loadingAlert = Swal.fire({
       title: "Loading",
       text: "Please wait...",
       allowOutsideClick: false,
       allowEscapeKey: false,
       showConfirmButton: false
     });
 
     Swal.showLoading();
     try {
       const response = await axios.get(url);
       console.log(response.data)
       loadingAlert.close();
      //  setFeaturedPropertiesArray(response.data.data);
       
     } catch (error) {
       console.error(error);
       loadingAlert.close();
      //  Swal.fire({icon:"warning",title:"Something went wrong",timer:2000,showConfirmButton:false})
     }
   };

   const handleNavigate=(_id)=>{
    navigate("/propertydetailpage")
    propertyDetail(_id)
    // {console.log(_id)}
  }

  const [allListingArray,setAllListingArray]=useState([])
  useEffect(()=>{
         allListing() 
  },[])
  
  const url1=`https://homehub-coxc.onrender.com/api/getallhouse`
    const allListing = async () => {
      const loadingAlert = Swal.fire({
        title: "Loading",
        text: "Please wait...",
        allowOutsideClick: false,
        allowEscapeKey: false,
        showConfirmButton: false
      });
  
      Swal.showLoading();
      try {
        const response = await axios.get(url1);
        console.log(response.data)
        loadingAlert.close();
        setAllListingArray(response.data.data);
        
      } catch (error) {
        console.error(error);
        loadingAlert.close();
      //   Swal.fire({icon:"warning",title:"Something went wrong",timer:2000,showConfirmButton:false})
      }
    };


  return (
    <div className='featureddiv'>
        <div className='featured1'>
            <h1>Featured Properties</h1>
        </div>

        {sponsoredProperties.length>0&&<div className='featured2'>
            {sponsoredProperties.slice(-4).map((d)=>(
                <div key={d._id} className='featured3'>  
                <div className='featuredimg'>
                    <img src={d.images[0]} alt="featured Image" />
                </div>
                <div className='featuredtext'>
                <p style={{backgroundColor:"#0653C8", color:"white", fontSize:"1rem", padding:"2px", borderRadius:"5px"}}>Sponsored</p>
                    <h3>{d.type}</h3>
                    <div className='featuredtextspanA'>
                        {d.category&&<span>Category: {d.category.type}</span>}
                        <span>Price: N{d.amount}</span>
                        <span>Location: {d.location}</span>
                    </div>
                    <div className='featuredbtndiv'>
                        <button className='view' onClick={()=>handleNavigate(d._id)}>View</button>
                    </div>
                </div>
            </div>
            ))}
            
        </div>}


        <div className='featured2'>
            {allListingArray.slice(-8).map((d)=>(
                <div key={d._id} className='featured3'>  
                <div className='featuredimg'>
                    <img src={d.images[0]} alt="featured Image" />
                </div>
                <div className='featuredtext'>
                    <h3>{d.type}</h3>
                    <div className='featuredtextspanA'>
                        {d.category&&<span>Category: {d.category.type}</span>}
                        <span>Price: N{d.amount}</span>
                        <span>Location: {d.location}</span>
                    </div>
                    <div className='featuredbtndiv'>
                        <button className='view' onClick={()=>handleNavigate(d._id)}>View</button>
                    </div>
                </div>
            </div>
            ))}
            
        </div>
</div>
)

}
export default FeaturedProperties