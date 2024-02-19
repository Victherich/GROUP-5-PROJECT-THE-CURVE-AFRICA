import React from 'react'
import logo from "../Images/image 8.png"

const AgentKYC = () => {
  return (
    <div>
        <div>
            <h2>Agent KYC information</h2>
            <div>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div>
                    <div>
                        <label htmlFor="">Means of identity</label>
                        <select name="">
                            <option value="">select means of identity</option>
                            <option value="">National id card</option>
                            <option value="">Driver licence</option>
                            <option value="">International passport</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="">Upload identity document</label>
                        
                    </div>

                    <div>
                        <label htmlFor="">Upload registration certificate</label>

                    </div>

                    <div>
                        <label htmlFor="">Office Address</label>
                        <input type="text" placeholder='enter office address' />
                    </div>

                    <button> Submit </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AgentKYC