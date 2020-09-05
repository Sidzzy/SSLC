import React, { useEffect, useState } from 'react';

const InstructorCourses = props => {
    const { history } = props;
    const [inputs, setInputs] = useState('');
    const [myCourses, setMyCourses] = useState(['C++', 'Java']);
    useEffect(() => {
        //TODO: fetch all the courses of the user and push them in myCourses array
    }, []);

    const handleInputChange = event => {
        event.persist();
        setInputs(inputs => ({
          ...inputs,
          [event.target.name]: event.target.value
        }));
    };

    const handleSubmit = event => {
        if (event) {
            event.preventDefault();
            setMyCourses(myCourses => ([
                ...myCourses,
                inputs.newCourse
            ]));
        }
    }

    return (
        <div>
            <h3>My Courses</h3>
            <ul>
                {myCourses.map((course, index) => {
                    return (
                    <li onClick={() => {
                        //TODO: Push the course id as well: will help to fetch chapters
                        history.push(`/editcourse?course=${course}`)
                    }} key={index}>
                        {course}
                        <button>Edit Course</button>
                    </li>)
                })}
            </ul>
            <h3>Create a new Course</h3>
            <form onSubmit = {handleSubmit}>
                <input 
                    type="text"
                    name="newCourse"
                    value={inputs.newCourse}
                    onChange={handleInputChange}
                    placeholder="Type Name of Course..."
                />
                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default InstructorCourses;