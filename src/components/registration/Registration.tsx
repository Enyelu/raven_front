import React, {useState} from 'react'
import "./Registration.scss";
import RegistrationImage from "../images/registrationImage.png"

function Registration() {
    
    const [employeeDetails, setEmployeeDetails] = useState({FirstName:'',MiddleName:'', LastName:'', Password:'', ConfirmPassword:'',
                                                            Age:'', Gender:'', DOB:'', Photo:'', Documents:'', StreetNumber:'', StreetName:'',
                                                            City:'', State:'', Country:'', Email:'', Department:'', Designation:'', Salary:'', StartDate:''});

    function handleSubmit(){
            //PreventDefault();
    } 
    return (
        <div className='main-registration-div'>

            <div className='registration-image-div'>
            <img src={RegistrationImage} className='registration-image' alt='registration image'/>
            </div>

            <form className='registration-form' onSubmit={handleSubmit}>
                <div className='form-title-div'>
                    Sign Up
                </div>
                
                <div className="form-groups">
                    <div className='personal-info'>
                        <div>
                                <h3 className='registration-blocks-title'>Personal Info</h3>
                            <div className='registration-input-div'>
                                <input className='registration-input' type='text' placeholder='First Name'required onChange={e => setEmployeeDetails({...employeeDetails, FirstName: e.target.value})} value={employeeDetails.FirstName} />
                            </div>
                            <div className='registration-input-div'>
                                <input className='registration-input' type='text' placeholder='Middle Name' required onChange={e => setEmployeeDetails({...employeeDetails, MiddleName: e.target.value})} value={employeeDetails.MiddleName} />
                            </div> 
                            <div className='registration-input-div'>
                                <input className='registration-input' type='text' placeholder='Last Name' required onChange={e => setEmployeeDetails({...employeeDetails, LastName: e.target.value})} value={employeeDetails.LastName} />
                            </div>
                            <div className='registration-input-div'>
                                <input className='registration-input' type='email' placeholder='Email' required value='' disabled/>
                            </div>
                            <div className='registration-input-div'>
                                <input className='registration-input' type='password' placeholder='Password' required onChange={e => setEmployeeDetails({...employeeDetails, Password: e.target.value})} value={employeeDetails.Password}/>
                            </div >
                            <div className='registration-input-div'>
                                <input className='registration-input' type='password' placeholder='Confirm Password' required onChange={e => setEmployeeDetails({...employeeDetails, ConfirmPassword: e.target.value})} value={employeeDetails.ConfirmPassword} />
                            </div>
                            <div className='registration-input-div'>
                                <input className='registration-input' type='number' placeholder='Age' required  min="18" max="55" onChange={e => setEmployeeDetails({...employeeDetails, Age: e.target.value})} value={employeeDetails.Age}/>
                            </div>
                            <div className='registration-input-div'>
                                <input className='registration-input' type='text' placeholder='Gender'  required />
                            </div>
                            <div className='registration-input-div'>
                                <input className='registration-input' type='date' placeholder='Birth Date'  required onChange={e => setEmployeeDetails({...employeeDetails, DOB: e.target.value})} value={employeeDetails.DOB}/>
                            </div>
                            <div className='registration-input-div'>
                                <label htmlFor='profile'>Profile Photo</label>
                                <input className='registration-input' id='profile' type='file' placeholder='photo'  required onChange={e => setEmployeeDetails({...employeeDetails, Photo: e.target.value})} value={employeeDetails.Photo}/>
                            </div>
                            <div className='registration-input-div'>
                                <label htmlFor="documents">Documents</label>
                                <input className='registration-input' id='documents' type='file' placeholder='photo'  required multiple onChange={e => setEmployeeDetails({...employeeDetails, Documents: e.target.value})} value={employeeDetails.Documents} />
                            </div>
                        </div>
                       
                    </div>

                    <div className='address-info'>
                        <h3 className='registration-blocks-title'>Address Details</h3>
                        <div className='registration-input-div'>
                            <input className='registration-input' type='text' placeholder='Street Number'  required onChange={e => setEmployeeDetails({...employeeDetails, StreetNumber: e.target.value})} value={employeeDetails.StreetNumber}  />
                        </div >
                        <div className='registration-input-div'>
                            <input className='registration-input' type='text' placeholder='Street Name' required onChange={e => setEmployeeDetails({...employeeDetails, StreetName: e.target.value})} value={employeeDetails.StreetName} />
                        </div>
                        <div className='registration-input-div'>
                            <input className='registration-input' type='text' placeholder='City' required onChange={e => setEmployeeDetails({...employeeDetails, City: e.target.value})} value={employeeDetails.City} />
                        </div >
                        <div className='registration-input-div'>
                            <input className='registration-input' type='text' placeholder='State' required onChange={e => setEmployeeDetails({...employeeDetails, State: e.target.value})} value={employeeDetails.State} />
                        </div>
                        <div>
                            <input className='registration-input' type='text' placeholder='Country' required onChange={e => setEmployeeDetails({...employeeDetails, Country: e.target.value})} value={employeeDetails.Country} />
                        </div>
                    </div>
 
                    <div className='job-description'>
                        <h3 className='registration-blocks-title'>Job Info</h3>
                        <div className='registration-input-div'>
                            <input className='registration-input' type='text' placeholder='Department'  required disabled onChange={e => setEmployeeDetails({...employeeDetails, Department: e.target.value})} value={employeeDetails.Department} />
                        </div>
                        <div className='registration-input-div'>
                            <input className='registration-input' type='text' placeholder='Designation' required disabled onChange={e => setEmployeeDetails({...employeeDetails, Designation: e.target.value})} value={employeeDetails.Designation} />
                        </div>
                        <div className='registration-input-div'>
                            <input  className='registration-input' type='number' placeholder='Salary'  required disabled onChange={e => setEmployeeDetails({...employeeDetails, Salary: e.target.value})} value={employeeDetails.Salary} />
                        </div>
                        <div className='registration-input-div'>
                            <input className='registration-input' type='text' placeholder='Start Date' required disabled onChange={e => setEmployeeDetails({...employeeDetails, StartDate: e.target.value})} value={employeeDetails.StartDate} />
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