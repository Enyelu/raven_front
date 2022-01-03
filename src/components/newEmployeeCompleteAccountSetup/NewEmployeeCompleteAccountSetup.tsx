/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import "./NewEmployeeCompleteAccountSetup.scss";
import CompleteRegistrationImage from "../images/CompleteRegistrationImage.png";

function Registration() {
  const [employeeDetails, setEmployeeDetails] = useState({
    Email: "",
    UserName: "",
    PhoneNumber: "",
    DOB: "",  
    StreetNumber: "", 
    StreetName: "",
    City: "",
    State: "",
    Country: "",
  }); 

  useEffect(() => {
    // get user email from local storage and then pass as part of parameters for api call
  }, []);

  function handleSubmit() {
    //e.PreventDefault();
    //call api
  }

  return (
    <div className="main-registration-div">
      <div className="registration-image-div">
        <img
          src={CompleteRegistrationImage}
          className="registration-image"
          alt="registration image"
        />
      </div>
 
      <form className="registration-form" onSubmit={handleSubmit}>
        <div className="form-title-div">Complete Registration</div>

        <div className="form-groups">
          <div className="personal-info">
            <div>
              <div className="registration-input-div">
                <input
                  className="registration-input"
                  type="text"
                  placeholder="UserName"
                  required
                  onChange={(e) =>
                    setEmployeeDetails({
                      ...employeeDetails,
                      UserName: e.target.value
                    })
                  }
                  value={employeeDetails.UserName}
                />
              </div>

              <div className="registration-input-div">
                <input
                  className="registration-input"
                  type="number"
                  minLength={11}
                  placeholder="PhoneNumber"
                  required
                  onChange={(e) =>
                    setEmployeeDetails({
                      ...employeeDetails,
                      PhoneNumber: e.target.value
                    })
                  }
                  value={employeeDetails.PhoneNumber}
                />
              </div>

              <div className="registration-input-div">
                <input
                  className="registration-input"
                  type="date"
                  placeholder="Date of Birth"
                  required
                  onChange={(e) =>
                    setEmployeeDetails({
                      ...employeeDetails,
                      DOB: e.target.value
                    })
                  }
                  value={employeeDetails.DOB}
                />
              </div>

              <div className="registration-input-div">
                <input
                  className="registration-input"
                  type="email"
                  placeholder="Street Number"
                  required
                  onChange={(e) =>
                    setEmployeeDetails({
                      ...employeeDetails,
                      StreetNumber: e.target.value
                    })
                  }
                  value={employeeDetails.StreetNumber}
                />
              </div>

              <div className="registration-input-div">
                <input
                  className="registration-input"
                  type="text"
                  placeholder="Street Name"
                  required
                  onChange={(e) =>
                    setEmployeeDetails({
                      ...employeeDetails,
                      StreetName: e.target.value
                    })
                  }
                  value={employeeDetails.StreetName}
                />
              </div>

              <div className="registration-input-div">
                <input
                  className="registration-input"
                  type="text"
                  placeholder="City"
                  required
                  onChange={(e) =>
                    setEmployeeDetails({
                      ...employeeDetails,
                      City: e.target.value
                    })
                  }
                  value={employeeDetails.City}
                />
              </div>
              <div className="registration-input-div">
                <input
                  className="registration-input"
                  type="text"
                  placeholder="State"
                  required
                  onChange={(e) =>
                    setEmployeeDetails({
                      ...employeeDetails,
                      State: e.target.value
                    })
                  }
                  value={employeeDetails.State}
                />
              </div>

              <div className="registration-input-div">
                <input
                  className="registration-input"
                  type="text"
                  placeholder="Country"
                  required
                  onChange={(e) =>
                    setEmployeeDetails({
                      ...employeeDetails,
                      Country: e.target.value
                    })
                  }
                  value={employeeDetails.Country}
                />
              </div>

          <button className="register-button" type="submit">
            Submit
          </button>
        </div>
        <div>
          <h4 className="contact-us">
            Could'nt register ?{" "}
            <a className="click-here" href="#">
              Click here
            </a>{" "}
            to contact us
          </h4>
        </div>
        </div>
        </div>
      </form>
    </div>
  );
}

export default Registration;