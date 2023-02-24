import React, { useState } from "react";

import { Button, FormGroup, FormControl, Form } from "react-bootstrap";

import { languages } from "./utils";
import LanguageList from "./LanguageList";

import LanguageSection from "./LanguageSection";

/* practice for redux.. */

import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./reduxComponents/CakeContainer";
import HooksCakeContainer from "./reduxComponents/HooksCakeContainer";

const Comment = () => {
  const [state, setState] = useState({
    show: false,
    newTitle: "",
  });

  const handleTitleSubmit = (e) => {
    e.preventDefault();
    setState({ ...state, show: !state.show });
  };

  const handleTitleChange = (e) => {
    setState({ ...state, newTitle: e.target.value });
  };

  const changeComponent = () => {
    setState({ ...state, show: !state.show });
  };

  const render = () => {
    if (state.show) {
      return (
        <Form onSubmit={(e) => handleTitleSubmit(e)}>
          <FormGroup controlId="formInlineTitle">
            <FormControl
              type="text"
              onChange={(e) => handleTitleChange(e)}
              placeholder={"Enter Text"}
              value={state.newTitle}
            ></FormControl>
          </FormGroup>
        </Form>
      );
    } else {
      return (
        <div>
          <Button onClick={changeComponent}>
            <h6> Edit Title </h6>
          </Button>{" "}
          <br></br>
          {state.newTitle}
        </div>
      );
    }
  };

  return (
    <div style={{ margin: "10px", display: "flex" }}>
      <div style={{ flex: 1 }}>
        <h4>Edit Title Component </h4>
        {render()}
        <hr />

        <h4>Languages Component</h4>
        <LanguageSection header="Languages" languages={languages} />
      </div>

      <Provider store={store}>
        <div style={{ flex: 1 }}>
          <CakeContainer />
        </div>
        <div style={{ flex: 1 }}>
          <HooksCakeContainer />
        </div>
      </Provider>
    </div>
  );
};

export default Comment;
