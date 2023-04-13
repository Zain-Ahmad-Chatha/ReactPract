import React from "react";
class ShowAllList extends React.Component {
  renderNotes = () => {
    const { notes, onDelete, onEdit } = this.props;

    return notes.map((note, index) => {
      return (
        <div className="item" key={index}>
          <div className="actions">
            <button
              className="ui right floated button danger"
              onClick={() => onDelete(note.id)}
            >
              Delete
            </button>
            <button
              className="ui right floated button primary"
              onClick={() => onEdit(index, note)}
            >
              Edit
            </button>
          </div>

          <img
            className="ui avatar image"
            src="/images/avatar/small/helen.jpg"
            alt="avatar"
          />
          <div className="content">
            <div className="header">{note.name}</div>
            <div className="description">{note.description}</div>
          </div>
        </div>
      );
    });
  };

  render() {
    if (!this.props.notes) {
      return <div>Loading Notes...</div>;
    }
    return <div className="ui list celled aligned"> {this.renderNotes()} </div>;
  }
}

export default ShowAllList;
