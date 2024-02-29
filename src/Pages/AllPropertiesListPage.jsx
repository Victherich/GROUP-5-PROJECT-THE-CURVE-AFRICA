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

const AllPropertiesListPage = () => {
  const navigate = useNavigate();
  const [forSaleProperties, setForSaleProperties] = useState([]);
  const [forSalePropertiesB, setForSalePropertiesB] = useState([]);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');
  const [minFilter, setMinFilter] = useState(null);
  const [maxFilter, setMaxFilter] = useState(null);
  const {propertyDetail}=useContext(AgentContext)

  const forSaleId = "65c7c1c8a356276634186c7d"

  useEffect(() => {
    forSaleData();
  }, []);


  const url=`https://homehub-coxc.onrender.com/api/getallhouse`
  const forSaleData = async () => {
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
      setForSaleProperties(response.data.data);
      
    } catch (error) {
      console.error(error);
      loadingAlert.close();
      Swal.fire({icon:"warning",title:"Something went wrong",timer:2000,showConfirmButton:false})
    }
  };

  const handleSearch = () => {
    const filteredProperties = forSaleProperties.filter(
      (property) =>
        property.type.toLowerCase().includes(search.toLowerCase()) ||
        property.location.toLowerCase().includes(search.toLowerCase())
    );
    setForSalePropertiesB(filteredProperties);
  };

  const handleClearSearch = () => {
    setSearch('');
    setSort('');
    setForSalePropertiesB(forSaleProperties);
  };

  useEffect(() => {
    if (sort === 'Highest Price First') {
      setForSalePropertiesB([...forSalePropertiesB].sort((a, b) => b.price - a.price));
    } else if (sort === 'Lowest Price First') {
      setForSalePropertiesB([...forSalePropertiesB].sort((a, b) => a.price - b.price));
    } else {
      handleSearch();
    }
  }, [sort]);

  const handleNavigate=(_id)=>{
    navigate("/propertydetailpage")
    propertyDetail(_id)
    // {console.log(_id)}
  }

// ensuring the assignment of forsale propertyB
  useEffect(()=>{
    setForSalePropertiesB(forSaleProperties);
  },[forSaleProperties])

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

          <p>Sort By:</p>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option>-- Select --</option>
            <option value='Lowest Price First'>Lowest Price First</option>
            <option value='Highest Price First'>Highest Price First</option>
          </select>
        </div>
        <div className='ClearSearchWrap'>{search && <button onClick={handleClearSearch}>Clear Search / Sort</button>}</div>
        <div className='Line'></div>
        <div className='HomeHubRedandBlueWrap'>
          <h1>
            HOME<span>HUB</span>
          </h1>
          <p>Your dream home awaits, unlock the door with home hub...</p>
        </div>

        <div className='ForSaleProperties'>
          {forSalePropertiesB.map((d) => (
            <div key={d._id} className='ForSaleProperty'>
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
                  <button onClick={() => handleNavigate(d._id)}>View</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllPropertiesListPage;
