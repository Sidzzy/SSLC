import React, { useEffect, useState } from 'react';
import * as course_api from '../../apis/course';

const InstructorCourses = props => {
    const { history } = props;
    const [inputs, setInputs] = useState('');
    const [myCourses, setMyCourses] = useState([]);
    useEffect(() => {
        reset();
    }, []);

    const reset = () => {
        course_api.getCourses()
            .then(data => {
                const courses = data.map(course => ({"courseId": course._id, "courseName": course.courseName}));
                setMyCourses(courses);
            });
    }

    const handleInputChange = event => {
        event.persist();
        setInputs(inputs => ({
          ...inputs,
          [event.target.name]: event.target.value
        }));
    };

    const deleteCourse = (event, courseId) => {
        event.preventDefault();
        course_api.deleteCourse(courseId)
            .then(data => {
                reset();
            })
    }

    const handleSubmit = event => {
        if (event) {
            event.preventDefault();
            course_api.setCourses({courseName: inputs?.newCourse})
                .then(data => {
                    //TODO: redirect to edit course for this newly created course directly using data._id
                    reset();
                });
        }
    }

    return (
        <div>
            <h3>My Courses</h3>
            <ul>
                {myCourses.map((course, index) => {
                    return (
                    <li key={index}>
                        <div style={{"display": "inline"}} onClick={() => {
                            //TODO: Push the course id as well: will help to fetch chapters
                            history.push(`/editcourse?course=${course}`)
                        }}>
                            {course?.courseName}
                            <button>Edit Course</button>
                        </div>
                        <button style={{"float": "right"}} onClick={(event) => deleteCourse(event, course?.courseId)}>Delete Course</button>
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