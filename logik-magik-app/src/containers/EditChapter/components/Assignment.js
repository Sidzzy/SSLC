import React, { useEffect, useState } from 'react';
import Editor from 'react-medium-editor';
import { editChapterOptions, dumbContentAssignment } from '../util';

const EditChapter = props => {
    const [inputs, setInputs] = useState([dumbContentAssignment]);

    useEffect( () => {
        //TODO: call the api which is throwing all the assignment of this chapter.
        //TODO: Use the local storage to save frequent calling
    }, []);

    const handleChange = (text, index) => {
        console.log(text);
        setInputs((inputs) => {
            inputs[index] = text;
            return inputs;
        });
    }

    const submitContentChange = event => {
        event.preventDefault();
        console.log("inputs=", inputs);
        //TODO: call the api which will update the edited content, may require course and chapter ID.
        //change the complete content of it.
    }

    const onAddAssignment = event => {
        event.preventDefault();
        setInputs(inputs => ([
            ...inputs,
            dumbContentAssignment
        ]))
    }

    const onDeleteAssignment = (event, index) => {
        event.preventDefault();
        //filter out the 'index' number element
        let temp = inputs;
        temp.filter((input, i) => {
            if(i !== index){
                console.log("index-", i, "input=", input);
                return input;
            }
        })
        setInputs(inputs => (inputs.filter((input, i) => i !== index)));
    }

    return (
        <div>
            <h1>Edit Assignment</h1>
            <form onSubmit={submitContentChange}>
                <div className="row ab-ml-2">
                    {inputs.map((input, index)=> {
                        console.log("re-rendering...", input);
                        return (
                        <>
                            <Editor
                                tag="pre"
                                contentEditable={input}
                                text={input}
                                onChange={(text) => handleChange(text, index)}
                                options={editChapterOptions}
                                className="ab-px-5 ab-mx-2 ab-border-dark "
                            />
                            <button onClick={event => onDeleteAssignment(event, index)}>Delete</button>
                        </>)
                    })}
                </div>
                <button onClick={onAddAssignment}>Add Assignment</button>
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );

}

export default EditChapter;