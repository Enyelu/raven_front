/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import "./EmployeeAccountSetup.scss";
import accountSetupImage from "../images/accountSetupImage.png";
import agent from "../api/Agent";


export default function EmployeeInvite() {
  
  const [formValues, setFormValues] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    role: "",
    email: "",
    userName: "",
    password: "",
    gender: "",
    department: "",
    designation: "",
    salary: 0,
    date: "" 
  }); 

  const handleSubmit = async (e) =>{
    e.preventDefault();

    const response = await agent.RavenAccess.AccountSetup(formValues); 
    
    if(response !== null)
    {
      console.log(response)
    }
  }
  
  const departments = ["Engineering", "Accounts"];
  const designations = [".NET", "Node.js", "Accountant"];

  return (
    <div className="main-div">
      <div className="invite-image-div">
        <img
          src={accountSetupImage}
          className="invite-image"
          alt="registration image"
        />
      </div>

      <form className="invite-form" onSubmit={handleSubmit}>
        <h3 className="invite-block-title">Setup New Employee's Account</h3>

        <div className="invite-input-div">
          <input
            className="invite-input"
            type="text"
            placeholder="First Name"
            onChange={(e) =>
              setFormValues({ ...formValues, firstName: e.target.value })
            }
            value={formValues.firstName}
            required
          />
        </div>

        <div className="invite-input-div">
          <input
            className="invite-input"
            type="text"
            placeholder="Middle Name"
            onChange={(e) =>
              setFormValues({ ...formValues, middleName: e.target.value })
            }
            value={formValues.middleName}
            required
          />
        </div>

        <div className="invite-input-div">
          <input
            className="invite-input"
            type="text"
            placeholder="Last Name"
            onChange={(e) =>
              setFormValues({ ...formValues, lastName: e.target.value })
            }
            value={formValues.lastName}
            required
          />
        </div>

        <div className="invite-input-div">
          <input
            className="invite-input"
            type="text"
            placeholder="Role"
            onChange={(e) =>
              setFormValues({ ...formValues, role: e.target.value })
            }
            value={formValues.role}
            required
          />
        </div>

        <div className="invite-input-div">
          <input
            className="invite-input"
            type="text"
            placeholder="Employee Email"
            onChange={(e) =>
              setFormValues({ ...formValues, email: e.target.value })
            }
            value={formValues.email}
            required
          />
        </div>

        <div className="invite-input-div">
          <input
            className="invite-input"
            type="text"
            placeholder="User Name"
            onChange={(e) =>
              setFormValues({ ...formValues, userName: e.target.value })
            }
            value={formValues.userName}
            required
          />
        </div>

        <div className="invite-input-div">
          <input
            className="invite-input"
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setFormValues({ ...formValues, password: e.target.value })
            }
            value={formValues.password}
            required
          />
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
                      gender: e.target.value
                    })
                  }
                  value={formValues.gender}
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
              setFormValues({ ...formValues, department: e.target.value })
            }
            value={formValues.department}
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
              setFormValues({ ...formValues, designation: e.target.value })
            }
            value={formValues.designation}
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
              setFormValues({ ...formValues, salary: e.target.value })
            }
            value={parseFloat(formValues.salary)}
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
                  setFormValues({ ...formValues, date: e.target.value })
                }
                value={formValues.date.toString()}
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
