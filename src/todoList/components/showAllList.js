import React from "react";
class ShowAllList extends React.Component {
  renderNotes = () => {
    {
      return this.props.notes.map((note, index) => {
        return (
          <div className="item" key={index}>
            <div className="actions">
              <button
                className="ui right floated button danger"
                onClick={(event) => this.props.onDelete(event, index)}
              >
                Delete
              </button>
              <button
                className="ui right floated button primary"
                onClick={(event) => this.props.onEdit(event, index, note)}
              >
                Edit
              </button>
            </div>

            <img
              className="ui avatar image"
              src="/images/avatar/small/helen.jpg"
            />
            <div className="content">
              <div className="header">{note.name}</div>
              <div className="description">{note.description}</div>
            </div>
          </div>
        );
      });
    }
  };
  render() {
    if (!this.props.notes) {
      return <div>Loading Notes...</div>;
    }
    return <div className="ui list celled aligned"> {this.renderNotes()} </div>;
  }
}

export default ShowAllList;
