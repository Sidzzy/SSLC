import React, { useEffect, useState } from 'react';

const AddChapter = props => {
    const [inputs, setInputs] = useState([dumbContentAssignment]);

    useEffect( () => {
        //TODO: call the api which is throwing all the assignment of this chapter.
        //TODO: Use the local storage to save frequent calling
    }, []);

    return (
        <div>
            <h1>Edit Assignment</h1>
        </div>
    );

}

export default AddChapter;