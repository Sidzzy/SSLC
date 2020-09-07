import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const StudentCourses = props => {
    const { history } = props;
    const [Courses, setCourses] = useState(['C++', 'Java', 'Python', 'Javascript']);
    useEffect(() =>{
        //TODO: fetch all the courses of the user and push them in myCourses array
    }, []);
    return (
        <div>
            <h3>Your Courses</h3>
            <ul>
                {Courses.map((course, index) => {
                    return (
                        <li>
                        <Button variant="btn btn-info btn-lg" onClick={() => {
                        //TODO: Push the course id as well: will help to fetch chapters
                            history.push(`/viewchapters?course=${course}`)
                            }}key={index}>
                            {course}
                        </Button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default StudentCourses;