import React, {useState} from 'react'
import "./EmployeeInvite.scss"
import InviteImage from "../images/inviteImage.png"

export default function EmployeeInvite() {
    const [formValues,setFormValues] = useState({Email:'', Department:'', Designation:'', Salary:'', Date:''});
    const departments = ['Engineering', 'Accounts'];
    const designations = ['.NET', 'Node.js', 'Accountant'];
   
    return (
        <div className='main-div'>
            <div className='invite-image-div'>
                <img src={InviteImage} className='invite-image' alt='registration image'/>
            </div>
            <form className ="invite-form">
                <h3 className='invite-block-title'>Invite New Employee</h3>
                <div className='invite-input-div'>
                    <input className='invite-input' type='text' placeholder='Employee Email' onChange={e => setFormValues({...formValues, Email: e.target.value})} value={formValues.Email}  required />
                </div>
                <div>
                    <div>
                        <label className='invite-label' for='department'>Department</label>
                    </div>
                    <select className='invite-input' name='department' id='department' onChange={e => setFormValues({...formValues, Department: e.target.value})} value={formValues.Department}>
                        {departments.map(department => (<option key={department} value={department}>{department}</option>))}
                    </select>
                </div>

                <div>
                    <div>
                        <label for='designation'>Designation</label>
                    </div>
                    <select className='invite-input' name='designation' id='designation' onChange={e => setFormValues({...formValues, Designation: e.target.value})} value={formValues.Designation}>
                        {designations.map(designation => (<option key={designation} value={designation}>{designation}</option>))}
                    </select>
                </div>
                
                <div className='invite-input-div'>
                    <input  className='invite-input' type='number' placeholder='Salary'  required min='30000' onChange={e => setFormValues({...formValues, Salary: e.target.value})} value={formValues.Salary}/>
                </div>
                <div className='invite-input-div'>
                    <div className='start-date'>
                        <div>
                            <label for='start-date-option'>Start Date</label>
                        </div>
                    <div>
                        <input className='invite-input' id='start-date-option' type='date' placeholder='Start Date' required onChange={e => setFormValues({...formValues, Date: e.target.value})} value={formValues.Date} />
                    </div>
                    
                    </div>
                    
                </div>
                <button className='invite-button' type='submit'>Invite</button>
            </form>
        </div>
    )
}