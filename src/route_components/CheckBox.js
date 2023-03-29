import React, { useState } from "react";

const CheckBox = () => {
  const [isChecked, setIsChecked] = useState(0);
  const [test, setTest] = useState([
    {
      id: "12",
      name: "Dashboard",
      value: 0,
      permissions: [0, 0, 0, 0],
    },
  ]);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  const handleOnChangeChild = (
    index,
    actionOn,
    childOp,
    parent_id,
    parent_index
  ) => {
    if (actionOn === "parent") {
      const temp = [...test];
      temp[index].value
        ? (test[index].value = false)
        : (test[index].value = true);
      setTest(temp);
    } else {
      const temp = [...test];
      temp[index].value = true;
      temp[parent_index].permissions[index] = childOp;
      setTest(temp);
    }
  };
  const handleOnChangeParent = (parent_index) => {
    const temp = [...test];
    temp[parent_index].value
      ? (temp[parent_index].value = false)
      : (temp[parent_index].value = true);
    temp[parent_index].permissions = [4, 3, 1, 2];
    setTest(temp);
  };
  const getLabel = (operationValue) => {
    if (operationValue === 0) return "Create";
    else if (operationValue === 1) return "Read";
    else if (operationValue === 2) return "Edit";
    else if (operationValue === 3) return "Delete";
  };

  const handleOnChangeCheckbox = () => {};

  return (
    <div className="App">
      {test.map((obj, p_index) => {
        return (
          <div key={p_index}>
            <label>
              <input
                type={"checkbox"}
                checked={obj.value}
                onChange={() => handleOnChangeParent(p_index)}
              />
              {obj.name}
            </label>
            {obj.permissions.map((child, c_index) => {
              return (
                <label key={c_index}>
                  <input
                    type={"checkbox"}
                    checked={child}
                    onChange={() =>
                      handleOnChangeChild(
                        c_index,
                        "child",
                        child,
                        obj.id,
                        p_index
                      )
                    }
                  />
                  {getLabel(c_index)}
                </label>
              );
            })}
          </div>
        );
      })}
      <label>
        {" "}
        <input
          type={"checkbox"}
          name="topping"
          checked={isChecked}
          onChange={(event) => handleOnChangeCheckbox(event)}
        />
        &nbsp; Dashboard
      </label>
      &nbsp;
      <label>
        {" "}
        Create
        <input type={"checkbox"}></input>
      </label>
      <label>
        &nbsp; Update
        <input type={"checkbox"}></input>
      </label>
      <label>
        &nbsp; Delete
        <input type={"checkbox"}></input>
      </label>
      <label>
        &nbsp; Edit
        <input type={"checkbox"}></input>
      </label>
    </div>
  );
};

export default CheckBox;
