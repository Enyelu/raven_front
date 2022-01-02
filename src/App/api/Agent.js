import axios from "axios";

axios.defaults.baseURL = 'https://localhost:5001/api';
axios.defaults.headers.post['Content-Type'] = 'application/json';

const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(resolve, 1000);
    })
}
axios.interceptors.request.use(config => {
    console.log(config);
    const token = localStorage.getItem('token');
    if (token) {
        config.headers = {
            Authorization: `Bearer ${token}`,
        }
    }
    return config; 
}, (error) => {
    console.log(error);
    return Promise.reject(error);
});


axios.interceptors.response.use(async response => {
    await sleep();
    return response;
    
}, error => {
    console.log(error);
    return Promise.reject(error);
});

const requests = {
    get: (url) => axios.get(url).then((response) => response.data),
    post: (url, body) => axios.post(url,body).then((response) => response.data),
    patch: (url, body) => axios.patch(url,body).then((response) => response.data),
    put: (url,body) => axios.put(url,body).then((response) => response.data),
    delete: (url) => axios.delete(url).then((response) => response.data),
}

const RavenAccess = {
    //AppUser axios-http methods
getEmployee : (employeeEmail) => requests.get(`/Employee/employeeEmail?employeeEmail=${employeeEmail}`),
getAllEmployees : (pageNumber, pageSize) => requests.get(`/Employee/AllEmployees?PageSize=${pageSize}&PageNumber=${pageNumber}`),
getAllDepartmentEmployees : (departmentName, pageSize, pageNumber) => requests.get(`/Employee/AllDepartmentEmployees?DepartmentName=${departmentName}&PageSize=${pageSize}&PageNumber=${pageNumber}`),
getAllDesignationEmployees : (departmentName, pageSize, pageNumber) => requests.get(`/Employee/AllDesignationEmployees?DesignationName=${departmentName}/PageSize=${pageSize}/PageNumber=${pageNumber}`),

UpdateEmployee: (body) => requests.put(`/Employee/Update`, body),
ChangeEmployeeDesignation: (body) => requests.patch(`/Employee/EmployeeDesignation`, body),
ChangeEmployeeDepartment: (body) => requests.patch(`/Employee/EmployeeDepartment`, body),
//SendMail

//SendBulkMail
DeactivateEmployee: (body) => requests.patch(`/Employee/Deactivate`, body),
AssignRole: (body) => requests.patch(`/Employee/AssignRole`, body), 
EmployeesInRole: (roleName, pageSize, pageNumber) => requests.get(`/Employee/InARole?roleName=${roleName}&PageSize=${pageSize}&PageNumber=${pageNumber}`),
FormerEmployees: (pageSize, pageNumber) => requests.get(`/Employee/FormerEmployees?PageSize=${pageSize}&PageNumber=${pageNumber}`),


EmailConfirmationToken: (email) => requests.get(`/Employee/EmailConfirmationToken?Email=${email}`),
SlackOnboard: (firstName, lastName, email) => requests.get(`/Employee/SlackOnboard?FirstName=${firstName}&LastName=${lastName}&Email=${email}`),
//RegistrationInvite: (firstName, lastName, email, department, designation, salary, startDate)
 //=> requests.get(`/Employee/RegistrationInvite?FirstName=${firstName}&LastName=${lastName}&Email=${email}
 //               &Department=${department}&Designation=${designation}&Salary=${salary}&StartDate=${startDate}`),

    //Auth axios-http methods 
Registration: (body) => requests.post(`/Auth/Registration`, body),
Login: (email, password) => requests.get(`/Auth/Login?Email=${email}&Password=${password}`),
ForgotPassword: (email) => requests.get(`/Auth/ForgotPassword/${email}`),
ResetPassword: (body) => requests.post(`/Auth/ResetPassword`, body), 
UpdatePassword: (UserId, body) => requests.patch(`/Auth/UpdatePassword/${UserId}`, body),
//RefreshToken

    //Department axios-http methods
CreateDepartment: (body) => requests.post(`/Department/NewDepartment`, body),
GetDepartment: (depertmentName) => requests.get(`Department/ByName/${depertmentName}`), 

    //Designation axios-http methods
CreateDesignation: (body) => requests.post(`Designation/NewDesignation`, body),
GetDesignation: (designationName) => requests.get(`Designation/ByName/${designationName}`),
    
//Roles axios-http methods 
CreateRole: (roleName) => requests.post(`/Role/CreateRole/${roleName}`),
GetAllRoles: () => requests.get(`/Role/AllRoles`),
DeleteRole: (roleName) => requests.delete(`/Role/${roleName}`),

}

const agent = {
    RavenAccess
}

export default agent;