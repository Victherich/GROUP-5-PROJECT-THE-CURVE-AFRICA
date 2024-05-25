
// import React, { useCallback, useContext, useState } from 'react'
// import "../CSS/FeaturedProperties.css"
// import Swal from 'sweetalert2'
// import { useEffect } from 'react'
// import axios from 'axios'
// import { AgentContext } from './AgentContext'
// import { useNavigate } from 'react-router-dom'
// import "../CSS/ForSale.css"
// import favouriteIcon1 from "../Images/light Blue favourite stroke icon.png"
// import favouriteIcon2 from "../Images/Blue favourite stroke icon.png"
// import favouriteIcon3 from "../Images/Blue favourite fill icon.png"
// import { UserContext } from './UserContext'
// import { useSelector } from 'react-redux'


// const FeaturedProperties = () => {
//     const navigate = useNavigate();
//     const [sponsoredPropertiesArray,setSponsoredPropertiesArray]=useState([])
//     const{propertyDetail,sponsoredProperties,oneAgent}=useContext(AgentContext) 
//     const {UserToken,favourite,setFavourite,handleAddToFavourite}=useContext(UserContext)
//     const userUserId=useSelector(state=>state.userUserId)
//     console.log(userUserId)
 

//    const featuredSponsoredProperties = async () => {
//      const loadingAlert = Swal.fire({
//        title: "Loading",
//        text: "Please wait...",
//        allowOutsideClick: false,
//        allowEscapeKey: false,
//        showConfirmButton: false
//      });
 
//      Swal.showLoading();
//      try {
//        const response = await axios.get('https://homehub-coxc.onrender.com/api/allSponsored');
//        console.log(response.data)
//        loadingAlert.close();
//        setSponsoredPropertiesArray(response.data.data);
       
//      } catch (error) {
//        console.error(error);
//        loadingAlert.close();
//       //  Swal.fire({icon:"warning",title:"Something went wrong",timer:2000,showConfirmButton:false})
//      }
//    };

//    useEffect(()=>{
//     featuredSponsoredProperties() 
// },[])

//    const handleNavigate=(_id,agentId)=>{
//     navigate("/propertydetailpage")
//     propertyDetail(_id)
//     oneAgent(agentId)
//     // {console.log(_id)}
//   }

//   const [allListingArray,setAllListingArray]=useState([])
//   useEffect(()=>{
//          allListing() 
//   },[])
  
//   const url1=`https://homehub-coxc.onrender.com/api/getallhouse`
//     const allListing = async () => {
//       const loadingAlert = Swal.fire({
//         title: "Loading",
//         text: "Please wait...",
//         allowOutsideClick: false,
//         allowEscapeKey: false,
//         showConfirmButton: false
//       });
  
//       Swal.showLoading();
//       try {
//         const response = await axios.get(url1);
//         console.log(response.data)
//         loadingAlert.close();
//         setAllListingArray(response.data.data);
        
//       } catch (error) {
//         console.error(error);
//         loadingAlert.close();
//       //   Swal.fire({icon:"warning",title:"Something went wrong",timer:2000,showConfirmButton:false})
//       }
//     };




//     //getting user Faourites for comparism
//     const userToken = useSelector(state=>state.userUserToken)
//     const [userFavourites,setuserFavourites]=useState([])
//     const url="https://homehub-coxc.onrender.com/api/user/getAllFavorites"

//     useEffect(()=>{
//         handleuserFavourites()
//     },[])
    
//     const handleuserFavourites =async()=>{
//       const loadingAlert = Swal.fire({
//         title: "Loading",
//         text: "Please wait...",
//         allowOutsideClick: false,
//         allowEscapeKey: false,
//         showConfirmButton: false
//       });
    
//       Swal.showLoading();
    
//        try{
//         axios.defaults.headers.common['Authorization'] = `Bearer ${userToken}`;
//         const response = await axios.get(url)
//         console.log(response.data)
//           await setuserFavourites(response.data.data)
//           handleComparism(response.data.data._id)
//           loadingAlert.close();
//        }catch(error){
//         console.error(error)
//         Swal.fire({icon:"error",title:error.response.data.error,text:error.response.data.message,showConfirmButton:false,timer:2000});
//         loadingAlert.close();
//        }
    
//     }
    
//     console.log(userFavourites)
    
//     const handleComparism = useCallback((_id) => {
//       const updatedProperties = sponsoredPropertiesArray.find((property) =>
//         property.id === _id ? { ...property, added: true } : property
//       );
  
//       // setSponsoredPropertiesArray(updatedProperties);
//     }, [sponsoredPropertiesArray]);
    



