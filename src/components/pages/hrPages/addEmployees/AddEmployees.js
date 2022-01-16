import React, { Component } from 'react'
import "./addEmployees.css";

export default class AddEmployees extends Component {
    render() {
        return (
            <div className="newUser">

              <h1 className="newUserTitle">Add Employee</h1>

              <form className="newUserhtmlForm">

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
                  <label>User Name</label>
                  <input type="text" placeholder="username" />
                </div>

                <div className="newUserItem">
                  <label>Password</label>
                  <input type="text" placeholder="password" />
                </div>

                <div className="newUserItem">
                  <label>Salary</label>
                  <input type="text" placeholder="salary" />
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
                  <label>Role</label>
                    <select className="newUserSelect" name="active" id="active">
                        <option value="none">none</option>
                        <option value="Super Admin">Super Admin</option>
                        <option value="Admin">Admin</option>
                        <option value="Line Manager">Line Manager</option>
                        <option value="Member">Member</option>
                    </select>
                </div>

                <div className="newUserItem">
                    <label>Start Date</label>
                    <input type="date" placeholder="start date" />
                </div>

                <div className="newUserItem">
                  <label>Gender</label>
                  <div className="newUserGender">
                    <input type="radio" name="gender" id="male" value="Male" />
                    <label htmlFor="male">Male</label>
                    <input type="radio" name="gender" id="female" value="Female" />
                    <label htmlFor="female">Female</label>
                    <input type="radio" name="gender" id="other" value="Other" />
                  <label htmlFor="other">Other</label>
                  </div>
                </div>
       
              </form>

              <button className="newUserButton">Create</button>

            </div>
        )
    }
}