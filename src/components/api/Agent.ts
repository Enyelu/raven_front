import axios, { AxiosError, AxiosResponse, AxiosRequestConfig } from "axios";
//import axios from "axios";
import {toast} from "react-toastify"
import {useHistory} from "react-router-dom"

axios.defaults.baseURL = "http://136.244.68.223/api"; //https://localhost:5001
axios.defaults.headers.post["Content-Type"] = "application/json";

const sleep = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
};

axios.interceptors.request.use(
  (config :AxiosRequestConfig) => {
    console.log(config);
    const token = localStorage.getItem("token");
    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
      };
    }
    return config;
  }//,
  // (error) => {
  //   console.log(error);
  //   return Promise.reject(error);
  // }
);

//const cancellationToken = axios.CancelToken.source;

const responseBody = <T>(response: AxiosResponse<T>) => response.data;
 axios.interceptors.response.use(async response => {
         await sleep();
         return response;    
 }, (error: AxiosError) => {
     let history = useHistory();
     const { data, status, config } = error.response!;
     switch (status) {
         case 400:
             if (typeof data === 'string') {
                 toast.error(data);
             }
             if (config.method === 'get' && data.errors.hasOwnProperty('id')) {
                 history.push('/not-found');
             }
             if (data.errors) {
                const modelStateErrors = [];
                for (const key in data.errors) {
                    if (data.errors[key]) {
                        modelStateErrors.push(data.errors[key]);
                    }
                }
                throw modelStateErrors.flat();
             }
                          break;
        case 401:
            toast.error('unauthorized');
           break;
        case 404:
            toast.error('not found');
            history.push('/not-found');
            break;
        case 500:
              toast.error('server error');
            // store.commonStore.setServerError(data);

            history.push('/server-error')
             break;
     }
     return Promise.reject(error);
 })

const request = {
  get: (url:string) => axios.get(url).then((response) => response.data),
  post: (url:string, body:any) =>
    axios.post(url, body).then((response) => response.data),
  patch: (url:string, body:any) =>
    axios.patch(url, body).then((response) => response.data),
  put: (url:string, body:any) =>
    axios.put(url, body).then((response) => response.data),
  delete: (url:string) => axios.delete(url).then((response) => response.data),
};

const RavenAccess = {
  //AppUser axios-http methods
  getEmployee: (employeeEmail:any) =>
    request.get(`/Employee/employeeEmail?employeeEmail=${employeeEmail}`),
  getAllEmployees: (pageNumber:any, pageSize:any) =>
    request.get(
      `/Employee/AllEmployees?PageSize=${pageSize}&PageNumber=${pageNumber}`
    ),
  getAllDepartmentEmployees: (
    departmentName:any,
    pageSize:any,
    pageNumber:any
  ) =>
    request.get(
      `/Employee/AllDepartmentEmployees?DepartmentName=${departmentName}&PageSize=${pageSize}&PageNumber=${pageNumber}`
    ),
  getAllDesignationEmployees: (
    departmentName:any,
    pageSize:any,
    pageNumber:any
  ) =>
    request.get(
      `/Employee/AllDesignationEmployees?DesignationName=${departmentName}/PageSize=${pageSize}/PageNumber=${pageNumber}`
    ),

  UpdateEmployee: (body:any) => request.put(`/Employee/Update`, body),
  ChangeEmployeeDesignation: (body:any) =>
    request.patch(`/Employee/EmployeeDesignation`, body),
  ChangeEmployeeDepartment: (body: any) =>
    request.patch(`/Employee/EmployeeDepartment`, body),

  //Upload
  UploadImage: (formData:any) =>
    request.post(`/Employee/UploadImage`, formData),
  UploadeDocuments: (formData:any) =>
    request.post(`/Employee/UploadDocument`, formData),
  //SendMail

  //SendBulkMail
  DeactivateEmployee: (body:any) =>
    request.patch(`/Employee/Deactivate`, body),
  AssignRole: (body:any) => request.patch(`/Employee/AssignRole`, body),
  EmployeesInRole: (roleName:any, pageSize:any, pageNumber:any) =>
    request.get(
      `/Employee/InARole?roleName=${roleName}&PageSize=${pageSize}&PageNumber=${pageNumber}`
    ),
  FormerEmployees: (pageSize:any, pageNumber:any) =>
    request.get(
      `/Employee/FormerEmployees?PageSize=${pageSize}&PageNumber=${pageNumber}`
    ),

  EmailConfirmationToken: (email:any) =>
    request.get(`/Employee/EmailConfirmationToken?Email=${email}`),
  SlackOnboard: (firstName:any, lastName:any, email:any) =>
    request.get(
      `/Employee/SlackOnboard?FirstName=${firstName}&LastName=${lastName}&Email=${email}`
    ),
  CompleteAccountSetup: (body:any) =>
    request.patch(`/Auth/RegistrationCompletion`, body),

  //Auth axios-http methods
  AccountSetup: (body:any) => request.post(`/Auth/Registration`, body),
  Login: (email:any, password:any) =>
    request.get(`/Auth/Login?Email=${email}&Password=${password}`),
  ForgotPassword: (email:any) => request.get(`/Auth/ForgotPassword/${email}`),
  ResetPassword: (body:any) => request.post(`/Auth/ResetPassword`, body),
  UpdatePassword: (body:any) => request.patch(`/Auth/UpdatePassword`, body),
  //RefreshToken

  //Department axios-http methods
  CreateDepartment: (body:any) =>
    request.post(`/Department/NewDepartment`, body),
  GetDepartment: (depertmentName:any) =>
    request.get(`Department/ByName/${depertmentName}`),

  //Designation axios-http methods
  CreateDesignation: (body:any) =>
    request.post(`Designation/NewDesignation`, body),
  GetDesignation: (designationName:any) =>
    request.get(`Designation/ByName/${designationName}`),

  //Roles axios-http methods
  //CreateRole: (roleName:any) => request.post(`/Role/CreateRole/${roleName}`),
  GetAllRoles: () => request.get(`/Role/AllRoles`),
  DeleteRole: (roleName:any) => request.delete(`/Role/${roleName}`),

  //Probational AppUser
  AddProbationalUser: (body:any) => request.post(`/ProbationalAppUser`, body),
  GetAllProbationalAppUsers: (pageSize:any, pageNumber:any) =>
    request.get(
      `/ProbationalAppUser/ConfirmAcceptance?PageSize=${pageSize}&PageNumber=${pageNumber}`
    ),
  //ProbationalAppUserConfirmAcceptance: (email:any) => request.patch(`/ProbationalAppUser/ConfirmAcceptance?probationalAppUserEmail=${email}`),
};

const agent = {
  RavenAccess,
};

export default agent;
