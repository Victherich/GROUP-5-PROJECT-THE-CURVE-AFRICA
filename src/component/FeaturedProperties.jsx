
import React from 'react'
import "../CSS/FeaturedProperties.css"
import img1 from "../Images/first.jpg"
import img2 from "../Images/second.jpg"
import img3 from "../Images/third.jpg"
import img4 from "../Images/fourth.jpeg"
// import img5 from "../Images/fifth.jpg"
// import love from "../Images/love.png"

const FeaturedProperties = () => {
  return (
    <div className='featureddiv'>
        <div className='featured1'>
            <h1>Featured Properties</h1>
        </div>

        <div className='featured2'>
            <div className='featured3'>
                {/* <div className='love'>
                    <img src={love} alt="" />
                </div> */}
                <div className='featuredimg'>
                    <img src={img1} alt="" />
                </div>

                <div className='featuredtext'>
                    <h3>Park view Estate, Lagos</h3>
                    <div className='featuredtextspan'>
                        <span>Category: For rent</span>
                        <span>Price: #900,000</span>
                        <span>Location: Lagos</span>
                    </div>
                    <div className='featuredbtndiv'>
                        <button className='view'>View</button>
                    </div>
                </div>
            </div>

            <div className='featured3'>

                {/* <div className='love'>
                    <img src={love} alt="" />
                </div> */}
                <div className='featuredimg'>
                    <img src={img2} alt="" />
                </div>

                <div className='featuredtext'>
                    <h3>Park view Estate, Lagos</h3>
                    <div className='featuredtextspan'>
                        <span>Category: For rent</span>
                        <span>Price: #900,000</span>
                        <span>Location: Lagos</span>
                    </div>
                    <div className='featuredbtndiv'>
                        <button className='view'>View</button>
                    </div>
                </div>
            </div>

            <div className='featured3'>
                {/* <div className='love'>
                    <img src={love} alt="" />
                </div> */}
                <div className='featuredimg'>
                    <img src={img3} alt="" />
                </div>

                <div className='featuredtext'>
                    <h3>Park view Estate, Lagos</h3>
                    <div className='featuredtextspan'>
                        <span>Category: For rent</span>
                        <span>Price: #900,000</span>
                        <span>Location: Lagos</span>
                    </div>
                    <div className='featuredbtndiv'>
                        <button className='view'>View</button>
                    </div>
                </div>
            </div>

            <div className='featured3'>
                {/* <div className='love'>
                    <img src={love} alt="" />
                </div> */}
                <div className='featuredimg'>
                    <img src={img4} alt="" />
                </div>

                <div className='featuredtext'>
                    <h3>Park view Estate, Lagos</h3>
                    <div className='featuredtextspan'>
                        <span>Category: For rent</span>
                        <span>Price: #900,000</span>
                        <span>Location: Lagos</span>
                    </div>
                    <div className='featuredbtndiv'>
                        <button className='view'>View</button>
                    </div>
                </div>
            </div>

            
        </div>
</div>
)}
export default FeaturedProperties