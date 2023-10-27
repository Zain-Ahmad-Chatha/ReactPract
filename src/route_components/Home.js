import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

import { EditorState, ContentState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from "draft-convert";

import DOMPurify from "dompurify";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import homeStyle from "./home.module.css";
const Home = () => {
  // const navigate = useNavigate();

  // const onContact = () => {
  //   navigate("/contact");
  // };
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const [convertedContent, setConvertedContent] = useState(null);

  const _contentState = ContentState.createFromText("Sample content state");
  const raw = convertToRaw(_contentState); // RawDraftContentState JSON
  const [contentState, setContentState] = useState(raw); // ContentState JSON

  useEffect(() => {
    let html = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(html);
  }, [editorState]);

  function createMarkup(html) {
    return {
      __html: DOMPurify.sanitize(html),
    };
  }

  console.log("convertedContent:", createMarkup(convertedContent));
  return (
    <React.Fragment>
      {
        // this is called shared outlet routes, using nested routes.
        // it says that your parent route should contain outlet
      }
      <h1>Home Page </h1>

      <div className="App">
        <header className={homeStyle.AppHeader}>
          Rich Text Editor Example
        </header>

        <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
          // defaultContentState={contentState}
          // onContentStateChange={setContentState}
          wrapperClassName={homeStyle.wrapperClass}
          editorClassName={homeStyle.editorClass}
          toolbarClassName={homeStyle.toolbarClass}
          // toolbar={{
          //   options: ["inline", "blockType"],
          // }}
        />
        <hr></hr>
        <div
          className={homeStyle.preview}
          dangerouslySetInnerHTML={createMarkup(convertedContent)}
        ></div>
      </div>
    </React.Fragment>
  );
};

export default Home;

// <button onClick={onContact}>Go To Contact</button>
// &nbsp;
// <button onClick={() => navigate("/about")}>Go To About</button>
