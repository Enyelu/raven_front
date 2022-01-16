import React from "react"
import "./onboarding.css";

export default function Onboarding() {
  
  return (
    <div className="widgetLg">

        <div className="userTitleContainer">
            <h3 className="widgetLgTitle">Employees Onboarding </h3>
        </div>

      <table className="widgetLgTable">

      <thead>
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Name</th>
          <th className="widgetLgTh">Gender</th>
          <th className="widgetLgTh">Email</th>
          <th className="widgetLgTh">Department</th>
          <th className="widgetLgTh">Account Setup</th>
          <th className="widgetLgTh">Registration Status</th>
          <th className="widgetLgTh">Email Confirmed</th>
          <th className="widgetLgTh">Start Date</th>
          <th className="widgetLgTh">Documents Uploaded</th>
          <th className="widgetLgTh">Equipment Setup</th>
          <th className="widgetLgTh">Training Status</th>
          <th className="widgetLgTh">Onboarding Status</th>
        </tr>
        </thead>

        <tbody>

        <tr className="widgetLgTr">

          <td className="widgetLgDate">chukwuebuka enyelu</td>
          <td className="widgetLgDate">male</td>
          <td className="widgetLgAmount">bukas@gmail.com</td>
          <td className="widgetLgAmount">Account</td>
          <td className="widgetLgAmount">false</td>
          <td className="widgetLgAmount">false</td>
          <td className="widgetLgAmount">false</td>
          <td className="widgetLgAmount">12/4/2022</td>
          <td className="widgetLgAmount">false</td>
          <td className="widgetLgAmount">false</td>
          <td className="widgetLgAmount">in progress</td>
          <td className="widgetLgAmount">in progress</td>

        </tr>
        
        </tbody>

      </table>

    </div>
  );
}