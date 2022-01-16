import React from "react"
import "./jobOffering.css";
import { Link } from "react-router-dom";


export default function jobOffering() {
  
  return (
    <div className="widgetLg">

        <div className="userTitleContainer">
            <h3 className="widgetLgTitle">Employees Job Offer Status</h3>
            <Link to="/addJobOffering">
            <button className="userAddButton">Add</button>
            </Link>
        </div>

      <table className="widgetLgTable">

      <thead>
        
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Full Name</th>
          <th className="widgetLgTh">Gender</th>
          <th className="widgetLgTh">Email</th>
          <th className="widgetLgTh">Department</th>
          <th className="widgetLgTh">Designation</th>
          <th className="widgetLgTh">Offer Accepted</th>
        </tr>

        </thead>

        <tbody>

        <tr className="widgetLgTr">

          <td className="widgetLgUser">

            <span className="widgetLgName">Susan Carol</span>
          </td>

          <td className="widgetLgDate">male</td>

          <td className="widgetLgAmount">popsi@gmail.com</td>

          <td className="widgetLgAmount">Account</td>

          <td className="widgetLgAmount">Accountant</td>

          <td className="widgetLgAmount">false</td>

          <td className="widgetLgStatus">
          <button className="widgetLgButton">Delete</button>
          </td>

        </tr>
       
        </tbody>

      </table>

    </div>
  );
}