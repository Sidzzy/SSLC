import React, { useEffect, useState } from 'react';
import Editor from 'react-medium-editor';
import { editChapterOptions, dumbContent } from '../util';

// load theme styles with webpack
// require('medium-editor/dist/css/medium-editor.css');
// require('medium-editor/dist/css/themes/default.css');

const EditChapter = props => {
    const [text, setText] = useState(dumbContent);

    useEffect( () => {
        //TODO: call the api which is throwing all the content of this chapter.
    }, []);

    const handleChange = (text, medium) => {
        console.log(text);
        setText(text);
    }

    const htmlInputChange = event => {
        event.persist();
        setText(event.target.value);
    }

    const submitContentChange = event => {
        event.preventDefault();
        //TODO: call the api which will update the edited content, may require course and chapter ID.
    }

    return (
        <div>
            <h1>Edit The Content</h1>
            <form className="row justify-content-center" onSubmit={submitContentChange}>
                <h3 >Editor:</h3>
                <Editor
                    tag="pre"
                    contentEditable={text}
                    text={text}
                    onChange={handleChange}
                    options={editChapterOptions}
                    className="ab-px-5"
                />
                <button type="submit">Save Changes</button>
            </form>
            <br/><br/>
            <h3>Preview:</h3>
            <span dangerouslySetInnerHTML={{__html: text}}></span>
            <br/><br/>
            <h3 className="row justify-content-center">Html content</h3>
            <input value={text} onChange={htmlInputChange} />
        </div>
    );

}

export default EditChapter;