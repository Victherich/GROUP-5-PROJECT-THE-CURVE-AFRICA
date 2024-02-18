import React, { useContext, useState } from 'react'
import '../CSS/AgentPostAProperty.css'
import '../CSS/AgentViewDetailPage.css'
import axios from 'axios'
import { AgentContext } from './AgentContext'


//the page fetches the detail page from the api when view button is clicked and disaplays it 
//on the edit form as initial state but not editable until enable edit check box is checked.
//thyen after editing , we can click update edit button to run the put request and updtae the 
//data. and then re runs the function that fetches the posted data display to update.
// add onChange when enable edit is clicked.

const AgentViewDetailPage = () => {
  const {setToggleAgentViewDetailpage}=useContext(AgentContext)
  const [receivedData,setReceivedData]=useState(null) // recieved data from api
  // console.log(receivedData)

  const ReceivedDataurl = "" // put the received data url here
  const handleReceivedData = async()=>{
    try{
      const response= await axios.get(url)
      console.log(response.data)
      setReceivedData(response.data)
    }catch(error){
      console.error(error)
    }
  }

const [formData,setFormData]=useState({
  category:"",//assign corresponding received data propery value
  propertyType:"", //assign corresponding received data propery value
  propertyLocation:"", //assign corresponding received data propery value
  propertyAmount:"", //assign corresponding received data propery value
  propertyDescription:"", //assign corresponding received data propery value
  pic1:null, //assign corresponding received data propery value
  pic2:null, //assign corresponding received data propery value
  pic3:null, //assign corresponding received data propery value
  pic4:null, //assign corresponding received data propery value
  pic5:null, //assign corresponding received data propery value
  pic6:null, //assign corresponding received data propery value
})
console.log(formData)
//render each initial value to its corresponding form input



//preview image while updateing form data
const handlePicPreview=(e)=>{
  setPicPreview({...picPreview,[e.target.name]:URL.createObjectURL(e.target.files[0])})
}
const [picPreview,setPicPreview]=useState({})
// console.log(picPreview)


//update ing form data to be sent
const handleChange = (e)=>{
  if(e.target.name.startsWith("pic")){
    setFormData({...formData,[e.target.name]:e.target.files[0]})
    handlePicPreview(e)
  }
  else{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
}


//after updating form data. then sent the form to the put api endpoint at onclick of edit
const url="" //url for the put request
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
    const response = await axios.put(url, formDataA, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    console.log(response.data)
  }catch(error){
    console.error(error)
  }
}

//handle Onchange toggle
const [handleOnChange,setHandleOnChange] = useState(false)

  return (
      <>
    <div className='AgentViewDetailPageWrap'>
    <form className='AgentViewDetailPage' onSubmit={handleSubmit}>
      <h4>Property Detail</h4>
      <div className='AgentPostAPropertyUp'>
        <div className='AgentPostAPropertyUpLeft'>
          <select type="text" name="category" value={formData.category} onChange={handleChange} required>
            <option>--Select Category--</option>
            <option value='for sale'>For Sale</option>
            <option value="for rent">For Rent</option>
          </select>
          
          {handleOnChange?<input type="text" value={formData.propertyType} name="propertyType" onChange={handleChange} placeholder='Enter property type' required/>:
          <input type="text" value={formData.propertyType} name="propertyType" placeholder='Enter property type' required/>}
          <input type="text" value={formData.propertyLocation} name="propertyLocation" onChange={handleChange} placeholder='Enter property location' required/>
          <div className='AmountAndYearly'><input type="text" value={formData.propertyAmount} name="propertyAmount" onChange={handleChange} placeholder='Enter Amount' required/></div> 
        </div>
        <div className='AgentPostAPropertyUpRight'>
            <p>Upload Property Pictures</p>
            <div className='AgentPostAPropertyUpRightUp'>
              {/* for this image handling , tenary this inputs with just <img/> tag to show the image before enable editing , 
          then after endbled editing , switch to this input and upload pictures for edit, this is because assigning value to
          this input file tag throw error so we are not assigning value to them, but the value is already on other inputs 
          which works well, so enabling onChnage , enables the editing, while tenarying the Img and file input tag enable editing 
          for the pictures */}
              <label htmlFor="pic1"><input type="file" id="pic1"  name="pic1" onChange={handleChange} hidden required/><div  className="Pic1">{picPreview.pic1?<img src={picPreview.pic1} alt="pic1"/>:<p>Click to <br/>upload</p>}</div></label>
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
          <p>Check the box to enable Editing >> </p><input type="checkbox" className='Checkbox' onChange={()=>setHandleOnChange(!handleOnChange)}/>
          <button type='submit'>Update Edit</button>
          <button>Sponsor</button>  
          <button onClick={()=>setToggleAgentViewDetailpage(false)}>Back</button>
      </div>
    </form>
    </div>
      </>
  )
}

//this input switching should work or other wise i implemet it as two differnet form switching 
//one for without Onchange property , while the other with Onchange property.

export default AgentViewDetailPage