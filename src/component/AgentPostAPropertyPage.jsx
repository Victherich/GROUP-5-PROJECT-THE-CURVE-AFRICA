// ############CODE A

// import React, { useState } from 'react'
// import '../CSS/AgentPostAProperty.css'
// import axios from 'axios'
// import { useEffect } from 'react'
// import { useContext } from 'react'
// import { AgentContext } from './AgentContext'
// import Swal from 'sweetalert2'


// const AgentPostAPropertyPage = () => {
//   const {setAgentActiveMenu,AgentActiveMenu,AgentToken}=useContext(AgentContext)
// const [yearly,setYearly]=useState(false)

// console.log(AgentToken)
// const handleForRentAndYearly = (e)=>{
//   if(e.target.value==="for rent"){
//     setYearly(true)
//     setCategory1("65e43670b24d39a99a1c06f9")
//   }else if(e.target.value==="for sale"){
//     setYearly(false)
//     setCategory1("65e43620b24d39a99a1c06f7")
//   }else{
//     setCategory1(null)
//   }
// }
// const [category1,setCategory1]=useState("")

// useEffect(() => {
//   setFormData(prevState => ({
//     ...prevState,
//     categoryId: category1
//   }));
// }, [category1]);

// const [postImg,setPostImg]=useState({
//   pic1:null,
//   pic2:null,
//   pic3:null,
//   pic4:null,
//   pic5:null,
//   pic6:null,
// })

// // console.log(postImg)

// useEffect(() => {
//   setFormData(prevState => ({
//     ...prevState,
//     images: [postImg.pic1, postImg.pic2, postImg.pic3, postImg.pic4, postImg.pic5, postImg.pic6]
//   }));
// }, [postImg]);


// const [formData,setFormData]=useState({
//   categoryId:category1,
//   type:"",
//   location:"",
//   amount:"",
//   description:"",
//   // images:[postImg.pic1,postImg.pic2,postImg.pic3,postImg.pic4,postImg.pic5,postImg.pic6]
//   images:[]
// })

// console.log(formData)


// const handlePicPreview=(e)=>{
//   setPicPreview({...picPreview,[e.target.name]:URL.createObjectURL(e.target.files[0])})
// }


// const handleChange = (e)=>{
//   if(e.target.name.startsWith("pic")){
//     // setPostImg({...postImg,[e.target.name]:e.target.files[0]})
//     setFormData({ ...formData, images: { ...formData.images, [e.target.name]: e.target.files[0] } });
//     handlePicPreview(e)
//   }
//   else{
//     setFormData({...formData,[e.target.name]:e.target.value})
//   }
// }
// const [picPreview,setPicPreview]=useState({})

// // console.log(picPreview)

// const url='https://homehub-coxc.onrender.com/api/postHouse'

// const handleSubmit =async(e)=>{
//   e.preventDefault();
//   axios.defaults.headers.common['Authorization'] = `Bearer ${AgentToken}`;

//   const formDataA = new FormData();
//     for (let key in formData) {
//       if (key === 'images') {
//         for (let i = 0; i < 6; i++) {
//           if (formData.images[`pic${i+1}`]) {
//             formDataA.append('images', formData.images[`pic${i+1}`]);
//           }
//         }
//       } else {
//         formDataA.append(key, formData[key]);
//       }
//     }
   

//     const loadingAlert = Swal.fire({
//       title: "Loading",
//       text: "Please wait...",
//       allowOutsideClick: false,
//       allowEscapeKey: false,
//       showConfirmButton: false
//     });
  
//     Swal.showLoading();
  
//   try{
//     axios.defaults.headers.common['Authorization'] = `Bearer ${AgentToken}`
//     const response = await axios.post(url, formDataA, {
//       headers: {
//         'Content-Type': 'multipart/form-data'
//       }
//     });
//     console.log(response.data)
//     loadingAlert.close();
//     Swal.fire({icon:'success',
//     title:"Post Successful",
//     showConfirmButton:true}).then((result)=>{
//     setAgentActiveMenu('posted property')
//     })

//   }catch(error){
//     console.error(error)
//     loadingAlert.close();
//     Swal.fire({icon:"error",title:"Something went wrong",showConfirmButton:false,timer:2000})
//   }
// }

