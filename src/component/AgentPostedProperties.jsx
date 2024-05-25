import React, { useContext, useEffect, useState } from 'react'
import '../CSS/AgentPostedProperties.css'
import data from './data.json'
import axios from 'axios'
import PostedImg from '../Images/woodex6 1.png'
import { AgentContext } from './AgentContext'
import '../CSS/SponsorUI.css'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import AgentViewDetailPage from './AgentViewDetailPage'
import { useSelector } from 'react-redux'

const AgentPostedProperties = () => {
  const navigate = useNavigate()
  const {
    setToggleAgentViewDetailpage,
    toggleAgentViewDetailpage,
    setSponsoredProperties,
    sponsoredProperties,setAgentActiveMenu,Agent,deleteSponsoredFromPostedProperty,handlePostAPropertyShow} = useContext(AgentContext)

// console.log(Agent)

const parsedAgent = typeof Agent === 'string' ? JSON.parse(Agent) : Agent;
// console.log(parsedAgent._id)
const AgentUser = useSelector(state=>state.user)


const [agentPostedProperties,setAgentPostedProperties]=useState([])

    //fetching posted properties from api
  useEffect(() => {
    handleAgentPostedProperties()
  }, [])
  const url =`https://homehub-coxc.onrender.com/api/getAgentHouse/${AgentUser._id}`
  const handleAgentPostedProperties = async () => {
    const loadingAlert = Swal.fire({
      title: "Loading",
      text: "Please wait...",
      allowOutsideClick: false,
      allowEscapeKey: false,
      showConfirmButton: false
    });

    Swal.showLoading();
    try {
      const response = await axios.get(url)
      console.log(response.data)
      setAgentPostedProperties(response.data.houses)
      loadingAlert.close()
    } catch (error) {
      console.error(error)
      loadingAlert.close()
      Swal.fire({icon:"error",title:"Something went wrong",showConfirmButton:false,timer:2000});
    }
  }


// delete posted property
const handleDelete = (_id) => {
  Swal.fire({
    text: 'Are you sure?',
    icon: 'warning',
    confirmButtonText: 'Yes, delete it!',
    showCancelButton: true,
    // confirmButtonColor: '#3085d6',
    // cancelButtonColor: '#d33',
    
  }).then((result) => {
    if (result.isConfirmed) {
      setAgentPostedProperties(agentPostedProperties.filter((e) => e._id !== _id));
      setSponsoredProperties(sponsoredProperties.filter((e)=>e._id!==_id));
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      );
    }
  });

try{
  const response = axios.delete(`https://homehub-coxc.onrender.com/api/deletehouse/${_id}`)

}catch(error){
  console.error(error)
  Swal.fire({icon:"error",title:"Something went wrong",showConfirmButton:false,timer:2000});
}

};


  //open sponsored UI
  const handleOpenSponsorUI = (_id) => {
    const updatedProperties = agentPostedProperties.map(item => {
      if (item._id === _id) {
        return { ...item, open: true }
      }
      return item
    })
    setAgentPostedProperties(updatedProperties)
  }

//close sponsored UI
  const handleCloseSponsorUI =(_id)=>{
    const updatedProperties = agentPostedProperties.map((item)=>{
      if(item._id===_id){
        return {...item,open:false}
      }
      return item
    })
    setAgentPostedProperties(updatedProperties)
  }

//sponsored payment logic
const [amountValue,setAmountValue]=useState(null)
const [isCheckedA,setIsCheckedA]=useState(false)
const [isCheckedB,setIsCheckedB]=useState(false)
const [isCheckedC,setIsCheckedC]=useState(false)
useEffect(()=>{
  if(isCheckedA===true){
    setAmountValue(10000)
  }else if(isCheckedB===true){
    setAmountValue(15000)
  }else if(isCheckedC===true){
    setAmountValue(20000)
  }else{
    setAmountValue(null)
  }
},[isCheckedA,isCheckedB,isCheckedC])
// console.log(amountValue)
function payKorapay(_id) {
  console.log(_id)
  const key = `key${Math.random()}`;
  if (amountValue == null) {
    // alert("Please select a category you wish to pay for by checking one of the boxes");
    Swal.fire({
      icon:"warning",
      text:"Please select a category you wish to pay for by checking one of the boxes",
    })
    return; // Exit the function early if amountValue is null
  }
  try {
    window.Korapay.initialize({
      key: "pk_test_eR5xsWZRG1XfPVe8JvDJyHQWR1nieyBU2DaE5dBm", // replace with the api key you generated
      reference: key,
      amount: amountValue, // make dynamic
      currency: "NGN", // you can make dynamic
      customer: {
        name: "John Doe", // you can make dynamic
        email: "john@doe.com" // you can make dynamic
      },
      onClose: function () {
        // Handle when modal is closed
      },
      onSuccess: function (data) {
        // Handle when payment is successful
        console.log(data);
        console.log(_id)
        handleSponsor(_id);
        handleSponsorBackend(_id,amountValue);

       
      setAgentActiveMenu("sponsored property");
      },

      onFailed: function (data) {
        // Handle when payment fails
        alert("Failed transaction");
        console.log(data);
      }
    });
  } catch (error) {
    console.error(error);
  }
}

//adding from posted to sponsored
const handleSponsor = (_id) => {
  const propertyToSponsor = agentPostedProperties.find((e) => e._id === _id);
  if (!propertyToSponsor) {
    console.error("Property not found.");
    return;
  }

  setSponsoredProperties([...sponsoredProperties, propertyToSponsor]);
  console.log(_id)
  // localStorage.setItem("sponsoredProperties",JSON.stringify([...sponsoredProperties, propertyToSponsor]))
};

