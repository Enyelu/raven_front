import React from "react";
import "./Card.scss";

function Card(props) {
  return (
    <div className="card">
      <div className="card-body">
        <img
          className="employee-image"
          src={props.employeeImage}
          alt="http://placehold.it/32x32"
        />
        <h3 className="employee-name">'{props.employeeName}'</h3>

        <div className="position-div">
          <p className="position">Position</p>
          <p className="position-value">{props.position}</p>
        </div>
        <div className="work-duration-div">
          <p className="work-duration">Worked Here</p>
          <p className="work-duration-value">{props.duration}</p>
        </div>
        <button className="card-button" type="submit">
          View Profile
        </button>
      </div>
    </div>
  );
}

export default Card;
