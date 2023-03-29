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

/* Redux Toolkit Practice */
import { Cake, IceCream, Users } from "../rtk/components";

import rtkStore from "../rtk/app";

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
    <div>
      <h3 style={{ textAlign: "center", background: "#C2C7BF" }}>
        With Redux Practice
      </h3>
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
      <hr />
      <div style={{ margin: "10px" }}>
        <h3 style={{ textAlign: "center", background: "#C2C7BF" }}>
          With Redux Toolkit Practice
        </h3>
        <Provider store={rtkStore}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Cake />
            <IceCream />
            <Users />
          </div>
        </Provider>
      </div>
    </div>
  );
};

export default Comment;
