import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

const EditCourse = (props) => {
    const [chapters, setChapters] = useState( [ { 'index':'0' ,'name':'Introduction'}, { 'index':'1' ,'name':'Install'}]);
    const [inputs, setInputs] = useState('');
    const query = new URLSearchParams(props.location.search);
    useEffect( () => {
        //TODO: call the api which is throwing all the chapters for this course as per course ID.
    }, []);
    const handleInputChange = event => {
        event.persist();
        setInputs(inputs => ({
          ...inputs,
          [event.target.name]: event.target.value
        }));
    };

    const handleSubmit = event => {
        console.log("event=", event.target.value);
        if (event) {
            event.preventDefault();
            setChapters(chapters => ([
                ...chapters,
                {
                    'index': inputs.chapterIndex,
                    'name': inputs.chapterName
                }
            ]));
        }
    }

    const handleSave = () => {
        //sort the chapters in ascending order of their index
        let sortChapters = chapters;

    }

    return (
        <div>
            <form onSubmit="" className="row justify-content-center">
                <input value={query.get('course')} />
                <button type="submit">Edit Course Name</button>
            </form>
            <form onSubmit={ handleSave }>
                <h3>Chapters:</h3>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Order</th>
                        <th>Chapter</th>
                        <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                    {chapters.map((chapter, index) => {
                        return (
                            <tr key={index}>
                                <td><input value={chapter.index} /></td>
                                <td>{chapter.name}</td>
                                <td onClick={() => {
                                    props.history.push(`/editchapter?chapter=${chapter.name}`)
                                }}>
                                    <button>Edit Chapter</button>
                                </td>
                            </tr>)
                        })}
                    </tbody>
                </Table>
                <h3>Add a Chapter</h3>
                <form onSubmit = {handleSubmit}>
                    <input
                        type="text"
                        name="chapterIndex"
                        value={inputs.chapterIndex}
                        onChange={handleInputChange}
                        placeholder="0"
                    />
                    <input 
                        type="text"
                        name="chapterName"
                        value={inputs.chapterName}
                        onChange={handleInputChange}
                        placeholder="Chapter Name"
                    />
                    <button type="submit">Add</button>
                </form>
                <div className="d-flex justify-content-center ab-mt-5">
                    <button type="submit">Save</button>
                </div>
            </form>
        </div>
    )
}

export default EditCourse;