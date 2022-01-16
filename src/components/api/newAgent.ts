 import axios, { AxiosError, AxiosResponse, AxiosRequestConfig } from "axios";
import {useHistory} from 'react-router-dom'
import {toast} from 'react-toastify'

 axios.defaults.baseURL = 'http://localhost:5000/api'; 
 const sleep = (delay: number) => {
     return new Promise((resolve) => {
         setTimeout(resolve, delay);
     })
 }
 axios.interceptors.request.use((config: AxiosRequestConfig) => {
     const token = localStorage.getItem('token');
     if (token) {
         config.headers = {
             Authorization: `Bearer ${token}`,
         }
     }
     return config;    
 })
 const responseBody = <T>(response: AxiosResponse<T>) => response.data;
 axios.interceptors.response.use(async response => {
         await sleep(1000);
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
 const requests = {
    get: <T> (url: string) => axios.get<T>(url).then(responseBody),
    post:<T> (url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put:<T> (url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del:<T> (url: string) => axios.delete<T>(url).then(responseBody),
 }
 
 const agent = {
     
 }
 export default agent;