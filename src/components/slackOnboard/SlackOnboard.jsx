//import React from 'react'
import "./SlackOnboard.scss"
import SlackImage from "../images/slack.png"

import React, {useEffect, useState} from 'react'
import agent from "../../app/api/Agent"





export default function SlackOnboard() {

    const [employeeList, setEmployeeList] = useState();
    const people = [{firstName: 'Mike'}, {firstName: 'Kelechi'}]

    localStorage.setItem('people', JSON.stringify(people))
    const value = JSON.parse(localStorage.getItem('people'))
    console.log(value);

    useEffect(async () => {
        const Employees = await agent.RavenAccess.getAllEmployees(1,1);

        if(Employees !== null)
        {
            console.log(Employees);
            console.log(Employees.data.pageItems);

            setEmployeeList(Employees.data.pageItems);
        }
        
    }, [])
    
    localStorage.setItem('EmployeesList', JSON.stringify(employeeList));
    const List = localStorage.getItem('EmployeesList');
    console.log(List);

    return (
        <div className='slack-main-div'>
            <div className='slack-image-div'>
                <img src={SlackImage} className='slack-image' alt='registration image'/>
            </div>
            <form className ="slack-form">
                <h3 className='slack-block-title'>Onboard Slack</h3>
                <div className='slack-input-div'>
                    <input className='slack-input' type='text' placeholder='Employee Email'  required />
                </div>
                <button className='slack-button' type='submit'>Invite</button>
            </form>  

            <div >
             {value.map((person) => (<h1 key={person.firstName}>{person.firstName}</h1>))}
            </div>
         
        </div>
    )
}