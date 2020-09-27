import React, { useEffect, useState } from 'react';
// ES module
import Editor from 'react-medium-editor';

// load theme styles with webpack
require('medium-editor/dist/css/medium-editor.css');
require('medium-editor/dist/css/themes/default.css');

// CommonJS enviroment
// var Editor = require('react-medium-editor').default;

class EditChapter extends React.Component {
  state = {
    text: 'Fusce dapibus, tellus ac cursus commodo'
  };

  handleChange = (text, medium) => {
    this.setState({text: text});
  }

  render() {
    return (
      <div className="app">
        <h1>react-medium-editor</h1>
        <h3>Html content</h3>
        <div>{this.state.text}</div>

        <h3>Editor #1 (&lt;pre&gt; tag)</h3>
        <Editor
          tag="pre"
          contentEditable={this.state.text}
          onChange={this.handleChange}
          options={{
            autoLink: true,
                delay: 1000,
                targetBlank: true,
                toolbar: {
                    buttons: [
                    'bold', 
                    'italic', 
                    'quote', 
                    'underline', 
                    'anchor', 
                    'h1',
                    'h2', 
                    'h3',
                    'h4',
                    'h5',
                    'h6',
                    'strikethrough',
                    'subscript',
                    'superscript',
                    'pre',
                    'image',
                    'html',
                    'justifyCenter'
                    ],
                    diffLeft: 25,
                    diffTop: 10,
                },
                anchor: {
                    placeholderText: 'Type a link',
                    customClassOption: 'btn',
                    customClassOptionText: 'Create Button'
                },
                paste: {
                    cleanPastedHTML: true,
                    cleanAttrs: ['style', 'dir'],
                    cleanTags: ['label', 'meta'],
                    unwrapTags: ['sub', 'sup']
                },
                anchorPreview: {
                    hideDelay: 300
                },
                placeholder: {
                    text: 'Tell your story...'
                }
        }}
        />
        <h3>Editor #2</h3>
        <Editor
          text={this.state.text}
          onChange={this.handleChange}
        />
      </div>
    );
  };

  
}

export default EditChapter;