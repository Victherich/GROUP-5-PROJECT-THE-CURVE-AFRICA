// ############CODE A

import React, { useState } from 'react'
import '../CSS/AgentPostAProperty.css'
import axios from 'axios'
import { useEffect } from 'react'
import { useContext } from 'react'
import { AgentContext } from './AgentContext'
import Swal from 'sweetalert2'


const AgentPostAPropertyPage = () => {
  const {setAgentActiveMenu,AgentActiveMenu,AgentToken}=useContext(AgentContext)
const [yearly,setYearly]=useState(false)

console.log(AgentToken)
const handleForRentAndYearly = (e)=>{
  if(e.target.value==="for rent"){
    setYearly(true)
    setCategory1("65e43670b24d39a99a1c06f9")
  }else if(e.target.value==="for sale"){
    setYearly(false)
    setCategory1("65e43620b24d39a99a1c06f7")
  }else{
    setCategory1(null)
  }
}
const [category1,setCategory1]=useState("")

useEffect(() => {
  setFormData(prevState => ({
    ...prevState,
    categoryId: category1
  }));
}, [category1]);

const [postImg,setPostImg]=useState({
  pic1:null,
  pic2:null,
  pic3:null,
  pic4:null,
  pic5:null,
  pic6:null,
})

// console.log(postImg)

useEffect(() => {
  setFormData(prevState => ({
    ...prevState,
    images: [postImg.pic1, postImg.pic2, postImg.pic3, postImg.pic4, postImg.pic5, postImg.pic6]
  }));
}, [postImg]);


const [formData,setFormData]=useState({
  categoryId:category1,
  type:"",
  location:"",
  amount:"",
  description:"",
  // images:[postImg.pic1,postImg.pic2,postImg.pic3,postImg.pic4,postImg.pic5,postImg.pic6]
  images:[]
})

console.log(formData)


const handlePicPreview=(e)=>{
  setPicPreview({...picPreview,[e.target.name]:URL.createObjectURL(e.target.files[0])})
}


const handleChange = (e)=>{
  if(e.target.name.startsWith("pic")){
    // setPostImg({...postImg,[e.target.name]:e.target.files[0]})
    setFormData({ ...formData, images: { ...formData.images, [e.target.name]: e.target.files[0] } });
    handlePicPreview(e)
  }
  else{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
}
const [picPreview,setPicPreview]=useState({})

// console.log(picPreview)

const url='https://homehub-coxc.onrender.com/api/postHouse'

const handleSubmit =async(e)=>{
  e.preventDefault();
  axios.defaults.headers.common['Authorization'] = `Bearer ${AgentToken}`;
  // const formDataA=new FormData();
  //   formDataA.append('categoryId',formData.categoryId);
  //   formDataA.append("type",formData.type);
  //   formDataA.append("location",formData.location);
  //   formDataA.append("amount",formData.amount);
  //   formDataA.append("description",formData.description);
  //   formDataA.append("images",formData.images); 

  const formDataA = new FormData();
    for (let key in formData) {
      if (key === 'images') {
        for (let i = 0; i < 6; i++) {
          if (formData.images[`pic${i+1}`]) {
            formDataA.append('images', formData.images[`pic${i+1}`]);
          }
        }
      } else {
        formDataA.append(key, formData[key]);
      }
    }
   

    const loadingAlert = Swal.fire({
      title: "Loading",
      text: "Please wait...",
      allowOutsideClick: false,
      allowEscapeKey: false,
      showConfirmButton: false
    });
  
    Swal.showLoading();
  
  try{
    axios.defaults.headers.common['Authorization'] = `Bearer ${AgentToken}`
    const response = await axios.post(url, formDataA, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    console.log(response.data)
    loadingAlert.close();
    Swal.fire({icon:'success',
    title:"Post Successful",
    showConfirmButton:true}).then((result)=>{
    setAgentActiveMenu('posted property')
    })

  }catch(error){
    console.error(error)
    loadingAlert.close();
    Swal.fire({icon:"error",title:"Something went wrong",showConfirmButton:false,timer:2000})
  }
}

  return (
      <div className='AgentPostAPropertyWrap'>
          <form className='AgentPostAProperty' onSubmit={handleSubmit}>
      <h4>Post A Property</h4>
      <div className='AgentPostAPropertyUp'>
        <div className='AgentPostAPropertyUpLeft'>
          <select type="text"  onChange={handleForRentAndYearly} required>
            <option>--Select Category--</option>
            <option value='for sale'>For Sale</option>
            <option value="for rent">For Rent</option>
          </select>
          <input type="text" value={formData.type} name="type" onChange={handleChange} placeholder='Enter property type' required/>
          <input type="text" value={formData.location} name="location" onChange={handleChange} placeholder='Enter property location' required/>
          <div className='AmountAndYearly'><input type="text" value={formData.amount} name="amount" onChange={handleChange} placeholder='Enter Amount' required/>{yearly&&<p>Ensure to enter <strong>Amount with duration</strong>. Example:1,000,000 Yearly or 1,000,000 Monthly</p>}</div> 
        </div>
        <div className='AgentPostAPropertyUpRight'>
            <p>Upload Property Pictures</p>
            <div className='AgentPostAPropertyUpRightUp'>
              <label htmlFor="pic1"><input type="file" id="pic1" name="pic1" onChange={handleChange} hidden required/><div  className="Pic1">{picPreview.pic1?<img src={picPreview.pic1} alt="pic1"/>:<p>Click to <br/>upload</p>}</div></label>
              <label htmlFor="pic2"><input type="file" id="pic2" name="pic2" onChange={handleChange} hidden required/><div  className="Pic1">{picPreview.pic2?<img src={picPreview.pic2} alt="pic2"/>:<p>Click to <br/>upload</p>}</div></label>
              <label htmlFor="pic3"><input type="file" id="pic3" name="pic3" onChange={handleChange} hidden required/><div  className="Pic1">{picPreview.pic3?<img src={picPreview.pic3} alt="pic3"/>:<p>Click to <br/>upload</p>}</div></label>
            </div>
            <div className='AgentPostAPropertyUpRightDown'>
            <label htmlFor="pic4"><input type="file" id="pic4" name="pic4" onChange={handleChange} hidden required/><div  className="Pic1">{picPreview.pic4?<img src={picPreview.pic4} alt="pic4"/>:<p>Click to <br/>upload</p>}</div></label>
            <label htmlFor="pic5"><input type="file" id="pic5" name="pic5" onChange={handleChange} hidden required/><div  className="Pic1">{picPreview.pic5?<img src={picPreview.pic5} alt="pic5"/>:<p>Click to <br/>upload</p>}</div></label>
            <label htmlFor="pic6"><input type="file" id="pic6" name="pic6" onChange={handleChange} hidden required/><div  className="Pic1">{picPreview.pic6?<img src={picPreview.pic6} alt="pic6"/>:<p>Click to <br/>upload</p>}</div></label> 
            </div>
        </div>
      </div>
      <div className='AgentPostAPropertyMid'>
          <input type="text" value={formData.description} name="description" onChange={handleChange} placeholder='Enter full description of property, terms and conditions, condition, payment mode etc' required/>
      </div>
      <div className='AgentPostAPropertyDown'>
          {AgentActiveMenu==="post a property"?<button type='button' 
          onClick={()=>setAgentActiveMenu("account")}
          style={{backgroundColor: "white",
            color: "#0653C8",
            border: "1px solid #0653C8",}}>Cancel</button>:
            <button type='button' 
          onClick={()=>setAgentActiveMenu('posted property')}
          style={{backgroundColor: "white",
            color: "#0653C8",
            border: "1px solid #0653C8",}}>Cancel</button>}
          <button type='submit'>Post</button>
      </div>
    </form>
      </div>
  )
}

export default AgentPostAPropertyPage


//############CODE B

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

// // console.log(AgentToken)
// const handleForRentAndYearly = (e)=>{
//   if(e.target.value==="for rent"){
//     setYearly(true)
//     setCategory1("65c7c08e64efa9bc3de87364")
//   }else if(e.target.value==="for sale"){
//     setYearly(false)
//     setCategory1("65c7c1c8a356276634186c7d")
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
//   images:[postImg.pic1,postImg.pic2,postImg.pic3,postImg.pic4,postImg.pic5,postImg.pic6]
// })

// console.log(formData)


// const handlePicPreview=(e)=>{
//   setPicPreview({...picPreview,[e.target.name]:URL.createObjectURL(e.target.files[0])})
// }


// const handleChange = (e)=>{
//   if(e.target.name.startsWith("pic")){
//     setPostImg({...postImg,[e.target.name]:e.target.files[0]})
//     handlePicPreview(e)
//   }
//   else{
//     setFormData({...formData,[e.target.name]:e.target.value})
//   }
// }
// const [picPreview,setPicPreview]=useState({})

// // console.log(picPreview)

// const url='https://homehub-coxc.onrender.com/api/postHouse'

// const handleSubmit = async (e) => {
//   e.preventDefault();

//   const formDataA = new FormData();
//   formDataA.append('categoryId', formData.categoryId);
//   formDataA.append('type', formData.type);
//   formDataA.append('location', formData.location);
//   formDataA.append('amount', formData.amount);
//   formDataA.append('description', formData.description);

//   const imagesArray = []; // Array to store all image files

//   // Add non-null images to the imagesArray
//   Object.values(postImg).forEach((image) => {
//     if (image) {
//       imagesArray.push(image);
//     }
//   });

//   // Append the imagesArray to the FormData
//   formDataA.append('images', imagesArray);

//   const loadingAlert = Swal.fire({
//     title: 'Loading',
//     text: 'Please wait...',
//     allowOutsideClick: false,
//     allowEscapeKey: false,
//     showConfirmButton: false,
//   });

//   Swal.showLoading();

//   try {
//     axios.defaults.headers.common['Authorization'] = `Bearer ${AgentToken}`;
//     const response = await axios.post(url, formDataA, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     });
//     console.log(response.data);
//     loadingAlert.close();
//     Swal.fire({
//       icon: 'success',
//       title: 'Post Successful',
//       showConfirmButton: true,
//     }).then((result) => {
//       setAgentActiveMenu('posted property');
//     });
//   } catch (error) {
//     console.error(error);
//     loadingAlert.close();
//     Swal.fire({
//       icon: 'error',
//       title: 'Something went wrong',
//       showConfirmButton: false,
//       timer: 2000,
//     });
//   }
// };

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
//           <input type="text" value={formData.type} name="type" onChange={handleChange} placeholder='Enter property type' required/>
//           <input type="text" value={formData.location} name="location" onChange={handleChange} placeholder='Enter property location' required/>
//           <div className='AmountAndYearly'><input type="text" value={formData.amount} name="amount" onChange={handleChange} placeholder='Enter Amount' required/>{yearly&&<p>Ensure to enter <strong>Amount with duration</strong>. Example:1,000,000 Yearly or 1,000,000 Monthly</p>}</div> 
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


//############CODE C
// import React, { useState } from 'react';
// import '../CSS/AgentPostAProperty.css';
// import axios from 'axios';
// import { useEffect } from 'react';
// import { useContext } from 'react';
// import { AgentContext } from './AgentContext';
// import Swal from 'sweetalert2';

// const AgentPostAPropertyPage = () => {
//   const { setAgentActiveMenu, AgentActiveMenu, AgentToken } = useContext(AgentContext);
//   const [yearly, setYearly] = useState(false);
//   const [category1, setCategory1] = useState('');
//   const [formData, setFormData] = useState({
//     categoryId: '',
//     type: '',
//     location: '',
//     amount: '',
//     description: '',
//     images: [],
//   });

//   console.log(formData)

//   const [picPreview, setPicPreview] = useState({});

//   useEffect(() => {
//     setFormData((prevState) => ({
//       ...prevState,
//       categoryId: category1,
//     }));
//   }, [category1]);

//   useEffect(() => {
//     setFormData((prevState) => ({
//       ...prevState,
//       images: [picPreview.pic1, picPreview.pic2, picPreview.pic3, picPreview.pic4, picPreview.pic5, picPreview.pic6],
//     }));
//   }, [picPreview]);

//   const handleForRentAndYearly = (e) => {
//     if (e.target.value === 'for rent') {
//       setYearly(true);
//       setCategory1('65c7c08e64efa9bc3de87364');
//     } else if (e.target.value === 'for sale') {
//       setYearly(false);
//       setCategory1('65c7c1c8a356276634186c7d');
//     } else {
//       setCategory1(null);
//     }
//   };

//   const handlePicPreview = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setPicPreview((prev) => ({ ...prev, [e.target.name]: reader.result }));
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleChange = (e) => {
//     if (e.target.name.startsWith('pic')) {
//       handlePicPreview(e);
//       setFormData((prev) => ({ ...prev, [e.target.name]: e.target.files[0] }));
//     } else {
//       setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//     }
//   };

//   const url = 'https://homehub-coxc.onrender.com/api/postHouse';

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formDataA = new FormData();
//     formDataA.append('categoryId', formData.categoryId);
//     formDataA.append('type', formData.type);
//     formDataA.append('location', formData.location);
//     formDataA.append('amount', formData.amount);
//     formDataA.append('description', formData.description);
//     formDataA.append('images', formData.images);

//     const loadingAlert = Swal.fire({
//       title: 'Loading',
//       text: 'Please wait...',
//       allowOutsideClick: false,
//       allowEscapeKey: false,
//       showConfirmButton: false,
//     });

//     Swal.showLoading();

//     try {
//       axios.defaults.headers.common['Authorization'] = `Bearer ${AgentToken}`;
//       const response = await axios.post(url, formDataA, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       console.log(response.data);
//       loadingAlert.close();
//       Swal.fire({
//         icon: 'success',
//         title: 'Post Successful',
//         showConfirmButton: true,
//       }).then((result) => {
//         setAgentActiveMenu('posted property');
//       });
//     } catch (error) {
//       console.error(error);
//       loadingAlert.close();
//       Swal.fire({
//         icon: 'error',
//         title: 'Something went wrong',
//         showConfirmButton: false,
//         timer: 2000,
//       });
//     }
//   };

//   return (
//     <div className='AgentPostAPropertyWrap'>
//       <form className='AgentPostAProperty' onSubmit={handleSubmit}>
//         <h4>Post A Property</h4>
//         <div className='AgentPostAPropertyUp'>
//           <div className='AgentPostAPropertyUpLeft'>
//             <select type='text' onChange={handleForRentAndYearly} required>
//               <option>--Select Category--</option>
//               <option value='for sale'>For Sale</option>
//               <option value='for rent'>For Rent</option>
//             </select>
//             <input type='text' value={formData.type} name='type' onChange={handleChange} placeholder='Enter property type' required />
//             <input type='text' value={formData.location} name='location' onChange={handleChange} placeholder='Enter property location' required />
//             <div className='AmountAndYearly'>
//               <input type='text' value={formData.amount} name='amount' onChange={handleChange} placeholder='Enter Amount' required />
//               {yearly && <p>Ensure to enter <strong>Amount with duration</strong>. Example:1,000,000 Yearly or 1,000,000 Monthly</p>}
//             </div>
//           </div>
//           <div className='AgentPostAPropertyUpRight'>
//             <p>Upload Property Pictures</p>
//             <div className='AgentPostAPropertyUpRightUp'>
//               <label htmlFor='pic1'>
//                 <input type='file' id='pic1' name='pic1' onChange={handleChange} hidden required />
//                 <div className='Pic1'>{picPreview.pic1 ? <img src={picPreview.pic1} alt='pic1' /> : <p>Click to <br />upload</p>}</div>
//               </label>
//               <label htmlFor='pic2'>
//                 <input type='file' id='pic2' name='pic2' onChange={handleChange} hidden required />
//                 <div className='Pic1'>{picPreview.pic2 ? <img src={picPreview.pic2} alt='pic2' /> : <p>Click to <br />upload</p>}</div>
//               </label>
//               <label htmlFor='pic3'>
//                 <input type='file' id='pic3' name='pic3' onChange={handleChange} hidden required />
//                 <div className='Pic1'>{picPreview.pic3 ? <img src={picPreview.pic3} alt='pic3' /> : <p>Click to <br />upload</p>}</div>
//               </label>
//             </div>
//             <div className='AgentPostAPropertyUpRightDown'>
//               <label htmlFor='pic4'>
//                 <input type='file' id='pic4' name='pic4' onChange={handleChange} hidden required />
//                 <div className='Pic1'>{picPreview.pic4 ? <img src={picPreview.pic4} alt='pic4' /> : <p>Click to <br />upload</p>}</div>
//               </label>
//               <label htmlFor='pic5'>
//                 <input type='file' id='pic5' name='pic5' onChange={handleChange} hidden required />
//                 <div className='Pic1'>{picPreview.pic5 ? <img src={picPreview.pic5} alt='pic5' /> : <p>Click to <br />upload</p>}</div>
//               </label>
//               <label htmlFor='pic6'>
//                 <input type='file' id='pic6' name='pic6' onChange={handleChange} hidden required />
//                 <div className='Pic1'>{picPreview.pic6 ? <img src={picPreview.pic6} alt='pic6' /> : <p>Click to <br />upload</p>}</div>
//               </label>
//             </div>
//           </div>
//         </div>
//         <div className='AgentPostAPropertyMid'>
//           <input type='text' value={formData.description} name='description' onChange={handleChange} placeholder='Enter full description of property, terms and conditions, condition, payment mode etc' required />
//         </div>
//         <div className='AgentPostAPropertyDown'>
//           {AgentActiveMenu === 'post a property' ? (
//             <button
//               type='button'
//               onClick={() => setAgentActiveMenu('account')}
//               style={{
//                 backgroundColor: 'white',
//                 color: '#0653C8',
//                 border: '1px solid #0653C8',
//               }}
//             >
//               Cancel
//             </button>
//           ) : (
//             <button
//               type='button'
//               onClick={() => setAgentActiveMenu('posted property')}
//               style={{
//                 backgroundColor: 'white',
//                 color: '#0653C8',
//                 border: '1px solid #0653C8',
//               }}
//             >
//               Cancel
//             </button>
//           )}
//           <button type='submit'>Post</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AgentPostAPropertyPage;


//#####CODE DDD

