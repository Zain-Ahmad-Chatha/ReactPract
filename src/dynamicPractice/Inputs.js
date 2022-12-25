import React, { useState } from "react";
import moment from "moment";
export const SECOND_INITIAL = [
  {
    prod_name: "Pen",
    Unit: "MB",
    keyValues: [
      { key: "Price", value: "aaaa" },
      { key: "End Date", value: "end" },
      { key: "Start Date", value: "12/11/2022" },
      { key: "Agent", value: "12" },
    ],
    // CreatedAt: new Date().toLocaleDateString(),
    CreatedAt: moment(new Date()).format("DD/MM/YYYY HH:mm:ss A"),
    UpdatedAt: new Date(),
    createdBy: {
      id: 1,
      name: "zain",
    },
    updatedBy: {
      id: 1,
      name: "zain",
    },
    history: [
      {
        prod_name: "Pen",
        Unit: "MB",
        keyValues: [
          { key: "Price", value: "aaaa" },
          { key: "End Date", value: "end" },
          { key: "Start Date", value: "12/11/2022" },
          { key: "Agent", value: "12" },
        ],
        CreatedAt: new Date(),
        UpdatedAt: new Date(),
        createdBy: {
          id: 1,
          name: "zain",
        },
        updatedBy: {
          id: 1,
          name: "zain",
        },
      },
      {
        prod_name: "Pen",
        Unit: "MB",
        keyValues: [
          { key: "Price", value: "aaaa" },
          { key: "End Date", value: "end" },
          { key: "Start Date", value: "12/11/2022" },
          { key: "Agent", value: "12" },
        ],
        CreatedAt: new Date(),
        UpdatedAt: new Date(),
        createdBy: {
          id: 1,
          name: "zain ahmad",
        },
        updatedBy: {
          id: 1,
          name: "zain ahmad",
        },
      },
    ],
  },
];

export const seconList = [
  {
    prod_name: "Pencil",
    Unit: "MB",
    keyValues: [
      { key: "Price", value: "aaaa" },
      { key: "End Date", value: "end" },
      { key: "Start Date", value: "12/11/2022" },
      { key: "Agent", value: "12" },
      { key: "Update Date", value: "10/12/20223" },
    ],
    CreatedAt: moment(new Date()).format("DD/MM/YYYY HH:mm:ss A"),
    UpdatedAt: new Date(),
    createdBy: {
      id: 1,
      name: "zain",
    },
    updatedBy: {
      id: 1,
      name: "zain",
    },
    history: [
      {
        prod_name: "Pen",
        Unit: "MB",
        keyValues: [
          { key: "Price", value: "aaaa" },
          { key: "End Date", value: "end" },
          { key: "Start Date", value: "12/11/2022" },
          { key: "Agent", value: "12" },
        ],
        CreatedAt: new Date(),
        UpdatedAt: new Date(),
        createdBy: {
          id: 1,
          name: "zain",
        },
        updatedBy: {
          id: 1,
          name: "zain",
        },
      },
    ],
  },
];

const Inputs = () => {
  const [formValues, setFormValues] = useState([{ name: "", email: "" }]);
  const [second, setSecond] = useState(SECOND_INITIAL);
  const [selection, setSeletion] = useState([
    { id: 1, name: "Price 1", show: true },
    { id: 2, name: "Price 2", show: true },
    { id: 3, name: "Price 3", show: true },
    { id: 4, name: "Price 4", show: true },
    { id: 5, name: "Price 5", show: true },
  ]);
  const [input, setInput] = useState("");
  const [value, setValue] = React.useState("fruit");
  const options = [
    { label: "Fruit", value: "fruit" },
    { label: "Vegetable", value: "vegetable" },
    { label: "Meat", value: "meat" },
  ];

  const pushSelect = () => {
    setSeletion([...selection, { id: selection.length + 1, name: input }]);
    setInput("");
  };

  const handleChangeSelect = (e) => {
    console.log("change : ", e.target.value);
  };

  const handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };
  const addFormFields = () => {
    setFormValues([...formValues, { name: "", email: "" }]);
  };
  const removeFormFields = (index) => {
    let newFormValues = [...formValues];
    newFormValues.splice(index, 1);
    setFormValues(newFormValues);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("e : ", e);
    console.log(formValues);
  };
  const onAdd = () => {
    setSecond([...second, ...seconList]);
  };

  const renderObject = () => {
    return (
      <div>
        {second.map((obj, index) => {
          return (
            <div key={index}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <h1>{obj.prod_name}</h1>

                <div>
                  <button style={{ textAlign: "center" }}>Edit </button>

                  <button style={{ textAlign: "center", marginLeft: "5px" }}>
                    History
                  </button>
                </div>
                <div style={{ background: "whitesmoke" }}>
                  {obj.keyValues.map((innerObj) => {
                    return (
                      <p key={innerObj.key}>
                        {innerObj.key} : {innerObj.value}
                      </p>
                    );
                  })}
                </div>
                <div> {obj.CreatedAt} </div>
              </div>
            </div>
          );
        })}

        <button onClick={onAdd}>Add</button>
      </div>
    );
  };

  const handleChange1 = (event) => {
    setValue(event.target.value);
  };

  const Select = ({ label, value, options, onChange }) => {
    return (
      <label>
        {label}
        <select value={value} onChange={onChange}>
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>
    );
  };

  const SelectListRender = () => {
    return (
      <div style={{ margin: "20px" }}>
        <Select
          label="What do we eat?"
          options={options}
          value={value}
          onChange={handleChange}
        />
        <p>We eat {value}!</p>
      </div>
    );
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="container mt-2">
        {SelectListRender()}
        {renderObject()}
        {formValues.map((element, index) => (
          <div className="d-flex" key={index}>
            <div className="form-group col-lg-6">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={element.name || ""}
                onChange={(e) => handleChange(index, e)}
              />
              <label>Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                value={element.email || ""}
                onChange={(e) => handleChange(index, e)}
              />
            </div>
            <div className="mt-5 mx-2">
              {index ? (
                <button
                  type="button"
                  style={{ marginTop: "40px" }}
                  className="btn btn-danger"
                  onClick={() => removeFormFields(index)}
                >
                  Remove
                </button>
              ) : null}
            </div>
          </div>
        ))}
        <div className="mt-2 ">
          <button
            className="btn btn-primary mx-1"
            type="button"
            onClick={() => addFormFields()}
          >
            Add
          </button>
          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </div>
      </form>

      <div className="container mt-3">
        <select className="form-control" onChange={handleChangeSelect}>
          {selection.map((id) => {
            return <option key={id.id}> {id.name} </option>;
          })}
        </select>
        <input
          type="text"
          className="form-control mt-1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn btn-outline-primary mt-2" onClick={pushSelect}>
          Add Key
        </button>
      </div>
    </>
  );
};
export default Inputs;
