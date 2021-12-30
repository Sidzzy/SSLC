import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import * as chapters_api from '../../apis/chapters';
import { sortChapters } from '../../shared/utility';

const EditCourse = (props) => {
    const [chapters, setChapters] = useState([]);
    const [inputs, setInputs] = useState('');
    const query = new URLSearchParams(props.location.search);

    useEffect( () => {
        //TODO: call the api which is throwing all the chapters for this course as per course ID.
        reset();
    }, []);

    const handleInputChange = event => {
        event.persist();
        setInputs(inputs => ({
          ...inputs,
          [event.target.name]: event.target.value
        }));
    };

    const reset = () => {
        getChapters(query.get('courseId'));
    }

    const getChapters = (courseId) => {
        chapters_api.getChapters(courseId)
            .then(res => {
                const foundChapters = res.map(chapter => ({'index': chapter.index, 'name': chapter.name, 'id': chapter._id}));
                setChapters(sortChapters(foundChapters));
            })
            .catch(err => {
                console.log(err);
            })
    }

    const addChapter = event => {
        console.log("event=", event.target.value);
        if (event) {
            event.preventDefault();
            setChapters(sortChapters([
                ...chapters,
                {
                    'id': null,
                    'index': inputs.chapterIndex,
                    'name': inputs.chapterName
                }
            ]));
        }
    }

    const handleSave = () => {
        const data = {
            "courseId" : query.get('courseId'),
            "chapters" : chapters
        };
        chapters_api.addChapters(data)
            .then(res => {
                console.log(res);
                reset();
            })
            .catch(err => {
                console.log(err);
            });
    }

    const onIndexChange = (newChapterIndex, arrayIndex) => {
        setChapters(prevState => {
            return prevState.map((chapter, index) => {
                if(index === arrayIndex)
                    chapter.index = newChapterIndex;
                return chapter;
            });
        });
    }

    return (
        <div>
            <form onSubmit="" className="row justify-content-center">
                <input value={query.get('courseName')} />
                <button type="submit">Edit Course Name</button>
            </form>
            {/* <form onSubmit={ handleSave }> */}
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
                                <td><input onChange={(event) => onIndexChange(event.target.value, index)} value={chapter.index} /></td>
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
                <form onSubmit = {addChapter}>
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
                    <button>Add</button>
                </form>
                <div className="d-flex justify-content-center ab-mt-5">
                    <button onClick={() => handleSave()}>Save</button>
                </div>
            {/* </form> */}
        </div>
    )
}

export default EditCourse;