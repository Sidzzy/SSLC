import React, { useEffect, useState } from 'react';

const AddChapter = props => {
    const [inputs, setInputs] = useState([dumbContentAssignment]);
    useEffect(() => {
        console.log("hello new chapter");
    }, []);

    //A dummy component
    return (
        <div>
            <h1>Add Chapter</h1>
            <h1>Add Chapter</h1>
            <h1>Add Chapter</h1>
            <h1>Add Chapter</h1>
        </div>
    );

}

export default AddChapter;