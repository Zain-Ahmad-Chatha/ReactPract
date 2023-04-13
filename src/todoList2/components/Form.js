import React, { useState } from "react";

// destructuring from props.

const Form = ({ handleSubmit }) => {
  const [newItem, setNewItem] = useState("");
  const addToList = (event) => {
    event.preventDefault();
    if (!newItem) return;
    handleSubmit(newItem);
    setNewItem("");
  };

  return (
    <form onSubmit={addToList} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
          name="item"
        />
      </div>
      <button className="btn1">Add</button>
    </form>
  );
};

export default Form;
