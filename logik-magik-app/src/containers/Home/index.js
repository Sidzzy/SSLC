import React from 'react';
import './index.module.css';
import { Button } from 'react-bootstrap';
import * as test_api from '../../apis/test';

const Home = props => {
    const { history } = props;
    test_api.testAPI()
        .then(data => {
            console.log(data);
        });
    return (
        <div>
            <h3>HOME PAGE</h3>
            <div className="ab-pr-4">
                <Button variant = "outline-success btn-lg" onClick = {() => {history.push('/')}}>Home</Button>{' '}
                <Button variant = "outline-warning btn-lg" onClick = {() => {history.push('/studentcourses')}}>Student Courses</Button>{' '}
                <Button variant = "outline-info btn-lg" onClick = {() => {history.push('/mycourses')}}>Instructor Courses</Button>{' '}
                <Button variant = "outline-secondary btn-lg" onClick = {() => {history.push('/studenteditprofile')}}>Student Edit Profile</Button>{' '}                
                <Button variant = "outline-danger btn-lg" onClick = {() => {history.push('/instructoreditprofile')}}>Instructor Edit Profile</Button>{' '}              
            </div>
        </div>
    )
}

export default Home;
