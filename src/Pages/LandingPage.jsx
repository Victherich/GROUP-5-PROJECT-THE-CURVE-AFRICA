import React from 'react'
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




const LandingPage = () => {

const navigate =useNavigate()
const handleViewMore = ()=>{
    navigate("/allpropertieslistpage")
}

  return (
    <div>
      <Header/>
      <div className='hero'>
        <div className='heroright'>
          <h1>Find a <span>comfortable </span>  <br /> home for your family.</h1>
          <p>You need a home? We are ready to help you find a <br /> suitable home. </p>

          <div className='herolast'>
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
            <div className='featured31'>
                {/* <div className='love'>
                    <img src={love} alt="" />
                </div> */}
                <div className='featuredimg1'>
                    <img src={img6} alt="" />
                </div>

                <div className='featuredtext1'>
                    <h3>Park view Estate, Lagos</h3>
                    <div className='featuredtextspan1'>
                        <span>Category: For rent</span>
                        <span>Price: #900,000</span>
                        <span>Location: Lagos</span>
                    </div>
                    <div className='featuredbtndiv1'>
                        <button className='view'>View</button>
                    </div>
                </div>
            </div>

            <div className='featured31'>

                {/* <div className='love'>
                    <img src={love} alt="" />
                </div> */}
                <div className='featuredimg1'>
                    <img src={img7} alt="" />
                </div>

                <div className='featuredtext1'>
                    <h3>Park view Estate, Lagos</h3>
                    <div className='featuredtextspan1'>
                        <span>Category: For rent</span>
                        <span>Price: #900,000</span>
                        <span>Location: Lagos</span>
                    </div>
                    <div className='featuredbtndiv1'>
                        <button className='view'>View</button>
                    </div>
                </div>
            </div>

            <div className='featured31'>
                {/* <div className='love'>
                    <img src={love} alt="" />
                </div> */}
                <div className='featuredimg1'>
                    <img src={img8} alt="" />
                </div>

                <div className='featuredtext1'>
                    <h3>Park view Estate, Lagos</h3>
                    <div className='featuredtextspan1'>
                        <span>Category: For rent</span>
                        <span>Price: #900,000</span>
                        <span>Location: Lagos</span>
                    </div>
                    <div className='featuredbtndiv1'>
                        <button className='view'>View</button>
                    </div>
                </div>
            </div>

            <div className='featured31'>
                {/* <div className='love'>
                    <img src={love} alt="" />
                </div> */}
                <div className='featuredimg1'>
                    <img src={img9} alt="" />
                </div>

                <div className='featuredtext1'>
                    <h3>Park view Estate, Lagos</h3>
                    <div className='featuredtextspan1'>
                        <span>Category: For rent</span>
                        <span>Price: #900,000</span>
                        <span>Location: Lagos</span>
                    </div>
                    <div className='featuredbtndiv1'>
                        <button className='view'>View</button>
                    </div>
                </div>
            </div>

            
        </div>
</div>
    <div className='featured111'>
            <h1 onClick={handleViewMore}>View more</h1>
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
