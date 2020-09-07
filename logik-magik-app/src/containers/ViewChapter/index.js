import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

const ViewChapter = (props) => {
    const { history } = props;
    const query = new URLSearchParams(props.location.search);
    const [chapters, setChapters] = useState( [ { 'index':'0' ,'name':'Introduction'}, { 'index':'1' ,'name':'Install'}]);
    useEffect(()=>{
        //TODO: call the API
    },[]);
    return (
        <div>
            <h5><strong>{query.get('course')}</strong></h5>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Chapter Number</th>
                    <th>Chapter Name</th>
                    <th>Link</th>
                    </tr>
                </thead>
                <tbody>
                {chapters.map((chapter, index) => {
                    return (
                        <tr key={index}>
                            <td>{chapter.index}</td>
                            <td>{chapter.name}</td>
                            <td onClick={() => {
                                props.history.push(`/`)
                            }}>
                                <button>View Chapter</button>
                            </td>
                        </tr>)
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default ViewChapter;

