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
import img10 from "../Images/tenth.jpg"




const LandingPage = () => {
  return (
    <div>
      <Header/>
      <div className='hero'>
        <div className='heroright'>
          <h1>Find a comfortable <br /> <span> home </span> for your family.</h1>
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
            <h1>All Listings</h1>
        </div>

        <div className='featured21'>
            <div className='featured31'>
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
                        <button className='add'>Add to favourite</button>
                    </div>
                </div>
            </div>

            <div className='featured31'>
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
                        <button className='add'>Add to favourite</button>
                    </div>
                </div>
            </div>

            <div className='featured31'>
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
                        <button className='add'>Add to favourite</button>
                    </div>
                </div>
            </div>

            <div className='featured31'>
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
                        <button className='add'>Add to favourite</button>
                    </div>
                </div>
            </div>

            <div className='featured31'>
                <div className='featuredimg1'>
                    <img src={img10} alt="" />
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
                        <button className='add'>Add to favourite</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='featured111'>
            <h1>View more</h1>
        </div>
    </div>
      <Footer/>
    </div>
  )
}

export default LandingPage
