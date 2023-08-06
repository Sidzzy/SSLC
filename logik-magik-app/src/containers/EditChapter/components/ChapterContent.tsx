import React, { useEffect, useState } from 'react';
// import Editor from 'react-medium-editor';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, RawDraftContentState } from 'draft-js';
import { editChapterOptions, dumbContent } from '../util';
import draftToHtml from 'draftjs-to-html';
import styles from '../EditChapter.module.css';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Sidebar  from '../../../components/Sidebar/Sidebar';
// import css from 'react-style-object-to-css';
// import htmlToDraft from 'html-to-draftjs';

// load theme styles with webpack
// require('medium-editor/dist/css/medium-editor.css');
// require('medium-editor/dist/css/themes/default.css');

const EditChapter = (props: any) => {
    const [text, setText] = useState(dumbContent);
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    useEffect( () => {
        //TODO: call the api which is throwing all the content of this chapter.
    }, []);

    const handleChange = (changedEditorState: any) => {
        console.log(changedEditorState);
        setEditorState(changedEditorState);
    }

    const htmlInputChange = (event: any) => {
        event.persist();
        setText(event.target.value);
    }

    const submitContentChange = (event: any) => {
        event.preventDefault();
        //TODO: call the api which will update the edited content, may require course and chapter ID.
    }
    console.log("draft to html without raw=", draftToHtml(convertToRaw(editorState.getCurrentContent())));
    return (
        <div className='flex flex-col'>
            <div className='container'>
                <h1 className=''>Edit The Content</h1>
                {/* <form  onSubmit={submitContentChange}>
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
                </form> */}
                <div className={styles.editorWrapper}>
                    <Editor
                        editorState={editorState}
                        // wrapperClassName={styles.editiorWrapper}
                        // wrapperStyle={styles.editorWrapper}
                        // editorClassName="demo-editor"
                        toolbarClassName="toolbar-class"
                        wrapperClassName="wrapper-class"
                        // editorClassName="editor-class"
                        editorClassName={`demo-editor ${styles.editor}`}
                        onEditorStateChange={handleChange}
                    />
                </div>
                <br/><br/>
                <div>
                    <h3>Preview:</h3>
                    <div className={styles.preview}>
                        <span className='text-' dangerouslySetInnerHTML={{__html: draftToHtml(convertToRaw(editorState.getCurrentContent()))}}></span>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    );

}

export default EditChapter;