//   return (
//       <div className='AgentPostAPropertyWrap'>
//           <form className='AgentPostAProperty' onSubmit={handleSubmit}>
//       <h4>Post A Property</h4>
//       <div className='AgentPostAPropertyUp'>
//         <div className='AgentPostAPropertyUpLeft'>
//           <select type="text"  onChange={handleForRentAndYearly} required>
//             <option>--Select Category--</option>
//             <option value='for sale'>For Sale</option>
//             <option value="for rent">For Rent</option>
//           </select>
//           <input type="text" value={formData.type} name="type" onChange={handleChange} placeholder='Enter property type eg. Bungalo' required/>
//           <input type="text" value={formData.location} name="location" onChange={handleChange} placeholder='Enter property location eg. Ikeja' required/>
//           <div className='AmountAndYearly'><input type="text" value={formData.amount} name="amount" onChange={handleChange} placeholder='Enter Amount eg. 5000000' required/>{yearly&&<p>Ensure to enter <strong>yearly Amount</strong></p>}</div> 
//         </div>
//         <div className='AgentPostAPropertyUpRight'>
//             <p>Upload Property Pictures</p>
//             <div className='AgentPostAPropertyUpRightUp'>
//               <label htmlFor="pic1"><input type="file" id="pic1" name="pic1" onChange={handleChange} hidden required/><div  className="Pic1">{picPreview.pic1?<img src={picPreview.pic1} alt="pic1"/>:<p>Click to <br/>upload</p>}</div></label>
//               <label htmlFor="pic2"><input type="file" id="pic2" name="pic2" onChange={handleChange} hidden required/><div  className="Pic1">{picPreview.pic2?<img src={picPreview.pic2} alt="pic2"/>:<p>Click to <br/>upload</p>}</div></label>
//               <label htmlFor="pic3"><input type="file" id="pic3" name="pic3" onChange={handleChange} hidden required/><div  className="Pic1">{picPreview.pic3?<img src={picPreview.pic3} alt="pic3"/>:<p>Click to <br/>upload</p>}</div></label>
//             </div>
//             <div className='AgentPostAPropertyUpRightDown'>
//             <label htmlFor="pic4"><input type="file" id="pic4" name="pic4" onChange={handleChange} hidden required/><div  className="Pic1">{picPreview.pic4?<img src={picPreview.pic4} alt="pic4"/>:<p>Click to <br/>upload</p>}</div></label>
//             <label htmlFor="pic5"><input type="file" id="pic5" name="pic5" onChange={handleChange} hidden required/><div  className="Pic1">{picPreview.pic5?<img src={picPreview.pic5} alt="pic5"/>:<p>Click to <br/>upload</p>}</div></label>
//             <label htmlFor="pic6"><input type="file" id="pic6" name="pic6" onChange={handleChange} hidden required/><div  className="Pic1">{picPreview.pic6?<img src={picPreview.pic6} alt="pic6"/>:<p>Click to <br/>upload</p>}</div></label> 
//             </div>
//         </div>
//       </div>
//       <div className='AgentPostAPropertyMid'>
//           <input type="text" value={formData.description} name="description" onChange={handleChange} placeholder='Enter full description of property, terms and conditions, condition, payment mode etc' required/>
//       </div>
//       <div className='AgentPostAPropertyDown'>
//           {AgentActiveMenu==="post a property"?<button type='button' 
//           onClick={()=>setAgentActiveMenu("account")}
//           style={{backgroundColor: "white",
//             color: "#0653C8",
//             border: "1px solid #0653C8",}}>Cancel</button>:
//             <button type='button' 
//           onClick={()=>setAgentActiveMenu('posted property')}
//           style={{backgroundColor: "white",
//             color: "#0653C8",
//             border: "1px solid #0653C8",}}>Cancel</button>}
//           <button type='submit'>Post</button>
//       </div>
//     </form>
//       </div>
//   )
// }

// export default AgentPostAPropertyPage




// ### CODE B

import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { AgentContext } from './AgentContext';
import '../CSS/AgentPostAProperty.css';
import LoadingUI from './LoadingUI';
import { useSelector } from 'react-redux';

