import React, { useRef, useState } from "react";

import ReactSummernote from "react-summernote";
// import "react-summernote/dist/react-summernote.css";
// import "react-summernote/lang/summernote-ru-RU";

// Import bootstrap(v3 or v4) dependencies
// import "bootstrap/js/modal";
// import "bootstrap/js/dropdown";
// import "bootstrap/js/tooltip";
// import "bootstrap/dist/css/bootstrap.css";

const RichTextEditor = () => {
  const [state, setState] = useState({
    body: `${(<p>wroknfdslkafdsf </p>)}`,
  });

  let sumRef = useRef(null);

  return (
    <div
      data-id={"data-react-summernote-text1"}
      className="bootstrap-iso richEditor"
    >
      <ReactSummernote
        ref={(el) => (sumRef.current = el)}
        value={state.body}
        options={{
          lang: "en",
          width: "100%",
          height: 100,
          dialogsInBody: true,
          disableDragAndDrop: true,
          toolbar: [
            ["style", ["style"]],
            ["font", ["color", "bold", "underline", "clear"]],
            ["fontname", ["fontname"]],
            ["para", ["ul", "ol", "paragraph", "height"]],
            ["table", ["table"]],
            ["insert", ["hr", "emoji"]][("view", ["fullscreen", "codeview"])], /// adding for emoji,
          ],
          removeModule: "linkPopover",
        }}
        onChange={(content) => setState({ ...state, body: content })}
        data-id={"data-summernote-field-text"}
      />
    </div>
  );
};

export default RichTextEditor;
