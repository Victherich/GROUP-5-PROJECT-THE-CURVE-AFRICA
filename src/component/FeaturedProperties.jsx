
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
import "../CSS/ForSale.css"
import favouriteIcon1 from "../Images/light Blue favourite stroke icon.png"
import favouriteIcon2 from "../Images/Blue favourite stroke icon.png"
import favouriteIcon3 from "../Images/Blue favourite fill icon.png"
import { UserContext } from './UserContext'

const FeaturedProperties = () => {
    const navigate = useNavigate();
    const [sponsoredPropertiesArray,setSponsoredPropertiesArray]=useState([])
    const{propertyDetail,sponsoredProperties}=useContext(AgentContext) 
    const {UserToken,favourite,setFavourite}=useContext(UserContext)
 

   const featuredSponsoredProperties = async () => {
     const loadingAlert = Swal.fire({
       title: "Loading",
       text: "Please wait...",
       allowOutsideClick: false,
       allowEscapeKey: false,
       showConfirmButton: false
     });
 
     Swal.showLoading();
     try {
       const response = await axios.get('https://homehub-coxc.onrender.com/api/allSponsored');
       console.log(response.data)
       loadingAlert.close();
       setSponsoredPropertiesArray(response.data.data);
       
     } catch (error) {
       console.error(error);
       loadingAlert.close();
      //  Swal.fire({icon:"warning",title:"Something went wrong",timer:2000,showConfirmButton:false})
     }
   };

   useEffect(()=>{
    featuredSponsoredProperties() 
},[])

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

    const handleAddToFavourite = ()=>{

    }

    const handleRemoveFromFavourite=()=>{

    }


  return (
    <div className='featureddiv'>
        <div className='featuredHeadingWrap'>
            <h1>Featured Properties</h1>
        </div>
<div className='ForSaleProperties'>    
          {sponsoredPropertiesArray.slice(-4).map((d) => (
            <div key={d._id} className='ForSaleProperty'>
              <div className='ForSalePropertyImgWrap'>
                <img src={d.images[0]} alt='ForSalePropertyImg' />
              </div>
              <div className='ForSalePropertyNamePriceButtonWrap'>
                <div className='ForSalePropertyNameAndPrice'>
                <span
                className='sponsorTag'
                >Sponsored</span>
                  <h4>{d.type}</h4>
                  <p>
                    <span>Category:</span> {d.category==="65e43620b24d39a99a1c06f7"?"For Sale":"For Rent"}
                  </p>
                  <p>
                    <span>Price:</span> N{d.amount}
                  </p>
                  <p>
                    <span>Location:</span> {d.location}
                  </p>
                </div>
                <div className='ForSalePropertyButtonsWrap'>
                  <button onClick={() => handleNavigate(d._id)}>View</button>
                  {UserToken?"":<img src={favouriteIcon1} alt="FavouriteIcon" onClick={()=>Swal.fire({icon:"warning",text:"Please login to Add to favourites",showConfirmButton:false,timer:2000})}/>}
                  {UserToken&&favourite===false?<img src={favouriteIcon2} alt="FavouriteIcon" onClick={handleAddToFavourite}/>:""}
                  {UserToken&&favourite===true?<img src={favouriteIcon3} alt="FavouriteIcon" onClick={handleRemoveFromFavourite}/>:""}
                </div>
              </div>
            </div>
          ))}
        </div>



<div className='ForSaleProperties'>    
          {allListingArray.slice(-8).map((d) => (
            <div key={d._id} className='ForSaleProperty'>
              <div className='ForSalePropertyImgWrap'>
                <img src={d.images[0]} alt='ForSalePropertyImg' />
              </div>
              <div className='ForSalePropertyNamePriceButtonWrap'>
                <div className='ForSalePropertyNameAndPrice'>
                  <h4>{d.type}</h4>
                  <p>
                  {d.category&&<span>Category: {d.category.type}</span>}
                  </p>
                  <p>
                    <span>Price:</span> N{d.amount}
                  </p>
                  <p>
                    <span>Location:</span> {d.location}
                  </p>
                </div>
                <div className='ForSalePropertyButtonsWrap'>
                  <button onClick={() => handleNavigate(d._id)}>View</button>
                  {UserToken?"":<img src={favouriteIcon1} alt="FavouriteIcon" onClick={()=>Swal.fire({icon:"warning",text:"Please login to Add to favourites",showConfirmButton:false,timer:2000})}/>}
                  {UserToken&&favourite===false?<img src={favouriteIcon2} alt="FavouriteIcon" onClick={handleAddToFavourite}/>:""}
                  {UserToken&&favourite===true?<img src={favouriteIcon3} alt="FavouriteIcon" onClick={handleRemoveFromFavourite}/>:""}
                </div>
              </div>
            </div>
          ))}
        </div>




</div>
)

}
export default FeaturedProperties