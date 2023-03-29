import React, { useState } from "react";

const Add_Edit = (props) => {
  const [values, setValues] = useState({
    id: props.data.id,
    name: props.data.name,
  });
  const add = (event) => {
    event.preventDefault();
    props.addProduct(values, props.data.index);
  };
  return (
    <div className="add_edit">
      <div>
        <h3> {props.heading} </h3>
      </div>
      <form onSubmit={add}>
        <label>ID : </label>
        <input
          type={"number"}
          value={values.id}
          name="id"
          onChange={(e) => setValues({ ...values, id: e.target.value })}
        />
        <label>Name : </label>
        <input
          type={"text"}
          value={values.name}
          name="name"
          onChange={(e) => setValues({ ...values, name: e.target.value })}
        />

        <button style={{ marginLeft: "10px" }} type="submit">
          {props.btnHeading}
        </button>
      </form>
    </div>
  );
};

export default Add_Edit;
