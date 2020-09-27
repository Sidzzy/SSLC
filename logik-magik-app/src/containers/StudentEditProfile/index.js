import React, { useState, useEffect } from 'react';
import {Button} from 'react-bootstrap';

const StudentEditProfile = (props) => {
    const { history } = props;
    const [inputs, setInputs] = useState({
        name : '',
        email : 'sumitdutta252@gmail.com',
        number : '',
        codechef : '',
        codeforces : '',
        linkedin : '',
        cv: '',
        profilepic: '',
    })
    useEffect(() =>{
        //TODO: Call for API
    }, []);
    const handleOnSubmit = event => {
        if (event){
            event.preventDefault();
            console.log(inputs);
        }
    }
    const handleOnUpload = event =>{
        event.persist();
        // let file_reader = new FileReader();
        // file_reader.onload = () =>{
        //     console.log("file_reader=", file_reader.result);
        //     setInputs(inputs => ({
        //         ...inputs,
        //         [event.target.name] : file_reader.result
        //     }));
        // }
        const blob_obj = new Blob();
        let file = event.target.files[0];
        setInputs(inputs => ({
            ...inputs,
            [event.target.name] : file
        }));
        // file_reader.readAsDataURL(file);
    }
    const handleOnChange = event =>{
        event.persist();
        setInputs(inputs => ({
            ...inputs,
            [event.target.name]: event.target.value
        }));
    }
    const downloadFile = (event,string) => {
        event.preventDefault();
        let link = document.createElement('a');
        if (string==="cv"){
            const blob_obj = new Blob(
                [inputs.cv]
            );
            let url = URL.createObjectURL(inputs.cv);
            link.setAttribute('href', url);
            link.setAttribute('download', "cv.pdf");
        }else{
            const blob_obj = new Blob(
                [inputs.profilepic]
            );
            let url = URL.createObjectURL(inputs.profilepic);
            link.setAttribute('href', url);
            link.setAttribute('download', "profile.jpeg");
        }
        link.setAttribute('target', "_top");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return (
        <div>
            <h1>Edit Profile</h1>
            <form onSubmit={handleOnSubmit}>
                <div>
                    <label><strong>Upload Profile Pic: </strong></label>
                    <input
                        type="file"
                        name="profilepic"
                        onChange={handleOnUpload}
                    />
                </div>
                <div>
                    <label><strong>Name: </strong></label>
                    <input
                        type="text"
                        name="name" 
                        onChange={handleOnChange} 
                        value={inputs.name} 
                        placeholder="Enter Full Name"
                    /><br/>
                    <label><strong>E-mail: </strong></label>
                    <input 
                        type="email" 
                        name="email" 
                        onChange={handleOnChange} 
                        value={inputs.email}
                    /><br/>
                    <label><strong>Number: </strong></label>
                    <input 
                        type="text" 
                        name="number" 
                        onChange={handleOnChange} 
                        value={inputs.number} 
                        placeholder="Enter Number"
                    />
                </div>
                <div>
                    <label><strong>Codechef Profile: </strong></label>
                    <input 
                        type="text" 
                        name="codechef" 
                        onChange={handleOnChange} 
                        value={inputs.codechef}
                    /><br/>
                    <label><strong>Codeforces Profile: </strong></label>
                    <input 
                        type="text" 
                        name="codeforces" 
                        onChange={handleOnChange} 
                        value={inputs.codeforces}
                    />
                    <br/>
                    <label><strong>LinkedIn Profile: </strong></label>
                    <input 
                        type="text"
                        name="linkedin" 
                        onChange={handleOnChange} 
                        value={inputs.linkedin}
                    />
                </div>
                <div>
                    <label><strong>Upload CV: </strong></label>
                    <input
                        type="file"
                        name="cv"
                        accept=".pdf"
                        onChange={handleOnUpload}
                    />
                </div>
                <div>
                    <Button type="submit" onClick={(event) => downloadFile(event, "cv")} variant="btn btn-success btn-lg">
                        Download CV
                    </Button>
                    <Button type="submit" onClick={(event) => downloadFile(event, "profile")} variant="btn btn-success btn-lg">
                        Download Profile Picture
                    </Button>
                </div>
                <div>
                    <Button type="submit" variant="btn btn-success btn-lg">
                        Update
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default StudentEditProfile;
