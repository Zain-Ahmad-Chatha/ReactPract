import React, { useState } from "react";
// import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

import { Editor, EditorState, ContentState } from "draft-js";
import "draft-js/dist/Draft.css";

// import { EditorState, ContentState } from "draft-js";
// import Editor from "draft-js-plugins-editor";
// import createTablePlugin from "draft-js-table-plugin";
// import "draft-js-table-plugin/lib/plugin.css";

// const tablePlugin = createTablePlugin();
// const plugins = [tablePlugin];

const Contact = () => {
  const navigate = useNavigate();

  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(ContentState.createFromText("enter text.."))
  );

  const editor = React.useRef(null);

  // const [editorState, setEditorState] = useState(() =>
  //   EditorState.createEmpty()
  // );

  React.useEffect(() => {
    focusEditor();
  }, []);
  function focusEditor() {
    editor.current.focus();
  }
  const onChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  return (
    <React.Fragment>
      <h1>The Contact page</h1>
      <button onClick={() => navigate("/")}>Go To Home</button>
      <hr />
      {
        // testing on editor package.
      }
      <div style={{ border: "1px solid black", height: "200px" }}>
        <h2>Testing on Editor </h2>
        <hr />
        <Editor
          // editorState={editorState}
          // onChange={onChange}
          // plugins={plugins}
          ref={editor}
          editorState={editorState}
          onChange={setEditorState}
        />
      </div>
      &nbsp;
    </React.Fragment>
  );
};

export default Contact;
