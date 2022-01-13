import React, {useState} from 'react'
import agent from "../api/Agent"
import "./Imageers.scss"
   

function Imageers() {

const [attachment, setAttachment] = useState();
	
const changeHandler = (event) => {
    setAttachment(event.target.files[0]);
	};

	const uploadImage = async() => {
		const formData = new FormData();

		formData.append('File', attachment);

		var response = await agent.RavenAccess.UploadImage(formData);
    console.log("api_response", response);
	};
	


    return (
        <div className="topp">
            <h1>Upload Image</h1>
            <input 
            type="file"
            name="file"
            placeholder="Upload Image"
            onChange={changeHandler}
            />
            <button onClick={uploadImage}>Submit</button>
        </div>
    )
}

export default Imageers