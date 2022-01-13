/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import "./EmployeeAccountSetup.scss";
import accountSetupImage from "../images/accountSetupImage.png";
import agent from "../api/Agent";
import { useHistory } from 'react-router-dom';


export default function EmployeeAccountSetup() {
  
  let history = useHistory();
  const [formValues, setFormValues] = useState({
    FirstName: "",
    MiddleName: "",
    LastName: "",
    Role: "",
    Email: "",
    UserName: "",
    Password: "",
    Gender: "",
    Designation: "",
    Department: "",
    Salary: 0,
    StartDate: "" 
  }); 

  const handleSubmit = async (e) =>{
    e.preventDefault();
    console.log('hello');
    
    if(formValues.Department !== '' && formValues.Designation !== '' && formValues.Gender !== '' && formValues.Role !== '')
    {
      const response = await agent.RavenAccess.AccountSetup(formValues); 
    
      if(response !== null)
      {
        if(response.data === true)
        {
            alert(response.message);
        }
        else
        {
          alert(response.message);
        }
        console.log(response)
      }
    }
    else
    {
      alert('Department, designation and gender must be selected.')
    }
  }

  const handleBackToDashBoard = async (e) =>{
    e.preventDefault();
  
   history.push(`/hr`)
} 
  
  const departments = ["Engineering", "Accounts"];
  const designations = [".NET", "Node.js", "Accountant"];

  return (
    <div className="main-div">

      <div className="button-div">
         <button className="dashboard-button" onClick={handleBackToDashBoard}>Back To Dashboard</button>
      </div>
      
      <form className="invite-form" onSubmit={handleSubmit}>
        <h3 className="invite-block-title">Setup New Employee's Account</h3>
        <div className="invite-image-div">
        <img
          src={accountSetupImage}
          className="invite-image"
          alt="registration image"
        />
      </div>

        <div className="invite-input-div">
          <input
            className="invite-input"
            type="text"
            placeholder="First Name"
            onChange={(e) =>
              setFormValues({ ...formValues, FirstName: e.target.value })
            }
            value={formValues.FirstName}
            required
          />
        </div>

        <div className="invite-input-div">
          <input
            className="invite-input"
            type="text"
            placeholder="Middle Name"
            onChange={(e) =>
              setFormValues({ ...formValues, MiddleName: e.target.value })
            }
            value={formValues.MiddleName}
            required
          />
        </div>

        <div className="invite-input-div">
          <input
            className="invite-input"
            type="text"
            placeholder="Last Name"
            onChange={(e) =>
              setFormValues({ ...formValues, LastName: e.target.value })
            }
            value={formValues.LastName}
            required
          />
        </div>

        <div className="invite-input-div">
          <input
            className="invite-input"
            type="text"
            placeholder="Employee Email"
            onChange={(e) =>
              setFormValues({ ...formValues, Email: e.target.value })
            }
            value={formValues.Email}
            required
          />
        </div>

        <div className="invite-input-div">
          <input
            className="invite-input"
            type="text"
            placeholder="User Name"
            onChange={(e) =>
              setFormValues({ ...formValues, UserName: e.target.value })
            }
            value={formValues.UserName}
            required
          />
        </div>

        <div className="invite-input-div">
          <input
            className="invite-input"
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setFormValues({ ...formValues, Password: e.target.value })
            }
            value={formValues.Password}
            required
          />
        </div>

        <div className="invite-input-div">
                <div>
                <label className="invite-label">Role</label>
                </div>
                <select
                  className="invite-input"
                  onChange={(e) =>
                    setFormValues({ ...formValues, Role: e.target.value })
                  }
                  value={formValues.Role}
                >
                  <option key="Member" value="Member">
                    Member
                  </option>
                  <option key="LineManager" value="LineManager">
                    Line Manager
                  </option>
                  <option key="Admin" value="Admin">
                    Admin
                  </option>
                </select>
              </div>

        <div className="invite-input-div">
                <div>
                <label className="invite-label">Gender</label>
                </div>
                <select
                  className="invite-input"
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      Gender: e.target.value
                    })
                  }
                  value={formValues.Gender}
                >
                  <option key="Male" value="Male">
                    Male
                  </option>
                  <option key="Female" value="Female">
                    Female
                  </option>
                </select>
              </div>

        <div>
          <div>
            <label className="invite-label" htmlFor="department">
              Department
            </label>
          </div>
          <select
            className="invite-input" 
            name="department"
            id="department"
            onChange={(e) =>
              setFormValues({ ...formValues, Department: e.target.value })
            }
            value={formValues.Department}
          >
            {departments.map((department) => (
              <option key={department} value={department}>
                {department}
              </option>
            ))}
          </select>
        </div>

        <div>
          <div>
            <label htmlFor="designation">Designation</label>
          </div>
          <select
            className="invite-input"
            name="designation"
            id="designation"
            onChange={(e) =>
              setFormValues({ ...formValues, Designation: e.target.value })
            }
            value={formValues.Designation}
          >
            {designations.map((designation) => (
              <option key={designation} value={designation}>
                {designation}
              </option>
            ))}
          </select>
        </div>

        <div className="invite-input-div">
          <input
            className="invite-input"
            type="number"
            placeholder="Salary"
            required
            min="30000"
            onChange={(e) =>
              setFormValues({ ...formValues, Salary: e.target.value })
            }
            value={formValues.Salary}
          />
        </div>
        <div className="invite-input-div">
          <div className="start-date">
            <div>
              <label htmlFor="start-date-option">Start Date</label>
            </div>
            <div>
              <input
                className="invite-input"
                id="start-date-option"
                type="date"
                placeholder="Start Date"
                required
                onChange={(e) =>
                  setFormValues({ ...formValues, StartDate: e.target.value })
                }
                value={formValues.StartDate}
              />
            </div>
          </div>
        </div>
        <button className="invite-button" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
