import React, {useState, useEffect} from 'react';
import { Button, Table, Form, Row, Col } from 'react-bootstrap';

const InstructorEditProfile = (props) => {
    const { history } = props;
    const [input, setInputs] = useState({handle:"",link:""});
    const [data, setData] = useState([
        {handle:'name', link:'Sumit Dutta'},
        {handle: 'email', link : 'sumitdutta252@gmail.com'},
        {handle:'number', link: '123456789'}
    ])
    useEffect( ()=>{
        //TODO: API Call
    }, []);

    const handleOnChange = event => {
        event.persist();
        setInputs(input =>({
            ...input,
            [event.target.name] : event.target.value
        }));
        console.log(input);
    }

    const handleOnDelete = (event) =>{
        const name = event.target.name
        setData(data.filter(item => item.handle !== name));
    };

    const handleSubmit = event => {
        if (event) {
            event.preventDefault();
            setData(data =>([
                ...data,
                {
                    handle: input.handle,
                    link: input.link
                }
            ]));
        }
        console.log(data);
    }

    return (
        <div>
            <h3>Instructor Edit Profile</h3>
            <Table striped bordered hover>
                <tbody> 
                    {data.map((datas, index) => {
                        return (
                            <tr key={index}>
                                <td>{datas.handle.toUpperCase()}</td>
                                <td>{datas.link}</td>
                                <td>
                                    <Button name={datas.handle} variant="outline-danger" onClick={handleOnDelete}>Delete</Button>
                                </td>
                            </tr>)
                        })}    
                </tbody>
            </Table>
            <Form onSubmit={handleSubmit}>
                <h4>ADD NEW HANDLE</h4>
                <Form.Group as={Row} controlId="basicHandle">
                    <Form.Label column sm="2">ENTER SITE NAME</Form.Label>
                    <Col sm="5">
                        <Form.Control name="handle" type="text" value={input.handle} onChange={handleOnChange}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="basicLink">
                    <Form.Label column sm="2">ENTER LINK</Form.Label>
                    <Col sm="5">
                        <Form.Control name="link" type="text" value={input.link} onChange={handleOnChange}/>
                    </Col>
                </Form.Group>
                <Button variant="primary btn-lg" type="submit">Submit</Button>
            </Form>
        </div>
    )
}

export default InstructorEditProfile;
