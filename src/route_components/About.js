import React, { useState } from "react";
// import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

import {
  Editor,
  EditorState,
  RichUtils,
  getDefaultKeyBinding,
  KeyBindingUtil,
  ContentState,
  convertToRaw,
  ContentBlock,
} from "draft-js";

import TableWrapper from "./TableWrapper";
import Toolbar from "./Toolbar";
import "draft-js/dist/Draft.css";
// import "./ChatTableEditor.css"; // Custom styles for the editor

const About = () => {
  const navigate = useNavigate();

  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [state, setState] = useState("hello");

  const onChange = (newEditorState) => {
    console.log("on change", newEditorState);
    console.log("on change", newEditorState.target);
    setEditorState(newEditorState);
  };

  const handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      onChange(newState);
      return "handled";
    }

    return "not-handled";
  };

  const mapKeyToEditorCommand = (e) => {
    if (KeyBindingUtil.hasCommandModifier(e) && e.keyCode === 83) {
      // 83 is the keycode for 'S'
      return "save";
    }

    return getDefaultKeyBinding(e);
  };

  const handleKeyBindingFn = (e) => {
    if (KeyBindingUtil.hasCommandModifier(e) && e.keyCode === 75) {
      // 75 is the keycode for 'K'
      return "insert-table";
    }

    return getDefaultKeyBinding(e);
  };

  const handleToolbarClick = (command) => {
    console.log("calling hangle clicking...");
    if (command === "save") {
      const contentState = editorState.getCurrentContent();
      const rawContentState = convertToRaw(contentState);
      console.log(rawContentState); // Example: Saving the table data
    } else if (command === "insert-table") {
      const newState = RichUtils.toggleBlockType(editorState, "table");
      onChange(newState);
    }
  };

  // contentBlock: ContentBlock
  const blockRenderFn = (contentBlock) => {
    // contentBlock = new ContentBlock();
    // const type = contentBlock.getType();
    const type = "table";
    if (type === "table") {
      return {
        component: TableWrapper,
        editable: false,
      };
    }
  };

  // const blockRenderMap = Immutable.Map({
  //   table: {
  //     element: "div",
  //     wrapper: <TableWrapper />,
  //   },
  // });

  // const extendedBlockRenderMap =
  //   DefaultDraftBlockRenderMap.merge(blockRenderMap);

  // const tableStyleFn = (contentBlock: ContentBlock) => {
  //   const type = contentBlock.getType();
  //   if (type === 'table') {
  //     return 'table-style';
  //   }
  // };

  const tableStyleFn = (contentBlock) => {
    // contentBlock = new ContentBlock();
    // const type = contentBlock.getType();
    const type = "table";
    if (type === "table") {
      return "table-style";
    }
  };

  const blockRendererFn = (contentBlock) => {
    // const type = contentBlock.getType();
    const type = "table";
    if (type === "table") {
      return {
        component: TableWrapper,
        editable: false,
      };
    }
  };

  return (
    <React.Fragment>
      <h1>The About page</h1>
      &nbsp;
      <button onClick={() => navigate("/contact")}>Go To Contact</button>
      <hr />
      <div>
        <Toolbar onToolbarClick={handleToolbarClick} />
        <Editor
          // blockRenderMap={extendedBlockRenderMap}
          placeholder={"enter text"}
          editorState={state}
          onChange={onChange}
          handleKeyCommand={handleKeyCommand}
          // keyBindingFn={mapKeyToEditorCommand}
          blockRendererFn={blockRenderFn}
          customStyleFn={tableStyleFn}
        />
      </div>
    </React.Fragment>
  );
};

export default About;