const handleSponsorBackend = async(_id,amountValue)=>{
  console.log(_id)
  try {
    const response = await axios.put(`https://homehub-coxc.onrender.com/api/sponsorPost/${_id}`);
    console.log(response.data);

    Swal.fire({icon:"success",
    text:`Paid NGN ${amountValue} for sponsorship of post id no.: ${_id}`,
    showConfirmButton:true,
    allowOutsideClick: false,
    allowEscapeKey: false,
  });
    // getSponsored()
  } catch (error) {
    console.error(error);
    Swal.fire({ icon: "error", title: "Something went wrong", showConfirmButton: false, timer: 2000 });
  }
}


// declaring selected View item
const [selectedViewItem,setSelectedViewItem]=useState({}) 

//open view propert UI
const handleOpenView = (_id) => {
  const updatedProperties = agentPostedProperties.map(item => {
    if (item._id === _id) {
      return { ...item, openView: true }
    }
    return item
  })
  setAgentPostedProperties(updatedProperties)

  // finidg selected view item and updated its state
  const viewItem=agentPostedProperties.find((e)=>e._id===_id)
  setSelectedViewItem(viewItem)
  }
 

//close view property
const handleCloseView = (_id)=>{
  const updatedProperties=agentPostedProperties.map((item)=>{
    if(item._id===_id){
      return{...item,openView:false}
    }
    return item
  })
  setAgentPostedProperties(updatedProperties)
}

// const getSponsored = async()=>{
//   const loadingAlert = Swal.fire({
//     title: "Loading",
//     text: "Please wait...",
//     allowOutsideClick: false,
//     allowEscapeKey: false,
//     showConfirmButton: false
//   });

//   Swal.showLoading();
//   try{
//     const response=await axios.get('https://homehub-coxc.onrender.com/api/allSponsoredPost')
//     console.log(response.data)
//     loadingAlert.close()
//   }catch(error){
//     console.error(error)
//     loadingAlert.close()
//     // Swal.fire({icon:"warning",title:"Something went wrong",timer:2000,showConfirmButton:false})
//   }
// }





  return (
    <div className='PostedPropertiesWrap'>
      <div className='PostedPropertiesTitle'>
      <h4>Posted Properties</h4><button 
      // onClick={()=>setAgentActiveMenu("posted a property2")
        onClick={handlePostAPropertyShow}
      
      className='Makeanewpost'>+ Make a new Post</button>
      </div>
      <div className='PostedProperties'>
        {agentPostedProperties.map((d) => (
          <div key={d._id} className='ForSaleProperty'>
            <div className='ForSalePropertyImgWrap'>
              <img src={d.images[0]} alt="ForSalePropertyImg" />
            </div>
            <div className='ForSalePropertyNamePriceButtonWrap'>
              <div className='ForSalePropertyNameAndPrice'>
                <h4>{d.type}</h4>
                <p><span>Category:</span> {d.category==="65c7c1c8a356276634186c7d"?"For Sale":"For Rent"}</p>
                <p><span>Price:</span> N {d.amount}</p>
                <p><span>Location:</span> {d.location}</p>
              </div>
              <div className='ForSalePropertyButtonsWrap'>
                {/* <button onClick={()=>handleOpenView(d._id)}>View</button> */}
                <button onClick={() => handleDelete(d._id)}>Delete</button>
                <button onClick={() => handleOpenSponsorUI(d._id)}>Sponsor</button>
              </div>
            </div>
            {d.openView && <AgentViewDetailPage 
            handleCloseView={handleCloseView} 
            Itemid={d.id}
            selectedViewItem={selectedViewItem}
            />}
            {d.open && <div className='SponsorUIWrap'>
              <div className='SponsorUI'>
                <h3>Sponsorship Categories</h3>
                <p>Please check one of the check boxes to select a category and then click the corresponding Pay button</p>
                <div className='SponsorUIA'>
                  <input 
                  type="checkbox"
                  checked={isCheckedA}
                  onChange={()=>{
                    setIsCheckedA(!isCheckedA);
                    setIsCheckedB(false);
                    setIsCheckedC(false);
                    }} />

                  <p><span>One Week Blitz:</span> Elevate your property's visibility with a week of prime sponsorship
                    for just <strong>10,000 Naira</strong> and capture more eyes on your listing</p>
                  
                </div>
                <div className='SponsorUIA'>
                  <input 
                  type="checkbox"
                  checked={isCheckedB}
                  onChange={()=>{
                    setIsCheckedB(!isCheckedB);
                    setIsCheckedA(false);
                    setIsCheckedC(false);
                  }}
                  />
                  <p><span>Double Exposure Delight:</span>  Extend your property's spotlight for two
                   weeks at an unbeatable value of <strong>15,000 Naira</strong>, maximizing your reach and generating
                    more leads.</p>
                  
                </div>
                <div className='SponsorUIA'>
                  <input 
                  type="checkbox"
                  checked={isCheckedC}
                  onChange={()=>{
                    setIsCheckedA(false);
                    setIsCheckedB(false);
                    setIsCheckedC(!isCheckedC);
                  }} />
                  <p><span>Month-long Showcase:</span>  Secure long-term success for your listing with a 
                  full month of premium sponsorship for only <strong>20,000 Naira</strong>, dominating the market and 
                  ensuring maximum exposure.</p>
                  
                </div>
                <div className='SponsorUIButtonswrap'>
                <button onClick={()=>handleCloseSponsorUI(d._id)}>Cancel</button>
                <button onClick={()=>{payKorapay(d._id)}}>Pay</button>
                {/* {console.log(d._id)} */}
                {/* <button onClick={()=>handleSponsor(d.id)}>Test add</button> */}
                </div>
              </div>
            </div>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AgentPostedProperties
