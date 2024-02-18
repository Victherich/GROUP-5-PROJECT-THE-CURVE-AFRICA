
// import React, { useEffect, useState } from 'react';
// import Img1 from '../Images/Screenshot 2023-11-13 163823.png';
// import Img2 from '../Images/Screenshot 2023-11-22 165728.png';
// import Img3 from '../Images/Screenshot 2023-11-22 165826.png';
// import Img4 from '../Images/Screenshot 2023-11-22 165904.png';
// import Img5 from '../Images/WhatsApp Image 2023-10-20 at 8.22.55 PM.jpeg';
// import '../CSS/FeaturedProperties.css';

// const FeaturedProperties = () => {
//   const RecentImg = [Img1, Img2, Img3, Img4, Img5];
//   const [recentImgIndex, setRecentImgIndex] = useState(0);
// //   const [CircleActive,setCircleActive]=useState(null)
// const CircleActive = recentImgIndex

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setRecentImgIndex((prevIndex) => (prevIndex + RecentImg.length - 1) % RecentImg.length);
//     }, 1000); //setRecentImgIndex((prevIndex) => (prevIndex + 1) % RecentImg.length);
//                 // use it from right to left
//     return () => {
//       clearInterval(intervalId);
//     };
//   }, [RecentImg.length]);
// console.log(recentImgIndex)

//   return (
//     <div className='FeaturedProperties'>
//         <div className='FeaturedPropertiesImgWrap'>
//       {RecentImg.map((img, index) => (
//         <img
//           key={index}
//           src={RecentImg[(recentImgIndex + index) % RecentImg.length]}
//           alt='FeaturedPropertiesImg'
//         />
//       ))}
      
//     </div>
//     <div className='FeaturedPropertiesCircleWrap'>
//         <div className={CircleActive===4?'FeaturedPropertiesCirclesB':"FeaturedPropertiesCirclesA"}></div>
//         <div className={CircleActive===3?'FeaturedPropertiesCirclesB':"FeaturedPropertiesCirclesA"}></div>
//         <div className={CircleActive===2?'FeaturedPropertiesCirclesB':"FeaturedPropertiesCirclesA"}></div>
//         <div className={CircleActive===1?'FeaturedPropertiesCirclesB':"FeaturedPropertiesCirclesA"}></div>
//         <div className={CircleActive===0?'FeaturedPropertiesCirclesB':"FeaturedPropertiesCirclesA"}></div>
//   </div>
//     </div>
//   );
// };

// export default FeaturedProperties;

import React, { useEffect, useState } from 'react';
import Img1 from '../Images/Screenshot 2023-11-13 163823.png';
import Img2 from '../Images/Screenshot 2023-11-22 165728.png';
import Img3 from '../Images/Screenshot 2023-11-22 165826.png';
import Img4 from '../Images/Screenshot 2023-11-22 165904.png';
import Img5 from '../Images/WhatsApp Image 2023-10-20 at 8.22.55 PM.jpeg';
import '../CSS/FeaturedProperties.css';

const CarouselToRight = () => {
  const RecentImg = [
    { id: 1, name: "Image 1", price: "$10", location: "New York", url: Img1 },
    { id: 2, name: "Image 2", price: "$15", location: "London", url: Img2 },
    { id: 3, name: "Image 3", price: "$12", location: "Paris", url: Img3 },
    { id: 4, name: "Image 4", price: "$20", location: "Tokyo", url: Img4 },
    { id: 5, name: "Image 5", price: "$18", location: "Sydney", url: Img5 }
  ];

  const [recentImgIndex, setRecentImgIndex] = useState(0);
  const CircleActive = recentImgIndex;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRecentImgIndex(prevIndex => (prevIndex + 1) % RecentImg.length);
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className='FeaturedProperties'>
      <div className='FeaturedPropertiesImgWrap'>
        {RecentImg.map((img, index) => (
          <div
            key={img.id}
            style={{
              display: index >= recentImgIndex ? 'block' : 'none',
              transform: `translateX(${(index - recentImgIndex) * 10}%)` // Adjust the translation factor (80%) to reduce space between objects
            }}
          >
            <img src={img.url} alt={`RecentImg ${img.id}`} />
            <p>Name: {img.name}</p>
            <p>Price: {img.price}</p>
            <p>Location: {img.location}</p>
          </div>
        ))}
      </div>
      <div className='CircleWrap'>
        {RecentImg.map((img, index) => (
          <div key={img.id} className={CircleActive === index ? 'CirclesB' : 'CirclesA'}></div>
        ))}
      </div>
    </div>
  );
};

export default CarouselToRight;
