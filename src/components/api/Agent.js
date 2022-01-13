import axios from "axios";


axios.defaults.baseURL = 'http://136.244.68.223/api';
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

const request = {
    get: (url) => axios.get(url).then((response) => response.data),
    post: (url, body) => axios.post(url,body).then((response) => response.data),
    patch: (url, body) => axios.patch(url,body).then((response) => response.data),
    put: (url,body) => axios.put(url,body).then((response) => response.data),
    delete: (url) => axios.delete(url).then((response) => response.data),
}

const RavenAccess = {
    //AppUser axios-http methods
getEmployee : (employeeEmail) => request.get(`/Employee/employeeEmail?employeeEmail=${employeeEmail}`),
getAllEmployees : (pageNumber, pageSize) => request.get(`/Employee/AllEmployees?PageSize=${pageSize}&PageNumber=${pageNumber}`),
getAllDepartmentEmployees : (departmentName, pageSize, pageNumber) => request.get(`/Employee/AllDepartmentEmployees?DepartmentName=${departmentName}&PageSize=${pageSize}&PageNumber=${pageNumber}`),
getAllDesignationEmployees : (departmentName, pageSize, pageNumber) => request.get(`/Employee/AllDesignationEmployees?DesignationName=${departmentName}/PageSize=${pageSize}/PageNumber=${pageNumber}`),

UpdateEmployee: (body) => request.put(`/Employee/Update`, body),
ChangeEmployeeDesignation: (body) => request.patch(`/Employee/EmployeeDesignation`, body),
ChangeEmployeeDepartment: (body) => request.patch(`/Employee/EmployeeDepartment`, body),

//Upload
UploadImage: (formData) => request.post(`/Employee/UploadImage`, formData),
UploadeDocuments: (body) => request.post(`/Employee/UploadDocument`, body),
//SendMail

//SendBulkMail
DeactivateEmployee: (body) => request.patch(`/Employee/Deactivate`, body),
AssignRole: (body) => request.patch(`/Employee/AssignRole`, body), 
EmployeesInRole: (roleName, pageSize, pageNumber) => request.get(`/Employee/InARole?roleName=${roleName}&PageSize=${pageSize}&PageNumber=${pageNumber}`),
FormerEmployees: (pageSize, pageNumber) => request.get(`/Employee/FormerEmployees?PageSize=${pageSize}&PageNumber=${pageNumber}`),


EmailConfirmationToken: (email) => request.get(`/Employee/EmailConfirmationToken?Email=${email}`),
SlackOnboard: (firstName, lastName, email) => request.get(`/Employee/SlackOnboard?FirstName=${firstName}&LastName=${lastName}&Email=${email}`),
CompleteAccountSetup: (body) => request.patch(`/Auth/RegistrationCompletion`, body),

    //Auth axios-http methods
AccountSetup: (body) => request.post(`/Auth/Registration`, body),
Login: (email, password) => request.get(`/Auth/Login?Email=${email}&Password=${password}`),
ForgotPassword: (email) => request.get(`/Auth/ForgotPassword/${email}`),
ResetPassword: (body) => request.post(`/Auth/ResetPassword`, body), 
UpdatePassword: (body) => request.patch(`/Auth/UpdatePassword`, body),
//RefreshToken

    //Department axios-http methods
CreateDepartment: (body) => request.post(`/Department/NewDepartment`, body),
GetDepartment: (depertmentName) => request.get(`Department/ByName/${depertmentName}`), 

    //Designation axios-http methods
CreateDesignation: (body) => request.post(`Designation/NewDesignation`, body),
GetDesignation: (designationName) => request.get(`Designation/ByName/${designationName}`),
    
//Roles axios-http methods 
CreateRole: (roleName) => request.post(`/Role/CreateRole/${roleName}`),
GetAllRoles: () => request.get(`/Role/AllRoles`),
DeleteRole: (roleName) => request.delete(`/Role/${roleName}`),

//Probational AppUser
AddProbationalUser: (body) => request.post(`/ProbationalAppUser`, body),
GetAllProbationalAppUsers: (pageSize,pageNumber) => request.get(`/ProbationalAppUser/ConfirmAcceptance?PageSize=${pageSize}&PageNumber=${pageNumber}`),
ProbationalAppUserConfirmAcceptance: (email) => request.patch(`/ProbationalAppUser/ConfirmAcceptance?probationalAppUserEmail=${email}`),

}



const agent = {
    RavenAccess
}

export default agent;