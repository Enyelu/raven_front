import React, {useState, useEffect} from "react";
import "./Card.scss";
import accountSetupImage from "../images/profileImage.jpg";

function Card(props) {
  const [employeeDetails, setEmployeeDetails] = useState([]);
  const [employeesObject, setEmployeeObject] = useState([]);
  


  const handleViewProfile = () => {
    setEmployeeObject(JSON.parse(localStorage.getItem('EmployeesList')));  
  }
   

  return (
    <div className="card-main">
      <div className="card-body">
        <img
          className="employee-image"
          src={props.employeeImage}
          alt={accountSetupImage}
        />
        <h3 className="employee-name">{props.employeeName}</h3>

        <div className="position-div">
          <h4 className="position">Position</h4>
          <h4 className="position-value">{props.position}</h4>
        </div>
        <div className="work-duration-div">
          <h4 className="work-duration">Worked Here</h4>
          <h4 className="work-duration-value">{props.duration}</h4>
        </div>
        <button className="card-button" type="submit" onClick={()=>handleViewProfile()}>
          View Profile
        </button>
      </div>
    </div>
  );
}

export default Card;