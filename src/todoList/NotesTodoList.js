import React, { useEffect, useState } from "react";
import AddList from "./components/addList";
import EditNote from "./components/editNote";
import ShowAllList from "./components/showAllList";

const initialValue = [{ name: "Star Wars", description: "Return of the Jedi" }];

const NotesTodoList = () => {
  const [notes, setNotes] = useState(initialValue);
  const [addForm, setAddForm] = useState(false);
  const [editForm, setEditForm] = useState(false);

  const [editDetail, setEditDetail] = useState({
    name: "",
    description: "",
    index: 0,
  });

  const onEdithandle = (event, index, note) => {
    console.log("in edit");
    setEditDetail({
      index: index,
      name: note.name,
      description: note.description,
    });
    setEditForm(true);
  };
  const onDeleteHandle = (event, index) => {
    return setNotes(notes.filter((notes, ind) => ind != index));
  };

  const updateOriginalState = () => {
    console.log(editDetail);
    const tempArr = notes;
    tempArr[editDetail?.index] = {
      name: editDetail.name,
      description: editDetail.description,
    };
    setNotes(tempArr);
  };
  const onSubmit = (formValues) => {
    const { name, description } = formValues;
    if (!name || !description) {
      return;
    }
    setNotes((prev) => [...prev, { name, description }]);
    setAddForm(false);
  };
  return (
    <div className="ui container">
      <div className="header"></div>

      <div className="header">
        <h1> To Do List of Notes </h1>
      </div>
      <hr />
      <ShowAllList
        notes={notes}
        onDelete={onDeleteHandle}
        onEdit={onEdithandle}
      />

      <button
        className="ui right floated button green"
        onClick={() => setAddForm(true)}
      >
        Create Note
      </button>

      {addForm ? <AddList onSubmit={onSubmit} /> : ""}

      {editForm ? (
        <EditNote props={editDetail} onSubmit={updateOriginalState} />
      ) : (
        ""
      )}
    </div>
  );
};

export default NotesTodoList;
