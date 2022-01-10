import React, {useState}from 'react'
import { useHistory } from 'react-router-dom';
import "./QualifiedApplicants.scss"
import agent from "../api/Agent"
import qualifiedApplicantImage from "../images/qualifiedApplicantImage.png";


function QualifiedApplicants() {
    let history = useHistory();
    const [formValues, setFormValues] = useState({
      FirstName: "",
      MiddleName: "",
      LastName: "",
      Gender: "",
      Email: "",
      Designation: "",
      Department: "",
    }); 
  
    const handleSubmit = async (e) =>{
      e.preventDefault();
      console.log('hello');
      
      if(formValues.Department !== '' && formValues.Designation !== '' && formValues.Gender !== '')
      {
        const response = await agent.RavenAccess.AddProbationalUser(formValues); 
      
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
      <div className="main-div-qualified">
  
        <div className="button-div-qualified">
           <button className="dashboard-button-qualified" onClick={handleBackToDashBoard}>Back To Dashboard</button>
        </div>
        
        <form className="invite-form-qualified" onSubmit={handleSubmit}>
          <h3 className="invite-block-title-qualified">Add Qualified Applicants</h3>
          <div className="invite-image-div-qualified">
          <img
            src={qualifiedApplicantImage}
            className="invite-image-qualified"
            alt="imaeg"
          />
        </div>
  
          <div className="invite-input-div-qualified">
            <input
              className="invite-input-qualified"
              type="text"
              placeholder="First Name"
              onChange={(e) =>
                setFormValues({ ...formValues, FirstName: e.target.value })
              }
              value={formValues.FirstName}
              required
            />
          </div>
  
          <div className="invite-input-div-qualified">
            <input
              className="invite-input-qualified"
              type="text"
              placeholder="Middle Name"
              onChange={(e) =>
                setFormValues({ ...formValues, MiddleName: e.target.value })
              }
              value={formValues.MiddleName}
              required
            />
          </div>
  
          <div className="invite-input-div-qualified">
            <input
              className="invite-input-qualified"
              type="text"
              placeholder="Last Name"
              onChange={(e) =>
                setFormValues({ ...formValues, LastName: e.target.value })
              }
              value={formValues.LastName}
              required
            />
          </div>

          <div className="invite-input-div-qualified">
            <input
              className="invite-input-qualified"
              type="text"
              placeholder="Employee Email"
              onChange={(e) =>
                setFormValues({ ...formValues, Email: e.target.value })
              }
              value={formValues.Email}
              required
            />
          </div>

          <div className="invite-input-div-qualified">
                  <div>
                  <label className="invite-label-qualified">Gender</label>
                  </div>
                  <select
                    className="invite-input-qualified"
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
              <label className="invite-label-qualified" htmlFor="department">
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
              className="invite-input-qualified"
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
  
          <button className="invite-button-qualified" type="submit">
            + Add
          </button>
        </form>
    </div>
    )
}

export default QualifiedApplicants