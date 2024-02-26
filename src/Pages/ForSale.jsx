// ForSale component
import React, { useContext, useEffect, useState } from 'react';
import '../CSS/ForSale.css';
import SearchIcon from '../Images/searchIcon.png';
import PropertyImg from '../Images/house5 1.png';
import dataForSale from '../component/dataForSale.json';
import axios from 'axios';
import { userContext } from '../component/UserContext';
import { AgentContext } from '../component/AgentContext';
import Header from '../component/Header';
import Footer from '../component/Footer';
import { useNavigate } from 'react-router-dom';

const ForSale = () => {
  const navigate = useNavigate();
  const [forSaleProperties, setForSaleProperties] = useState([]);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');
  const [minFilter, setMinFilter] = useState(null);
  const [maxFilter, setMaxFilter] = useState(null);

  useEffect(() => {
    forSaleData();
  }, []);

  const forSaleData = async () => {
    try {
      // const response = await axios.get(url);
      // setForSaleProperties(response.data);
      setForSaleProperties(dataForSale);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = () => {
    const filteredProperties = dataForSale.filter(
      (property) =>
        property.names.toLowerCase().includes(search.toLowerCase()) ||
        property.location.toLowerCase().includes(search.toLowerCase())
    );
    setForSaleProperties(filteredProperties);
  };

  const handleClearSearch = () => {
    setSearch('');
    setSort('');
    setForSaleProperties(dataForSale);
  };

  useEffect(() => {
    if (sort === 'Highest Price First') {
      setForSaleProperties([...forSaleProperties].sort((a, b) => b.price - a.price));
    } else if (sort === 'Lowest Price First') {
      setForSaleProperties([...forSaleProperties].sort((a, b) => a.price - b.price));
    } else {
      handleSearch();
    }
  }, [sort]);

  const handleNavigate = (id) => {
    navigate(`/propertydetailpage/${id}`); // Passing the id as a parameter in the route
  };

  return (
    <div className='ForSaleWrap'>
      <Header />
      <div className='ForSale'>
        <h1 className='PropertyForSaleHeading'>Properties For Sale</h1>
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
          {forSaleProperties.map((d) => (
            <div className='ForSaleProperty' key={d.id}>
              <div className='ForSalePropertyImgWrap'>
                <img src={PropertyImg} alt='ForSalePropertyImg' />
              </div>
              <div className='ForSalePropertyNamePriceButtonWrap'>
                <div className='ForSalePropertyNameAndPrice'>
                  <h4>{d.names}</h4>
                  <p>
                    <span>Category:</span> {d.category}
                  </p>
                  <p>
                    <span>Price:</span> N{d.price}
                  </p>
                  <p>
                    <span>Location:</span> {d.location}
                  </p>
                </div>
                <div className='ForSalePropertyButtonsWrap'>
                  <button onClick={() => handleNavigate(d.id)}>View</button>
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

export default ForSale;
