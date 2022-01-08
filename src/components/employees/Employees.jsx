import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Card from "../card/Card"
import "./Employees.scss"
import agent from "../api/Agent"


const Employees = () => {
  let history = useHistory();
  const [employeesList, setEmployeesList] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    history.push(`/accountsetup`);
  };

  // FETCH DATA FROM API
  useEffect(() => {
    async function fetchData() {
      const employees = await agent.RavenAccess.getAllEmployees(1, 200);
      console.log("employeesdata: ", employees);

      if (employees.data) {
        setEmployeesList(employees.data.pageItems);
      } else {
        setEmployeesList([]);
      }
    }
    fetchData();
  }, []);

  // SAVE EMPLOYEES LIST TO LOCAL STORAGE
  useEffect(() => {
    const eployeesStringified = JSON.stringify(employeesList);
    localStorage.setItem("EmployeesList", eployeesStringified);
  }, [employeesList]);

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
      {employeesList.map((employee) => (
        <Card
          key={employee.email}
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