import React, { useContext, useState } from 'react'
import '../CSS/AgentPostAProperty.css'
import '../CSS/AgentViewDetailPage.css'
import axios from 'axios'
import { AgentContext } from './AgentContext'
import Swal from 'sweetalert2'

const AgentViewDetailPage = ({handleCloseView,
  Itemid,
  selectedViewItem}) => {
  const {setToggleAgentViewDetailpage}=useContext(AgentContext)

//declaring formData
const [formData,setFormData]=useState({...selectedViewItem})
console.log(formData)

//preview image while updateing form data
const handlePicPreview=(e)=>{
  setPicPreview({...picPreview,[e.target.name]:URL.createObjectURL(e.target.files[0])})
}
const [picPreview,setPicPreview]=useState({})
// console.log(picPreview)


//updateing formData from form
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

    const loadingAlert = Swal.fire({
      title: "Loading",
      text: "Please wait...",
      allowOutsideClick: false,
      allowEscapeKey: false,
      showConfirmButton: false
    });
    Swal.showLoading();

  try{
    const response = await axios.put(url, formDataA, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    console.log(response.data)
    loadingAlert.close()
    Swal.fire({
      icon:"success",
      title:"Successful update",
      showConfirmButton:true,
    })
  }catch(error){
    console.error(error)
    loadingAlert.close()
    Swal.fire({
      icon:"error",
      title:"Something went wrong",
      showConfirmButton:true,
    })
  }
}

//handle Edit On toggle
const [handleEdit,setHandleEdit] = useState(true)

  return (
      <>
    <div className='AgentViewDetailPageWrap'>
    <form className='AgentViewDetailPage' onSubmit={handleSubmit}>
      <h4>Property Detail</h4>
      <div className='AgentPostAPropertyUp'>
        <div className='AgentPostAPropertyUpLeft'>
          <select type="text" 
          name="category" 
          value={formData.category} 
          disabled
          onChange={handleChange} required>
            <option>{formData.category}</option>
            <option value='for sale'>For Sale</option>
            <option value="for rent">For Rent</option>
          </select>
          
          
          <input type="text" 
          value={formData.propertyType} 
          name="propertyType" 
          onChange={handleChange} 
          placeholder='Enter property type' 
          disabled={handleEdit}
          required/>

          <input type="text" 
          value={formData.propertyLocation} 
          name="propertyLocation" 
          onChange={handleChange} 
          placeholder='Enter property location' 
          disabled={handleEdit}
          required/>

          <div className='AmountAndYearly'><input type="text" 
          value={formData.propertyAmount} 
          name="propertyAmount" 
          onChange={handleChange} 
          placeholder='Enter Amount' 
          disabled={handleEdit}
          required/></div> 
        </div>
        <div className='AgentPostAPropertyUpRight'>
            <p>Upload Property Pictures</p>
            <div className='AgentPostAPropertyUpRightUp'>
            
              <label htmlFor="pic1">
                <input type="file" id="pic1"  name="pic1" onChange={handleChange} 
                hidden 
                disabled={handleEdit} 
                />
                <div  className="Pic1">
                  {picPreview.pic1?<img src={picPreview.pic1} alt="pic1"/>:
                  <img src={formData.pic1} alt={formData.pic1}/>}
                  </div>
                </label>

              <label htmlFor="pic2">
                <input type="file" id="pic2" name="pic2" onChange={handleChange} 
                hidden 
                disabled={handleEdit} 
                />
                <div  className="Pic1">{picPreview.pic2?<img src={picPreview.pic2} alt="pic2"/>:
                <img src={formData.pic2} alt={formData.pic2}/>}
                </div>
              </label>

              <label htmlFor="pic3"><input type="file" id="pic3" name="pic3" onChange={handleChange} 
              hidden 
              disabled={handleEdit} 
              />
              <div  className="Pic1">{picPreview.pic3?<img src={picPreview.pic3} alt="pic3"/>:
              <img src={formData.pic3} alt={formData.pic3}/>}
              </div>
              </label>
            </div>

            <div className='AgentPostAPropertyUpRightDown'>
            <label htmlFor="pic4"><input type="file" id="pic4" name="pic4" onChange={handleChange} 
            hidden 
            disabled={handleEdit} 
            />
            <div  className="Pic1">{picPreview.pic4?<img src={picPreview.pic4} alt="pic4"/>:
            <img src={formData.pic4} alt={formData.pic4}/>}
            </div>
            </label>

            <label htmlFor="pic5"><input type="file" id="pic5" name="pic5" onChange={handleChange} 
            hidden 
            disabled={handleEdit} 
            />
            <div  className="Pic1">{picPreview.pic5?<img src={picPreview.pic5} alt="pic5"/>:
            <img src={formData.pic5} alt={formData.pic5}/>}
            </div>
            </label>

            <label htmlFor="pic6"><input type="file" id="pic6" name="pic6" onChange={handleChange} 
            hidden 
            disabled={handleEdit} 
            />
            <div  className="Pic1">{picPreview.pic6?<img src={picPreview.pic6} alt="pic6"/>:
            <img src={formData.pic6} alt={formData.pic6}/>}
            </div>
            </label> 

            </div>
        </div>
      </div>
      <div className='AgentPostAPropertyMid'>
          <input type="text" 
          value={formData.propertyDescription} 
          name="propertyDescription" 
          onChange={handleChange} 
          disabled={handleEdit}
          placeholder='Enter full description of property, terms and conditions, condition, payment mode etc' 
          required/>
      </div>

      <div className='AgentPostAPropertyDown'>
          <p>Check the box to enable Editing >> </p>

          <input type="checkbox" 
          className='Checkbox' 
          onChange={()=>setHandleEdit(!handleEdit)}
          />
          
          <button 
          type="button" 
          onClick={()=>handleCloseView(Itemid)}
          style={{backgroundColor:"white",color:"#0653C8",border:"1px solid #0653C8"}}>Cancel</button>
          <button 
          type='submit'>Update</button>  
      </div>
    </form>
    </div>
      </>
  )
}

export default AgentViewDetailPage