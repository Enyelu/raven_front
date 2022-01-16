import React, { Component } from 'react'
import "./addJobOffering.css";

export default class AddJobOffering extends Component {
    render() {
        return (
            <div className="newUser">

              <h1 className="newUserTitle">Add Qualified Applicant</h1>

              <form className="newUserForm">

                <div className="newUserItem">
                  <label>First Name</label>
                  <input type="text" placeholder="first name" />
                </div>

                <div className="newUserItem">
                  <label>Middle Name</label>
                  <input type="text" placeholder="middle name" />
                </div>

                <div className="newUserItem">
                  <label>Last Name</label>
                  <input type="text" placeholder="last name" />
                </div>

                <div className="newUserItem">
                  <label>Email</label>
                  <input type="email" placeholder="email" />
                </div>

                <div className="newUserItem">
                  <label>Department</label>
                    <select className="newUserSelect" name="active" id="active">
                        <option value="none">none</option>
                        <option value="yes">Accounting</option>
                        <option value="no">Finance</option>
                    </select>
                </div>

                <div className="newUserItem">
                  <label>Designation</label>
                    <select className="newUserSelect" name="active" id="active">
                        <option value="none">none</option>
                        <option value="yes">Accountant</option>
                        <option value="no">HR</option>
                    </select>
                </div>

                <div className="newUserItem">
                  <label>Gender</label>
                  <div className="newUserGender">
                    <input type="radio" name="gender" id="male" value="male" />
                    <label for="male">Male</label>
                    <input type="radio" name="gender" id="female" value="female" />
                    <label for="female">Female</label>
                    <input type="radio" name="gender" id="other" value="other" />
                  <label for="other">Other</label>
                  </div>
                </div>
       
              </form>

              <button className="newUserButton">Create</button>

            </div>
        )
    }
}
