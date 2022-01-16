import React, { Component } from 'react'
import "./employees.css";
import { Link } from "react-router-dom";

export default class Employees extends Component {
    render() {
        return (
            <div className="widgetLg">
                <div className="userTitleContainer">
                <h3 className="widgetLgTitle">Employees</h3>
                <Link to="/addEmployees">
                <button className="userAddButton">Add</button>
                </Link>
                </div>
            </div>
        )
    }
}
