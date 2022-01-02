/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import "./EmployeeAccountSetup.scss";
import accountSetupImage from "../images/accountSetupImage.png";

export default function EmployeeInvite() {
  const [formValues, setFormValues] = useState({
    FirstName: "",
    MiddleName: "",
    LastName: "",
    Role: "",
    Email: "",
    UserName: "",
    Password: "",
    Gender: "",
    Department: "",
    Designation: "",
    Salary: "",
    Date: ""
  }); 

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

      <form className="invite-form">
        <h3 className="invite-block-title">Setup New Employee's Account</h3>

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
            placeholder="Role"
            onChange={(e) =>
              setFormValues({ ...formValues, Role: e.target.value })
            }
            value={formValues.Role}
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
            type="text"
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
            <label className="invite-label" for="department">
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
            <label for="designation">Designation</label>
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
              <label for="start-date-option">Start Date</label>
            </div>
            <div>
              <input
                className="invite-input"
                id="start-date-option"
                type="date"
                placeholder="Start Date"
                required
                onChange={(e) =>
                  setFormValues({ ...formValues, Date: e.target.value })
                }
                value={formValues.Date}
              />
            </div>
          </div>
        </div>
        <button className="invite-button" type="submit">
          Invite
        </button>
      </form>
    </div>
  );
}