const AgentPostAPropertyPage = () => {
  const { setAgentActiveMenu, AgentActiveMenu, AgentToken, setPostAPropertyShow,loading,setLoading } = useContext(AgentContext);
  const [yearly, setYearly] = useState(false);
  const [category1, setCategory1] = useState('');
  const [categoryError, setCategoryError] = useState('');
  const [typeError, setTypeError] = useState('');
  const [locationError, setLocationError] = useState('');
  const [amountError, setAmountError] = useState('');
  const [imageError,setImagesError]=useState("")
  const [formData, setFormData] = useState({
    categoryId: '',
    type: '',
    location: '',
    amount: '',
    description: '',
    images: []
  });
  const [picPreview, setPicPreview] = useState({});

  const handleForRentAndYearly = (e) => {
    if (e.target.value === "for rent") {
      setYearly(true);
      setCategory1("65e43670b24d39a99a1c06f9");
    } else if (e.target.value === "for sale") {
      setYearly(false);
      setCategory1("65e43620b24d39a99a1c06f7");
    } else {
      setCategory1('');
    }
  };

  useEffect(() => {
    setFormData(prevState => ({
      ...prevState,
      categoryId: category1
    }));
  }, [category1]);

  // const handleChange = (e) => {
  //   if (e.target.name.startsWith("pic")) {
  //     setFormData({ ...formData, images: { ...formData.images, [e.target.name]: e.target.files[0] } });
  //     handlePicPreview(e);
  //   } else {
  //     setFormData({ ...formData, [e.target.name]: e.target.value });
  //   }
  // };

  const handleChange = (e) => {
    if (e.target.name.startsWith('pic')) {
      setFormData({ ...formData, images: { ...formData.images, [e.target.name]: e.target.files[0] } });
      handlePicPreview(e);
    } else if (e.target.name === 'amount') {
      const originalAmount = e.target.value.replace(/\s/g, ''); // Remove existing spaces
      const amount = originalAmount.replace(/\B(?=(\d{3})+(?!\d))/g, ' '); // Add automatic spacing
      setFormData({ ...formData, amount });
    } else {
      // Update only the 'type' field to uppercase
      setFormData({ ...formData, [e.target.name]: e.target.name === 'type' ? e.target.value.toUpperCase() : e.target.value });
    }
  };

  const handlePicPreview = (e) => {
    setPicPreview({ ...picPreview, [e.target.name]: URL.createObjectURL(e.target.files[0]) });
  };


  const AgentUser = useSelector(state=>state.user)
  console.log(AgentUser)

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formValid = true;

    if (!category1) {
      setCategoryError('Please select category');
      formValid = false;
    } else {
      setCategoryError('');
    }

    if (formData.type.length > 16) {
      setTypeError('Type must be maximum of 16 characters');
      formValid = false;
    } else {
      setTypeError('');
    }

    if (formData.location.length > 16) {
      setLocationError('Location must be maximum of 16 characters');
      formValid = false;
    } else {
      setLocationError('');
    }

    if (!/^[\d\s]+$/.test(formData.amount)) {
      setAmountError('Please enter only numbers and spaces for amount');
      formValid = false;
  } else {
      setAmountError('');
  }

    for (let i = 1; i <= 6; i++) {
      if (!formData.images[`pic${i}`]) {
        setImagesError('Please fill all image fields');
        formValid = false;
        break; // Stop checking if one image is missing
      }
    }

    

    if (formValid) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${AgentToken}`;
      const formDataA = new FormData();
      for (let key in formData) {
        if (key === 'images') {
          for (let i = 0; i < 6; i++) {
            if (formData.images[`pic${i + 1}`]) {
              formDataA.append('images', formData.images[`pic${i + 1}`]);
            }
          }
        } else {
          formDataA.append(key, formData[key]);
        }
      }
      
      // const loadingAlert = Swal.fire({
      //   title: "Loading",
      //   text: "Please wait...",
      //   allowOutsideClick: false,
      //   allowEscapeKey: false,
      //   showConfirmButton: false
      // });
  
      // Swal.showLoading();
      setLoading(true)
  
      try {
        // const response = await axios.post('https://homehub-coxc.onrender.com/api/postHouse/', formDataA, {
          const response = await axios.post(`https://homehub-coxc.onrender.com/api/postHouse/${AgentUser._id}`, formDataA, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        console.log(response.data)
        // loadingAlert.close();
        setLoading(false)
        Swal.fire({
          icon: 'success',
          title: "Post Successful",
          showConfirmButton: true,
        }).then((result) => {
          setAgentActiveMenu('posted property');
          
        });

        setPostAPropertyShow(false)
      } catch (error) {
        console.error(error);
        // loadingAlert.close();
        setLoading(false)
        Swal.fire({
          icon: "error",
          text: error.message,
          showConfirmButton: true,
          timer: 2000
        });
      }
    } else {
      window.scrollTo(0, 0); // Scroll to the top of the form if there are errors
    }
  };

  return (
    <div className='AgentPostAPropertyWrap'>
      <form className='AgentPostAProperty' onSubmit={handleSubmit}>
        <h4>Post A Property</h4>
        <div className='AgentPostAPropertyUp'>
          <div className='AgentPostAPropertyUpLeft'>
            <select type="text" onChange={handleForRentAndYearly} required>
              <option>--Select Category--</option>
              <option value='for sale'>For Sale</option>
              <option value="for rent">For Rent</option>
            </select>
            <input type="text" value={formData.type} name="type" onChange={handleChange} placeholder='Enter property type eg. Bungalo' required />
            <input type="text" value={formData.location} name="location" onChange={handleChange} placeholder='Enter property location eg. Ikeja' required />
            <div className='AmountAndYearly'>
              <input type="text" value={formData.amount} name="amount" onChange={handleChange} placeholder='Enter Amount eg. 5000000' required />
              {yearly && <p>Ensure to enter <strong>yearly Amount</strong></p>}
            </div>
            {categoryError && <p className="error-message">{categoryError}</p>}
            {typeError && <p className="error-message">{typeError}</p>}
            {locationError && <p className="error-message">{locationError}</p>}
            {amountError && <p className="error-message">{amountError}</p>}
            {imageError&&<p className="error-message">{imageError}</p>}
          </div>
          <div className='AgentPostAPropertyUpRight'>
            <p>Upload Property Pictures</p>
            <p className="error-message">All image fields must be filled</p>
            <div className='AgentPostAPropertyUpRightUp'>
              <label htmlFor="pic1"><input type="file" id="pic1" name="pic1" onChange={handleChange} hidden required /><div className="Pic1">{picPreview.pic1 ? <img src={picPreview.pic1} alt="pic1" /> : <p>Click to <br />upload</p>}</div></label>
              <label htmlFor="pic2"><input type="file" id="pic2" name="pic2" onChange={handleChange} hidden required /><div className="Pic1">{picPreview.pic2 ? <img src={picPreview.pic2} alt="pic2" /> : <p>Click to <br />upload</p>}</div></label>
              <label htmlFor="pic3"><input type="file" id="pic3" name="pic3" onChange={handleChange} hidden required /><div className="Pic1">{picPreview.pic3 ? <img src={picPreview.pic3} alt="pic3" /> : <p>Click to <br />upload</p>}</div></label>
            </div>
            <div className='AgentPostAPropertyUpRightDown'>
              <label htmlFor="pic4"><input type="file" id="pic4" name="pic4" onChange={handleChange} hidden required /><div className="Pic1">{picPreview.pic4 ? <img src={picPreview.pic4} alt="pic4" /> : <p>Click to <br />upload</p>}</div></label>
              <label htmlFor="pic5"><input type="file" id="pic5" name="pic5" onChange={handleChange} hidden required /><div className="Pic1">{picPreview.pic5 ? <img src={picPreview.pic5} alt="pic5" /> : <p>Click to <br />upload</p>}</div></label>
              <label htmlFor="pic6"><input type="file" id="pic6" name="pic6" onChange={handleChange} hidden required /><div className="Pic1">{picPreview.pic6 ? <img src={picPreview.pic6} alt="pic6" /> : <p>Click to <br />upload</p>}</div></label>
            </div>
          </div>
        </div>
        <div className='AgentPostAPropertyMid'>
          <textarea type="text" value={formData.description} name="description" onChange={handleChange} placeholder='Enter full description of property, terms and conditions, condition, payment mode etc' required />
        </div>
        <div className='AgentPostAPropertyDown'>
          {AgentActiveMenu === "post a property" ? <button type='button'
            // onClick={() => setAgentActiveMenu("account")}
            onClick={()=>setPostAPropertyShow(false)}
            style={{
              backgroundColor: "white",
              color: "#0653C8",
              border: "1px solid #0653C8",
            }}>Cancel</button> :
            <button type='button'
              // onClick={() => setAgentActiveMenu('posted property')}
              onClick={()=>setPostAPropertyShow(false)}
              style={{
                backgroundColor: "white",
                color: "#0653C8",
                border: "1px solid #0653C8",
              }}>Cancel</button>}
          <button type='submit'>Post</button>
        </div>
      </form>
      {loading&&<LoadingUI/>}
    </div>
  );
};

export default AgentPostAPropertyPage;