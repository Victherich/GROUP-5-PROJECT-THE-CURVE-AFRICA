import React from 'react'
import "../CSS/LoadingUi.css"
import Logo from "../Images/HomeHub Logo.svg"

const LoadingUI = () => {
  return (
    <div className='LoadingUiWrap'>
      <div className='LoadingUi'>
          <img src={Logo} alt="Loading"/>
          <p>Please Wait...</p>
      </div>
      
    </div>
  )
}

export default LoadingUI
