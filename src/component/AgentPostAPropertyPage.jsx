import React, { useState } from 'react'
import '../CSS/AgentPostAProperty.css'
import axios from 'axios'
import { useEffect } from 'react'
import { useContext } from 'react'
import { AgentContext } from './AgentContext'

const AgentPostAPropertyPage = () => {
  const {setAgentActiveMenu}=useContext(AgentContext)
const [yearly,setYearly]=useState(false)


const handleForRentAndYearly = (e)=>{
  if(e.target.value==="for rent"){
    setYearly(true)
    setCategory1(5745694659869)
  }else if(e.target.value==="for sale"){
    setYearly(false)
    setCategory1(88675897698795876)
  }else{
    setCategory1(null)
  }
}
const [category1,setCategory1]=useState(null)

useEffect(() => {
  setFormData(prevState => ({
    ...prevState,
    category: category1
  }));
}, [category1]);


const [formData,setFormData]=useState({
  category:category1, // pass the id here based on what is selected
  propertyType:"",
  propertyLocation:"",
  propertyAmount:"",
  propertyDescription:"",
  pic1:null,
  pic2:null,
  pic3:null,
  pic4:null,
  pic5:null,
  pic6:null,
})

console.log(formData)


const handlePicPreview=(e)=>{
  setPicPreview({...picPreview,[e.target.name]:URL.createObjectURL(e.target.files[0])})
}


const handleChange = (e)=>{
  if(e.target.name.startsWith("pic")){
    setFormData({...formData,[e.target.name]:e.target.files[0]})
    handlePicPreview(e)
  }
  else{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
}
const [picPreview,setPicPreview]=useState({})

// console.log(picPreview)

const url=""
const handleSubmit =async(e)=>{
  e.preventDefault();
  const formDataA=new FormData();
    formDataA.append('category',formData.category);
    formDataA.append("propertyType",formData.propertyType);
    formDataA.append("propertyLocation",formData.propertyLocation)
    formDataA.append('propertyAmount',formData.propertyAmount);
    formDataA.append('propertyDescription',formData.propertyDescription);
    formDataA.append("pic1",formData.pic1);
    formDataA.append("pic2",formData.pic2);
    formDataA.append('pic3',formData.pic3);
    formDataA.append("pic4",formData.pic4);
    formDataA.append("pic5",formData.pic5);
    formDataA.append("pic6",formData.pic6);
  
  try{
    const response = await axios.post(url, formDataA, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    console.log(response.data)
  }catch(error){
    console.error(error)
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
          <input type="text" value={formData.propertyType} name="propertyType" onChange={handleChange} placeholder='Enter property type' required/>
          <input type="text" value={formData.propertyLocation} name="propertyLocation" onChange={handleChange} placeholder='Enter property location' required/>
          <div className='AmountAndYearly'><input type="text" value={formData.propertyAmount} name="propertyAmount" onChange={handleChange} placeholder='Enter Amount' required/>{yearly&&<p>Ensure to enter <strong>Amount with duration</strong>. Example:1,000,000 Yearly or 1,000,000 Monthly</p>}</div> 
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
          <input type="text" value={formData.propertyDescription} name="propertyDescription" onChange={handleChange} placeholder='Enter full description of property, terms and conditions, condition, payment mode etc' required/>
      </div>
      <div className='AgentPostAPropertyDown'>
          <button type='button' 
          onClick={()=>setAgentActiveMenu("account")}
          style={{backgroundColor: "white",
            color: "#0653C8",
            border: "1px solid #0653C8",}}>Cancel</button>
          <button type='submit'>Post</button>
      </div>
    </form>
      </div>
  )
}

export default AgentPostAPropertyPage