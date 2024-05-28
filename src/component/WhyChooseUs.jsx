// import React from 'react'
// import "../CSS/WhyChooseUs.css"

// const WhyChooseUs = () => {
//   return (
//     <div className='WhyChooseUsWrap'>
//         <h1>Our Value Propositions</h1> 
//         <div className='WhyChooseUs'>
//       <div className='WhyChooseUsLeft'>
//         <img src="" alt="ChooseImg"/>
//       </div>
//       <div className='WhyChooseUsRight'>
//             <h2>Title</h2>
//             <p>Description</p>
//       </div>
//     </div>
//     </div>
//   )
// }

// export default WhyChooseUs


// src/ProblemsSolutions.js
import React from 'react';
// import './ProblemsSolutions.css';
import "../CSS/WhyChooseUs.css"
import why1 from "../Images/why1.jpeg"
import why2 from "../Images/why2.jpeg"
import why3 from "../Images/why3.jpeg"
import why4 from "../Images/sol2.jpg"

const problemsSolutionsData = [
  {
    problem: "Enhanced Visibility for Real Estate Agencies",
    solution: "Our platform provides visibility to real estate agencies by allowing them to create an account and list their properties for sale or rent. Potential buyers and tenants can easily view property details and agent information, facilitating direct contact to close deals. Agents can as well sponsor their properties to appear on top level of all our pages",
    image: why1,
  },
  {
    problem: "Scam Prevention Through Agent Verification",
    solution: "We protect potential buyers and tenants from scams by ensuring all agents on our platform are verified. Agents must upload their government registration documents and permits during sign-up, which we verify before allowing them to post properties.",
    image: why3,
  },
  {
    problem: "Stress-free and Streamlined Property Search",
    solution: "Our platform simplifies the property search process, enabling potential buyers and tenants to conveniently find properties that meet their criteria. Users can then contact agents to arrange viewings and finalize deals.",
    image: why2,
  },
  {
    problem: "Sustainable Living",
    solution: "We safeguard our users from acquiring properties that are not sustainable for living by offering a verification system to our agents to have a verified badge on their property after inspection to ensure that there are no technical deformation or environmental threats which can be of a problem to the user.",
    image: why4,
  },
];

const ProblemsSolutions = () => {
  return (
    <div className='WhyContainerWrap'>
      <h1>Our Value Propositions</h1>
        <div className="Whycontainer">
      {problemsSolutionsData.map((item, index) => (
        <div key={index} className="Whycard">
          <img src={item.image} alt="Problem Solution" className="Whyimage"/>
          <div className="Whycontent">
            <h3>{item.problem}</h3>
            <p>{item.solution}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ProblemsSolutions;
