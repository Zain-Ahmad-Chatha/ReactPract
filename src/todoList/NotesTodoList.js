import React, { useState } from "react";
import AddList from "./components/addList";
import EditNote from "./components/editNote";
import ShowAllList from "./components/showAllList";

const NotesTodoList = () => {
  const [notes, setNotes] = useState([]);
  const [addForm, setAddForm] = useState(false);
  const [editForm, setEditForm] = useState(false);

  const [editDetail, setEditDetail] = useState({
    name: "",
    description: "",
    index: 0,
  });

  const onEdithandle = (index, note) => {
    setEditDetail({
      index: index,
      name: note.name,
      description: note.description,
    });
    setEditForm(true);
  };
  const onDeleteHandle = (id) => {
    return setNotes(notes.filter((note) => note.id !== id));
  };

  const updateOriginalState = (name, description) => {
    const tempArr = [...notes];
    tempArr[editDetail?.index] = {
      name: name,
      description: description,
    };
    setNotes(tempArr);
    setEditForm(false);
  };
  const onSubmit = (formValues) => {
    const { name, description } = formValues;
    if (!name || !description) return;

    setNotes((prev) => [
      ...prev,
      { id: crypto.randomUUID(), name, description },
    ]);
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

      {addForm && <AddList onSubmit={onSubmit} />}

      {editForm && <EditNote {...editDetail} onSubmit={updateOriginalState} />}
    </div>
  );
};

export default NotesTodoList;
