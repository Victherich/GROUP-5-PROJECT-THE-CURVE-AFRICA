
import React, { useEffect, useState } from 'react';
import Img1 from '../Images/Screenshot 2023-11-13 163823.png';
import Img2 from '../Images/Screenshot 2023-11-22 165728.png';
import Img3 from '../Images/Screenshot 2023-11-22 165826.png';
import Img4 from '../Images/Screenshot 2023-11-22 165904.png';
import Img5 from '../Images/WhatsApp Image 2023-10-20 at 8.22.55 PM.jpeg';
import '../CSS/FeaturedProperties.css';

const FeaturedProperties = () => {
  const RecentImg = [Img1, Img2, Img3, Img4, Img5];
  const [recentImgIndex, setRecentImgIndex] = useState(0);
//   const [CircleActive,setCircleActive]=useState(null)
const CircleActive = recentImgIndex

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRecentImgIndex((prevIndex) => (prevIndex + RecentImg.length - 1) % RecentImg.length);
    }, 1000); //setRecentImgIndex((prevIndex) => (prevIndex + 1) % RecentImg.length);
                // use it from right to left
    return () => {
      clearInterval(intervalId);
    };
  }, [RecentImg.length]);
console.log(recentImgIndex)

  return (
    <div className='FeaturedProperties'>
        <div className='FeaturedPropertiesImgWrap'>
      {RecentImg.map((img, index) => (
        <img
          key={index}
          src={RecentImg[(recentImgIndex + index) % RecentImg.length]}
          alt='FeaturedPropertiesImg'
        />
      ))}
      
    </div>
    <div className='FeaturedPropertiesCircleWrap'>
        <div className={CircleActive===4?'FeaturedPropertiesCirclesB':"FeaturedPropertiesCirclesA"}></div>
        <div className={CircleActive===3?'FeaturedPropertiesCirclesB':"FeaturedPropertiesCirclesA"}></div>
        <div className={CircleActive===2?'FeaturedPropertiesCirclesB':"FeaturedPropertiesCirclesA"}></div>
        <div className={CircleActive===1?'FeaturedPropertiesCirclesB':"FeaturedPropertiesCirclesA"}></div>
        <div className={CircleActive===0?'FeaturedPropertiesCirclesB':"FeaturedPropertiesCirclesA"}></div>
  </div>
    </div>
  );
};

export default FeaturedProperties;
