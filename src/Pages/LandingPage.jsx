import React, { useState } from 'react'
import Header from "../component/Header"
import house from "../Images/compaY 1.png"
import FeaturedProperties from '../component/FeaturedProperties'
import "../CSS/LandingPage.css"
import Footer from '../component/Footer'
import img6 from "../Images/sixth.jpg"
import img7 from "../Images/seventh.webp"
import img8 from "../Images/eight.jpg"
import img9 from "../Images/ninth.webp"
import img14 from "../Images/image 14.png"
import img15 from "../Images/image 15.png"
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import axios from 'axios'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AgentContext } from '../component/AgentContext'




const LandingPage = () => {
const {propertyDetail}=useContext(AgentContext)
const navigate =useNavigate()
const handleViewMore = ()=>{
    navigate("/allpropertieslistpage")
}
const [allListingArray,setAllListingArray]=useState([])
useEffect(()=>{
       allListing() 
},[])

const url=`https://homehub-coxc.onrender.com/api/getallhouse`
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
      const response = await axios.get(url);
      console.log(response.data)
      loadingAlert.close();
      setAllListingArray(response.data.data);
      
    } catch (error) {
      console.error(error);
      loadingAlert.close();
    //   Swal.fire({icon:"warning",title:"Something went wrong",timer:2000,showConfirmButton:false})
    }
  };


  const handleNavigate=(_id)=>{
    navigate("/propertydetailpage")
    propertyDetail(_id)
    // {console.log(_id)}
  }

  return (
    <div>
      <Header/>
      <div className='hero'>
        <div className='heroright'>
          <h1>Find a <span>comfortable </span>  <br /> home for your family.</h1>
          <p>You need a home? We are ready to help you find a <br /> suitable home. </p>

          <div  className='herolast'>
            <div className='herolast1'>
              <h2>1500+</h2>
              <p>Listed Properties</p>
            </div>

            <div className='herolast1'> 
              <h2>6500+</h2>
              <p>Happy Customers</p>
            </div>

            <div className='herolast1'>
              <h2>1200+</h2>
              <p>Awards</p>
            </div>
          </div>
        </div>
        <div className='heroleft'>
          <img src={house} alt="" />
        </div>
      </div>
      <FeaturedProperties/>
      <div className='featureddiv1'>
        <div className='featured11'>
            <h1>All Listing</h1>
        </div>

        <div className='featured21'>
            {allListingArray.slice(-4).map((d)=>(
                <div key={d._id} className='featured31'>
                <div className='featuredimg1'>
                    <img src={d.images[0]} alt="" />
                </div>
                <div className='featuredtext1'>
                    <h3>{d.type}</h3>
                    <div className='featuredtextspan1'>
                        {d.category&&<span>Category: {d.category.type}</span>}
                        <span>Price: N{d.amount}</span>
                        <span>Location: {d.location}</span>
                    </div>
                    
                    <div className='featuredbtndiv1'>
                        {/* <Link to={`/propertydetailpage/${d._id}`}>View</Link> */}
                        <button className='view' onClick={()=>handleNavigate(d._id)}>View</button>
                    </div>
                </div>
            </div>
            ))
}
            
            
        </div>
</div>
    <div 
    style={{display:'flex',
            width:"100%"}}
    className='featured111'>
            <h1 
            onClick={handleViewMore}
            style={{cursor:"pointer",
                    color:"#0E9AFF",
                    }}>View more</h1>
        </div><br/><br/>
    <div className='choose'>
        <h1>Why Choose Us?</h1>
        <div className='choose1'>
            <div className='choosediv'>
                <div className='chooseimg'>
                    <img src={img14} alt="" />
                </div>
                <div className='choosetext'>
                    <span>Get your Properties esposed to our <br /> massive network of social <br /> media followers.</span>
                    <p>With our platform your listing for sale or rent <br /> will gain traction and generate leads like never <br /> 
                     before join us and amplify your real estate <br /> success. </p>
                </div>
            </div>
            <div className='choosediv1'>
                <div className='choosetext1'>
                    <span>Get free post sponsorship as an <br /> Agent. </span>
                    <p>As an agent, unlock five days of complimentary <br /> post sponsorship on our platform. <br /> 
                     Reach potential clients effectively and efficiently. <br /> Start boosting your listings today.  </p>
                </div>

                <div className='chooseimg1'>
                    <img src={img15} alt="" />
                </div>
            </div>
        </div>
    </div>
      <Footer/>
    </div>
  )
}

export default LandingPage
