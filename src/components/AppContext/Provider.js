import React, {createContext, useState, } from 'react';

export const GlobalVariables = createContext({});

export const GlobalProvider = ({ children }) => {

    const [employees, setEmployees] = useState([]);
    const [token, setToken] = useState('');
    const [employeeEmail, setEmployeeEmail] = useState('');
    const [loginResponse, setLoginResponse] = useState('');
    
  
    return (
        <GlobalVariables.Provider value={{
            employees, setEmployees,
            token, setToken,
            employeeEmail, setEmployeeEmail,
            loginResponse, setLoginResponse,
             
}}>
            {children}
        </GlobalVariables.Provider>
    )
}