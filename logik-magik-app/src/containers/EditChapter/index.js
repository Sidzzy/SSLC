import React, { useEffect, useState } from 'react';
import ChapterContent from './components/ChapterContent';
import Assignment from './components/Assignment';
require('medium-editor/dist/css/medium-editor.css');
require('medium-editor/dist/css/themes/default.css');

const EditChapter = props => {
    const [index, setIndex] = useState('0');
    const query = new URLSearchParams(props.location.search);
    
    return (
        <div>
            <form onSubmit="" className="row justify-content-center">
                <input value={query.get('chapter')} />
                <button type="submit">Edit Chapter Name</button>
            </form>
            <br/> <br/>
            <div>
                <button type="button" onClick={() => setIndex('0')}>Edit Content</button>
                <button type="button" onClick={() => setIndex('1')}>Edit Assignment</button>
            </div>
            {index === '0' && <ChapterContent />}
            {index === '1' && <Assignment />}
        </div>
    );

}

export default EditChapter;