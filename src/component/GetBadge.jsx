import React from 'react'
import Badge from "../Images/badge5.png"
import { useNavigate } from 'react-router-dom'
import "../CSS/Badg.css"

const GetBadge = () => {
    const navigate = useNavigate()
  return (
    <div className='GetBadge'>
      <img src={Badge} alt="BadgePic" />
      <div>
        <p>As an Agent, get sustainability trust on your properties by getting our verified badge on your properties.</p>
        <div className='SubmitButtonWrap'>
                            <button type="button" onClick={()=>navigate("/contactus")}>Start now !!!</button>
                            </div>
      </div>
    </div>
  )
}

export default GetBadge
