import React, {useState} from 'react'
import agent from "../api/Agent"
import "./Imageers.scss"
   

function Imageers() {

    const [file, setFile] = useState();

    const onFromSubmit = (e) =>{
        e.preventDefault();
        console.log("file",file);
        const formData = new FormData();
        formData.append("Item", file);
 
        const response = agent.RavenAccess.UploadeDocuments(formData);
        console.log("response:", response);
    }

    const onInputChange = (e) =>{
        setFile(e.target.files[0]);
        console.log("file",file);
    }

    return (

        <div className="topp">
            <form onSubmit={onFromSubmit} >
                <h1>Upload Image</h1>
                <input 
                type="file"
                name="Item"
                onChange={onInputChange}
                multiple/>
                <button type="submit">Submit</button>
            </form>
        </div>
        
    )
}

export default Imageers