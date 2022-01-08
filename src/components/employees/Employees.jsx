import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "../card/Card";
import "./employees.scss";
import accountSetupImage from "../images/profileImage.jpg";
import agent from "../api/Agent";

const Employees = () => {
  let history = useHistory();
  const [employeesList, setEmployeesList] = useState();

  useEffect(() => {
    async function fetchData() {
      const employees = await agent.RavenAccess.getAllEmployees(1, 200);
      console.log(employees);

      if (employees != null) {
        const eployeesStringified = JSON.stringify(employees.data.pageItems);
        localStorage.setItem("EmployeesList", eployeesStringified);
        setEmployeesList(employees.data.pageItems);
      }
    }
    fetchData();
  }, []);

  const storedEmployeesList = localStorage.getItem("EmployeesList");
  console.log(storedEmployeesList);

  const employeesObject = JSON.parse(storedEmployeesList);
  console.log(employeesObject);

  const handleSubmit = async (e) => {
    e.preventDefault();

    history.push(`/accountsetup`);
  };

  return (
    <div className="employees-main">
      <div className="top-div">
        <div className="employee-title">Employees</div>
        <div>
          <button className="add-employee-button" onClick={handleSubmit}>
            + Add Employee
          </button>
        </div>
      </div>
      {employeesObject.map((employee) => (
        <Card
          employeeImage={employee.avatar}
          employeeName={employee.firstName}
          position={employee.designation}
          duration="10 years"
        />
      ))}
    </div>
  );
};
export default Employees;
