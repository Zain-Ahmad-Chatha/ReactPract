import React, { useState } from "react";
import { Button } from "@blueprintjs/core";
import Select from "react-select";

export const all = [
  { value: "chocolate", label: "Chocolate", id: 1, status: true },
  { value: "strawberry", label: "Strawberry", id: 2, status: true },
  { value: "vanilla", label: "Vanilla", id: 3, status: true },
  { value: "chocolate 2", label: "Chocolate 2", id: 4, status: true },
  { value: "strawberry 2", label: "Strawberry 2", id: 5, status: true },
  { value: "vanilla 2", label: "Vanilla 2", id: 6, status: true },
];
export const selected = [
  { value: "chocolate", label: "Chocolate", id: 1, status: false },
  { value: "vanilla 2", label: "Vanilla 2", id: 6, status: false },
];

const MultiSelect = () => {
  const [mulitOptions, setMultiOptions] = useState({
    whole: all,
    values: selected,
  });
  const [required, setRequired] = useState(selected);
  const onChangeMultiSelect = (e) => {
    setMultiOptions({ ...mulitOptions, values: e });

    const ids = e.map((option) => option.id);
    const removedOption = required.filter((option) => !ids.includes(option.id));

    const newRequired = required.map((option) => {
      if (option.id == removedOption[0].id) {
        return {
          ...option,
          status: false,
          removed: true,
        };
      } else return option;
    });
    console.log("new Required : ", newRequired);
  };
  const onChangeMultiSelect1 = (e) => {
    if (required.length < e.length) {
      // mean new option added
      const ids = required.map((option) => option.id);
      let newAdded = e.filter((option) => !ids.includes(option.id));
      setRequired([...required, newAdded[0]]);
      setMultiOptions({ ...mulitOptions, values: e });
    } else {
      setMultiOptions({ ...mulitOptions, values: e });
      // mean i have to remove a option
      const availableOptionIds = e.map((option) => option.id);

      const removedOption = required.filter(
        (option) => !availableOptionIds.includes(option.id)
      );

      const newRequired = required.map((option) => {
        if (option.id == removedOption[0].id) {
          return {
            ...option,
            status: false,
            removed: true,
          };
        } else return option;
      });
      setRequired(newRequired);
    }
  };
  console.log("required : ", required);
  return (
    <div style={{ width: "1000px", margin: "auto" }}>
      Mulit Select Practice.
      <Select
        options={mulitOptions.whole}
        isMulti={true}
        value={mulitOptions.values}
        onChange={(e) => onChangeMultiSelect1(e)}
      />
      <br />
      {
        // <Button intent="primary" text={"Success"} />
      }
    </div>
  );
};

export default MultiSelect;
