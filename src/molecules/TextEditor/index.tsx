import React, { useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


interface Props {
  name: string;
  onChange: Function

}
const  EditorConvertToHTML: React.FC<Props> = (name, onChange) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())

 const onEditorStateChange = (newEditorState: any) => {
    setEditorState(newEditorState)
  };
    return (
      <div>
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={onEditorStateChange}
        />
      </div>
    )
}

export default EditorConvertToHTML