import React from 'react';
import './index.module.css';
import { Button } from 'react-bootstrap';

const Home = props => {
    const { history } = props;
    return (
        <div>
            <h3>HOME PAGE</h3>
            <div className="ab-pr-4">
                <Button variant = "btn btn-success btn-lg" onClick = {() => {history.push('/')}}>Home</Button>
                <Button variant = "btn btn-warning btn-lg" onClick = {() => {history.push('/studentcourses')}}>Student Courses</Button>
                <Button variant = "btn btn-info btn-lg" onClick = {() => {history.push('/mycourses')}}>Instructor Courses</Button>
            </div>
        </div>
    )
}

export default Home;
