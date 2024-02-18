import React, { useEffect, useState } from 'react'
import "../CSS/DetailPage.css"
import DetailImg1 from '../Images/house5 1.png'
import DetailImg2 from '../Images/Screenshot 2023-11-22 165826.png'
import DetailImg3 from '../Images/images (7).jpg'
import DetailImg4 from '../Images/images (1) 2.png'
import DetailImg5 from '../Images/pic1 1.png'
import DetailImg6 from '../Images/woodex6 1.png'




const PropertyDetailPage = () => {
const [ImgDisplay,setImgDisplay]=useState(null)
const [imgMonitor,setImgMonitor]=useState(null)
useEffect(()=>{
  if(imgMonitor===2){
    setImgDisplay(DetailImg2)
  }else if(imgMonitor===3){
    setImgDisplay(DetailImg3)
  }else if(imgMonitor===4){
    setImgDisplay(DetailImg4)
  }else if(imgMonitor===5){
    setImgDisplay(DetailImg5)
  }else if(imgMonitor===6){
    setImgDisplay(DetailImg6)
  }else{
    setImgDisplay(DetailImg1)
  }
},[imgMonitor])

  return (
    <div className='ForSale'> 
      <h1 className='PropertyForSaleHeading'>Property Detail</h1>      
      <div className='Line'></div>
      <div className='HomeHubRedandBlueWrap'>
        <h1>HOME<span>HUB</span></h1>
        <p>Your dream home awaits, unlock the door with home hub...</p>
      </div> 

      <div className='DetailPage'>
        <h2>| 2 bedroom Duplex | N200,000 | Ikeja |</h2><br/>
        <div className='DetailPageUp'>
          <img src={ImgDisplay} alt="DetailImg"/>
        </div>
        <div className='DetailPageMid'>
            <img src={DetailImg1} alt="DetailImg1" onClick={()=>setImgMonitor(1)} />
            <img src={DetailImg2} alt="DetailImg2" onClick={()=>setImgMonitor(2)}  />
            <img src={DetailImg3} alt="DetailImg3" onClick={(e)=>setImgMonitor(3)} />
            <img src={DetailImg4} alt="DetailImg4" onClick={(e)=>setImgMonitor(4)} />
            <img src={DetailImg5} alt="DetailImg5" onClick={(e)=>setImgMonitor(5)} />
            <img src={DetailImg6} alt="DetailImg6" onClick={(e)=>setImgMonitor(6)} />
        </div>
        <p className='ImageClickP'>Click on image to display larger view</p>
        <div className='DetailPageDown'>
            <h4>Full Description</h4>
            <p>"Exquisite 3-bedroom, 2-bathroom haven nestled in a serene neighborhood.
            This charming abode boasts modern amenities and stylish finishes throughout. 
            Enjoy spacious living areas, a sleek kitchen with stainless steel appliances, 
            and a private backyard oasis perfect for relaxation and entertaining. Conveniently 
            located near schools, parks, and shopping centers, it offers both comfort and 
            convenience. Ideal for families or those seeking a peaceful retreat. Don't miss the
             opportunity to make this your dream home. Contact us for a viewing today!"</p>
            <br/>
            <h4>Agent's Contact information:</h4>
            <p><span>Name: </span>John Bright</p>
            <p><span>Company Name: </span>John Bright Real Estates</p> 
            <p><span>Address: </span>No. 2 crescent street lagos state nigeria</p>
            <p><span>Email: </span>Johnbright@gmail.com</p>
            <p><span>Phone no.: </span>0901234567</p>
            <br/>
            <button>Back</button>
        </div>
      </div>
    </div>
  )
}

export default PropertyDetailPage
