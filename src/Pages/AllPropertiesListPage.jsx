// ForSale component
import React, { useContext, useEffect, useState } from 'react';
import '../CSS/ForSale.css';
import SearchIcon from '../Images/searchIcon.png';
import PropertyImg from '../Images/house5 1.png';
// import dataForSale from '../component/dataForSale.json';
import axios from 'axios';
import { userContext } from '../component/UserContext';
import { AgentContext } from '../component/AgentContext';
import Header from '../component/Header';
import Footer from '../component/Footer';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Badge from "../Images/badge5.png"
import { useSelector } from 'react-redux';
import favouriteIcon1 from "../Images/light Blue favourite stroke icon.png"
import favouriteIcon2 from "../Images/Blue favourite stroke icon.png"
import favouriteIcon3 from "../Images/Blue favourite fill icon.png"
import LoadingUI from '../component/LoadingUI';

const AllPropertiesListPage = () => {
  const navigate = useNavigate();
  const [forSaleProperties, setForSaleProperties] = useState([]);
  const [forSalePropertiesB, setForSalePropertiesB] = useState([]);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');
  const [minFilter, setMinFilter] = useState(null);
  const [maxFilter, setMaxFilter] = useState(null);
  const {propertyDetail,sponsoredProperties,oneAgent,loading,setLoading}=useContext(AgentContext)
  const [sponsoredPropertiesArray,setSponsoredPropertiesArray]=useState([])


  const userUserId = useSelector(state => state.userUserId);

  const forSaleId = "65c7c1c8a356276634186c7d"

  useEffect(() => {
    forSaleData();
  }, []);


  const url=`https://homehub-coxc.onrender.com/api/getallhouse`
  const forSaleData = async () => {
    // const loadingAlert = Swal.fire({
    //   title: "Loading",
    //   text: "Please wait...",
    //   allowOutsideClick: false,
    //   allowEscapeKey: false,
    //   showConfirmButton: false
    // });

    // Swal.showLoading();
    setLoading(true)
    try {
      const response = await axios.get(url);
      console.log(response.data)
      // loadingAlert.close();
      setLoading(false)
      setForSaleProperties(response.data.data);
      
    } catch (error) {
      console.error(error);
      // loadingAlert.close();
      setLoading(false)
      Swal.fire({icon:"warning",title:"Something went wrong",timer:2000,showConfirmButton:false})
    }
  };



//running loading for search
const RunLoadingForSearch = ()=>{
    
  const intervalId1= setTimeout(()=>{
    setLoading(true)
  },100)
  const intervalId2 = setTimeout(()=>{
    setLoading(false)
  },1000)

  return ()=>{clearInterval(intervalId1);clearInterval(intervalId2)}

}

    //search functionality
    const handleSearch = () => {
      if(search.length>=1){
        RunLoadingForSearch();
        const filteredProperties = forSaleProperties.filter(
          (property) =>
            property.type.toLowerCase().includes(search.toLowerCase()) ||
            property.location.toLowerCase().includes(search.toLowerCase())
        );
        setForSalePropertiesB(filteredProperties);
        setResultShow(true)
  
      }else{
        Swal.fire({icon:"warning",text:"Please enter search input",showConfirmButton:false,timer:2000})
      }
    };
  
    //declaring result show state
    const [resultShow,setResultShow]=useState(false)
  
    //handling result number
    const [resultNumber,setResultNumber]=useState(0)
    useEffect(()=>{
        setResultNumber(forSalePropertiesB.length)
    },[forSalePropertiesB])
  
    const handleClearSearch = () => {
      setSearch('');
      setSort('');
      setForSalePropertiesB(forSaleProperties);
      setResultShow(false)
    };
  

  // useEffect(() => {
  //   if (sort === 'Highest Price First') {
  //     setForSalePropertiesB([...forSalePropertiesB].sort((a, b) => b.price - a.price));
  //   } else if (sort === 'Lowest Price First') {
  //     setForSalePropertiesB([...forSalePropertiesB].sort((a, b) => a.price - b.price));
  //   } else {
  //     handleSearch();
  //   }
  // }, [sort]);


  const [reversedProperties, setReversedProperties] = useState([]);

  useEffect(() => {
    setReversedProperties([...forSalePropertiesB].reverse());
  }, [forSalePropertiesB]);

  const handleNavigate=(_id,agentId)=>{
    navigate("/propertydetailpage")
    propertyDetail(_id)
    oneAgent(agentId)
    // {console.log(_id)}
  }

// ensuring the assignment of forsale propertyB
  useEffect(()=>{
    setForSalePropertiesB(forSaleProperties);
  },[forSaleProperties])

const [propertyReverse,setPropertyReverse]=useState([])


//fetching sponsored properties on for sale page
const featuredSponsoredProperties = async () => {
  // const loadingAlert = Swal.fire({
  //   title: "Loading",
  //   text: "Please wait...",
  //   allowOutsideClick: false,
  //   allowEscapeKey: false,
  //   showConfirmButton: false
  // });

  // Swal.showLoading();
  setLoading(true)
  try {
    const response = await axios.get('https://homehub-coxc.onrender.com/api/allSponsored');
    console.log(response.data)
    // loadingAlert.close();
    setLoading(false)
    setSponsoredPropertiesArray(response.data.data);
    
  } catch (error) {
    console.error(error);
    // loadingAlert.close();
    setLoading(false)
   //  Swal.fire({icon:"warning",title:"Something went wrong",timer:2000,showConfirmButton:false})
  }
};

useEffect(()=>{
 featuredSponsoredProperties() 
},[])

// Getting user favourites for comparison
const userToken = useSelector(state => state.userUserToken);
const [userFavourites, setUserFavourites] = useState([]);
// const url = "https://homehub-coxc.onrender.com/api/user/getAllFavorites";
// const url = "https://homehub-ten.vercel.app/api/getSomeHouses";

useEffect(() => {
  handleUserFavourites();
}, []);

const handleUserFavourites = async () => {
  // const loadingAlert = Swal.fire({
  //   title: "Loading",
  //   text: "Please wait...",
  //   allowOutsideClick: false,
  //   allowEscapeKey: false,
  //   showConfirmButton: false
  // });

  // Swal.showLoading();
  setLoading(true)

  try {
    axios.defaults.headers.common['Authorization'] = `Bearer ${userToken}`;
    const response = await axios.get("https://homehub-coxc.onrender.com/api/user/getAllFavorites");
    setUserFavourites(response.data.data);
    // loadingAlert.close();
    setLoading(false)
  } catch (error) {
    console.error(error);
    // Swal.fire({
    //   icon: "error",
    //   text: error.message,
    //   showConfirmButton: false,
    //   timer: 2000
    // });
    // loadingAlert.close();
    setLoading(false)
  }
};

const handleAddToFavourite = async (propertyId) => {
  try {
    // Optimistically update the local state
    setLoading(true)
    // setUserFavourites([...userFavourites, { d }]);
    // console.log(prevFavourites)
    // setUserFavourites([...userFavourites,{ _id: propertyId }])
    
    axios.defaults.headers.common['Authorization'] = `Bearer ${userToken}`;
    await axios.post(`https://homehub-coxc.onrender.com/api/user/addToFavorite/${propertyId}`);

    setUserFavourites(prevFavourites => [...prevFavourites, { _id: propertyId }]);
    setLoading(false)
    Swal.fire({
      icon: "success",
      text: "Added to favourites!",
      showConfirmButton: false,
      timer: 1500
    });
  } catch (error) {
    console.error(error);
    setLoading(false)
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
    <div className='ForSaleWrap'>
      <Header />
      <div className='ForSale'>
        <h1 className='PropertyForSaleHeading'>All Properties</h1>
        <div className='SearchAndFilter'>
          <div className='SearchWrap'>
            <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Enter property name, type or location' />
            <div onClick={handleSearch} className='SearchIconWrap'>
              <img src={SearchIcon} alt='SearchIcon' />
            </div>
          </div>

          {/* <p>Sort By:</p>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option>-- Select --</option>
            <option value='Lowest Price First'>Lowest Price First</option>
            <option value='Highest Price First'>Highest Price First</option>
          </select> */}
        </div>
        <div className='ClearSearchWrap'>{resultShow && <button onClick={handleClearSearch}>Clear Search / Sort</button>}</div>
        {resultShow&&<p style={{margin:"20px",fontSize:"1.3rem",fontWeight:"bold",color:"#0653C8"}}>Search Result: Found ({resultNumber}) Properties</p>}
        <div className='Line' style={{backgroundColor:"#0653C8"}}></div>
        <div className='HomeHubRedandBlueWrap'>
          <h1>
            HOME<span>HUB</span>
          </h1>
          <p>Your dream home awaits, unlock the door with home hub...</p>
        </div>



        <div className='ForSaleProperties'>    
          {sponsoredPropertiesArray.map((d) => (
            <div key={d._id} className='ForSaleProperty' style={{position:"relative"}}>
              <div className='ForSalePropertyImgWrap'>
                <img src={d.images[0]} alt='ForSalePropertyImg' />
              </div>
              <div className='ForSalePropertyNamePriceButtonWrap'>
                <div className='ForSalePropertyNameAndPrice'>
                <p style={{backgroundColor:"#0653C8", color:"white", fontSize:"0.8rem", padding:"2px", borderRadius:"5px"}}>Sponsored</p>
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
                  <button onClick={() => handleNavigate(d._id,d.agentId)}>View</button>
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
              {d.isVerified === true ? <img style={{ borderRadius: "50%", width: "30px", height: "30px", position: "absolute", top: "2%", right: "10px" }} src={Badge} alt="verified" /> : ""}
            </div>
          ))}
        </div>


        <div className='Line' style={{backgroundColor:"#0653C8"}}></div>

        <div className='ForSaleProperties'>
          {reversedProperties.map((d) => (
            <div key={d._id} className='ForSaleProperty' style={{position:"relative"}}>
              <div className='ForSalePropertyImgWrap'>
                <img src={d.images[0]} alt='ForSalePropertyImg' />
              </div>
              <div className='ForSalePropertyNamePriceButtonWrap'>
                <div className='ForSalePropertyNameAndPrice'>
                  <h4>{d.type}</h4>
                  {/* <p>
                    <span>Category:</span> {d.category.type === 'For Rent' ? 'For Rent' : 'For Sale'}
                  </p> */}
                  {d.category && (
              <p>
                <span>Category:</span> {d.category.type}
              </p>
            )}
                  <p>
                    <span>Price:</span> N{d.amount}
                  </p>
                  <p>
                    <span>Location:</span> {d.location}
                  </p>
                </div>
                <div className='ForSalePropertyButtonsWrap'>
                  <button onClick={() => handleNavigate(d._id,d.agentId)}>View</button>
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
              {d.isVerified === true ? <img style={{ borderRadius: "50%", width: "30px", height: "30px", position: "absolute", top: "2%", right: "10px" }} src={Badge} alt="verified" /> : ""}
            </div>
          ))}
        </div>
      </div>
      {loading&&<LoadingUI/>}
      <Footer />
    </div>
  );
};

export default AllPropertiesListPage;