//   return (
//     <div className='featureddiv'>
//         <div className='featuredHeadingWrap'>
//             <h1>Featured Properties</h1>
//         </div>
// <div className='ForSaleProperties'>    
//           {sponsoredPropertiesArray?.slice(-4).map((d) => (
//             <div key={d._id} className='ForSaleProperty'>
//               <div className='ForSalePropertyImgWrap'>
//                 <img src={d.images[0]} alt='ForSalePropertyImg' />
//               </div>
//               <div className='ForSalePropertyNamePriceButtonWrap'>
//                 <div className='ForSalePropertyNameAndPrice'>
//                 <span
//                 className='sponsorTag'
//                 >Sponsored</span>
//                   <h4>{d.type}</h4>
//                   <p>
//                     <span>Category:</span> {d.category==="65e43620b24d39a99a1c06f7"?"For Sale":"For Rent"}
//                   </p>
//                   <p>
//                     <span>Price:</span> N{d.amount}
//                   </p>
//                   <p>
//                     <span>Location:</span> {d.location}
//                   </p>
//                 </div>
//                 <div className='ForSalePropertyButtonsWrap'>
//                   <button onClick={() => handleNavigate(d._id,d.agentId)}>View</button>
//                   {userUserId?"":<img src={favouriteIcon1} alt="FavouriteIcon" onClick={()=>Swal.fire({icon:"warning",text:"Please login to Add to favourites",showConfirmButton:false,timer:2000})}/>}
//                   {userUserId&&favourite===false?<img src={favouriteIcon2} alt="FavouriteIcon" onClick={()=>handleAddToFavourite(d._id)}/>:""}
//                   {userUserId&&d.added===true?<img src={favouriteIcon3} alt="FavouriteIcon" />:""}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>



// <div className='ForSaleProperties'>    
//           {allListingArray.slice(-8).map((d) => (
//             <div key={d._id} className='ForSaleProperty'>
//               <div className='ForSalePropertyImgWrap'>
//                 <img src={d.images[0]} alt='ForSalePropertyImg' />
//               </div>
//               <div className='ForSalePropertyNamePriceButtonWrap'>
//                 <div className='ForSalePropertyNameAndPrice'>
//                   <h4>{d.type}</h4>
//                   <p>
//                   {d.category&&<span>Category: {d.category.type}</span>}
//                   </p>
//                   <p>
//                     <span>Price:</span> N{d.amount}
//                   </p>
//                   <p>
//                     <span>Location:</span> {d.location}
//                   </p>
//                 </div>
//                 <div className='ForSalePropertyButtonsWrap'>
//                   <button onClick={() => handleNavigate(d._id,d.agentId)}>View</button>
//                   {userUserId?"":<img src={favouriteIcon1} alt="FavouriteIcon" onClick={()=>Swal.fire({icon:"warning",text:"Please login to Add to favourites",showConfirmButton:false,timer:2000})}/>}
//                   {userUserId&&favourite===false?<img src={favouriteIcon2} alt="FavouriteIcon" onClick={()=>handleAddToFavourite(d._id)} />:""}
//                   {userUserId&&favourite===true?<img src={favouriteIcon3} alt="FavouriteIcon"/>:""}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>




// </div>
// )

// }
// export default FeaturedProperties


import React, { useCallback, useContext, useState, useEffect } from 'react'
import "../CSS/FeaturedProperties.css"
import Swal from 'sweetalert2'
import axios from 'axios'
import { AgentContext } from './AgentContext'
import { useNavigate } from 'react-router-dom'
import "../CSS/ForSale.css"
import favouriteIcon1 from "../Images/light Blue favourite stroke icon.png"
import favouriteIcon2 from "../Images/Blue favourite stroke icon.png"
import favouriteIcon3 from "../Images/Blue favourite fill icon.png"
import { UserContext } from './UserContext'
import { useSelector } from 'react-redux'
// import Badge from "../Images/verified-badge-with-ribbon-vector-10821278-removebg-preview.png"
import Badge from "../Images/badge5.png"

