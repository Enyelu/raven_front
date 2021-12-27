import React from 'react'
import "./Registration.scss";
import RegistrationImage from "../images/registrationImage.png"

function Registration() {
    
    function handleSubmit(){
            //PreventDefault();
    }
    return (
        <div className='main-registration-div'>

            <div className='registration-image-div'>
            <img src={RegistrationImage} className='registration-image' alt='registration image'/>
            </div>

            <form className='registration-form'>
                <h2 className="header-title">Sign Up</h2>
                <div className="form-groups">
                    <div className='personal-info'>
                        <div>
                                <h3 className='registration-blocks-title'>Personal Info</h3>
                            <div className='registration-input-div'>
                                <input className='registration-input' type='text' placeholder='First Name'required />
                            </div>
                            <div className='registration-input-div'>
                                <input className='registration-input' type='text' placeholder='Middle Name' required />
                            </div>
                            <div className='registration-input-div'>
                                <input className='registration-input' type='text' placeholder='Last Name' required />
                            </div>
                            <div className='registration-input-div'>
                                <input className='registration-input' type='email' placeholder='Email' required value='' disabled/>
                            </div>
                            <div className='registration-input-div'>
                                <input className='registration-input' type='password' placeholder='Password' required />
                            </div >
                            <div className='registration-input-div'>
                                <input className='registration-input' type='password' placeholder='Confirm Password' required />
                            </div>
                            <div className='registration-input-div'>
                                <input className='registration-input' type='number' placeholder='Age' required  min="18" max="55"/>
                            </div>
                            <div className='registration-input-div'>
                                <input className='registration-input' type='text' placeholder='Gender'  required />
                            </div>
                            <div className='registration-input-div'>
                                <input className='registration-input' type='date' placeholder='Birth Date'  required />
                            </div>
                            <div className='registration-input-div'>
                                <label htmlFor='profile'>Profile Photo</label>
                                <input className='registration-input' id='profile' type='file' placeholder='photo'  required />
                            </div>
                            <div className='registration-input-div'>
                                <label htmlFor="documents">Documents</label>
                                <input className='registration-input' id='documents' type='file' placeholder='photo'  required multiple/>
                            </div>
                        </div>
                       
                    </div>

                    <div className='address-info'>
                        <h3 className='registration-blocks-title'>Address Details</h3>
                        <div className='registration-input-div'>
                            <input className='registration-input' type='text' placeholder='Street Number'  required  />
                        </div >
                        <div className='registration-input-div'>
                            <input className='registration-input' type='text' placeholder='Street Name' required />
                        </div>
                        <div className='registration-input-div'>
                            <input className='registration-input' type='text' placeholder='City' required />
                        </div >
                        <div className='registration-input-div'>
                            <input className='registration-input' type='text' placeholder='State' required />
                        </div>
                        <div>
                            <input className='registration-input' type='text' placeholder='Country' required />
                        </div>
                    </div>

                    <div className='job-description'>
                        <h3 className='registration-blocks-title'>Job Info</h3>
                        <div className='registration-input-div'>
                            <input className='registration-input' type='text' placeholder='Department'  required value='' disabled />
                        </div>
                        <div className='registration-input-div'>
                            <input className='registration-input' type='text' placeholder='Designation' required value='' disabled />
                        </div>
                        <div className='registration-input-div'>
                            <input  className='registration-input' type='number' placeholder='Salary'  required value='' disabled/>
                        </div>
                        <div className='registration-input-div'>
                            <input className='registration-input' type='text' placeholder='Start Date' required value='' disabled />
                        </div>
                    </div>
                    <button className='register-button' type='submit'>Register</button>
                    </div>
                    <div>
                        <h4 className='contact-us'>Could'nt register ? <a className='click-here' href='#'>Click here</a> to contact us</h4>
                    </div>
                
                </form>
            </div>
    )
}

export default Registration