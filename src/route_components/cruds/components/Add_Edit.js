import React, { useState } from "react";

const Add_Edit = ({ id, name, addProduct, heading, btnHeading }) => {
  const [product, setProduct] = useState({
    id: id || "",
    name: name || "",
  });
  const onSubmit = (event) => {
    event.preventDefault();
    addProduct({
      id: product.id ? product.id : crypto.randomUUID(),
      name: product.name,
    });
  };
  return (
    <div className="add_edit">
      <div style={{ margin: "10px" }}>
        <h3> {heading} </h3>
      </div>
      <form onSubmit={onSubmit} style={{ margin: "10px" }}>
        <label>Name : </label>
        <input
          type={"text"}
          value={product.name}
          name="name"
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />

        <button style={{ marginLeft: "10px" }} type="submit">
          {btnHeading}
        </button>
      </form>
    </div>
  );
};

export default Add_Edit;