const FeaturedProperties = () => {
  const navigate = useNavigate();
  const [sponsoredPropertiesArray, setSponsoredPropertiesArray] = useState([]);
  const { propertyDetail, sponsoredProperties, oneAgent } = useContext(AgentContext);
  const { UserToken, favourite, setFavourite} = useContext(UserContext);
  const userUserId = useSelector(state => state.userUserId);

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
      loadingAlert.close();
      setSponsoredPropertiesArray(response.data.data);
      console.log(response.data)
    } catch (error) {
      console.error(error);
      loadingAlert.close();
    }
  };

  useEffect(() => {
    featuredSponsoredProperties();
  }, []);

  const handleNavigate = (_id, agentId) => {
    navigate("/propertydetailpage");
    propertyDetail(_id);
    oneAgent(agentId);
  }

  const [allListingArray, setAllListingArray] = useState([]);
  useEffect(() => {
    allListing();
  }, []);

  // const url1 = `https://homehub-coxc.onrender.com/api/getallhouse`;
  const url1= `https://homehub-coxc.onrender.com/api/getSomeHouses`;
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
      loadingAlert.close();
      setAllListingArray(response.data.data);
    } catch (error) {
      console.error(error);
      loadingAlert.close();
    }
  };

  // Getting user favourites for comparison
  const userToken = useSelector(state => state.userUserToken);
  const [userFavourites, setUserFavourites] = useState([]);
  const url = "https://homehub-coxc.onrender.com/api/user/getAllFavorites";
  // const url = "https://homehub-ten.vercel.app/api/getSomeHouses";

  useEffect(() => {
    handleUserFavourites();
  }, []);

  const handleUserFavourites = async () => {
    const loadingAlert = Swal.fire({
      title: "Loading",
      text: "Please wait...",
      allowOutsideClick: false,
      allowEscapeKey: false,
      showConfirmButton: false
    });

    Swal.showLoading();

    try {
      axios.defaults.headers.common['Authorization'] = `Bearer ${userToken}`;
      const response = await axios.get(url);
      setUserFavourites(response.data.data);
      loadingAlert.close();
    } catch (error) {
      console.error(error);
      // Swal.fire({
      //   icon: "error",
      //   text: error.message,
      //   showConfirmButton: false,
      //   timer: 2000
      // });
      loadingAlert.close();
    }
  };

  const handleAddToFavourite = async (propertyId) => {
    try {
      // Optimistically update the local state
      setUserFavourites(prevFavourites => [...prevFavourites, { _id: propertyId }]);
      // setUserFavourites([...userFavourites, { d }]);
      // console.log(prevFavourites)
      // setUserFavourites([...userFavourites,{ _id: propertyId }])
      
      axios.defaults.headers.common['Authorization'] = `Bearer ${userToken}`;
      await axios.post(`https://homehub-coxc.onrender.com/api/user/addToFavorite/${propertyId}`);
  
      
      Swal.fire({
        icon: "success",
        text: "Added to favourites!",
        showConfirmButton: false,
        timer: 1500
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Could not add to favourites",
        showConfirmButton: false,
        timer: 2000
      });
    }
  };

  const isFavourite = (propertyId) => {
    return userFavourites?.some(fav => fav._id === propertyId);
  };

  return (
    <div className='featureddiv'>
      <div className='featuredHeadingWrap'>
        <h1>Featured Properties</h1>
      </div>
      <div className='ForSaleProperties'>
        {sponsoredPropertiesArray?.slice(-4).map((d) => (
          <div key={d._id} className='ForSaleProperty' style={{position:"relative"}}>
            <div className='ForSalePropertyImgWrap'>
              <img src={d.images[0]} alt='ForSalePropertyImg' />
            </div>
            <div className='ForSalePropertyNamePriceButtonWrap'>
              <div className='ForSalePropertyNameAndPrice'>
                <span className='sponsorTag'>Sponsored</span>
                <h4>{d.type}</h4>
                <p>
                  <span>Category:</span> {d.category === "65e43620b24d39a99a1c06f7" ? "For Sale" : "For Rent"}
                </p>
                <p>
                  <span>Price:</span> N{d.amount}
                </p>
                <p>
                  <span>Location:</span> {d.location}
                </p>
                
              </div>
              <div className='ForSalePropertyButtonsWrap'>
                <button onClick={() => handleNavigate(d._id, d.agentId)}>View</button>
                {userUserId ? (
                  isFavourite(d._id) ? (
                    <img src={favouriteIcon3} alt="FavouriteIcon" />
                  ) : (
                    <img src={favouriteIcon2} alt="FavouriteIcon" onClick={() => handleAddToFavourite(d._id)} />
                  )
                ) : (
                  <img src={favouriteIcon1} alt="FavouriteIcon" onClick={() => Swal.fire({ icon: "warning", text: "Please login to Add to favourites", showConfirmButton: false, timer: 2000 })} />
                )}
              </div>
            </div>
            {d.isVerified===false?<img style={{borderRadius:"50%", width:"30px",height:"30px",position:"absolute",top:"2%",right:"10px"}} src={Badge} alt="verified"/>:""}
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
                  {d.category && <span>Category: {d.category.type}</span>}
                </p>
                <p>
                  <span>Price:</span> N{d.amount}
                </p>
                <p>
                  <span>Location:</span> {d.location}
                </p>
              </div>
              <div className='ForSalePropertyButtonsWrap'>
                <button onClick={() => handleNavigate(d._id, d.agentId)}>View</button>
                {userUserId ? (
                  isFavourite(d._id) ? (
                    <img src={favouriteIcon3} alt="FavouriteIcon" onClick={()=>Swal.fire({icon:"warning",text:"Item is already in favourite",timer:2000,showConfirmButton:false})}/>
                  ) : (
                    <img src={favouriteIcon2} alt="FavouriteIcon" onClick={() => handleAddToFavourite(d._id)} />
                  )
                ) : (
                  <img src={favouriteIcon1} alt="FavouriteIcon" onClick={() => Swal.fire({ icon: "warning", text: "Please login to Add to favourites", showConfirmButton: false, timer: 2000 })} />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProperties;
