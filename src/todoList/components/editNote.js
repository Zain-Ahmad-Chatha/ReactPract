import React, { useState } from "react";

const EditNote = ({ name, description, index, onSubmit }) => {
  const [state, setState] = useState({
    name: name,
    description: description,
    index: index,
  });
  const onSubmitForm = (event) => {
    event.preventDefault();
    onSubmit(state.name, state.description);
  };

  return (
    <form className="ui form" onSubmit={(event) => onSubmitForm(event)}>
      <div>
        <h1>Edit A Note</h1>
      </div>
      <div className="field">
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={(event) => setState({ ...state, name: event.target.value })}
          value={state.name}
        />
      </div>
      <div className="field">
        <label>Description</label>
        <input
          type="text"
          name="description"
          placeholder="Description"
          onChange={(e) => setState({ ...state, description: e.target.value })}
          value={state.description}
        />
      </div>
      <button className="ui button green" type="submit">
        Update Note
      </button>
    </form>
  );
};
export default EditNote;
