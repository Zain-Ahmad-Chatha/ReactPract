import React from "react";
class EditNote extends React.Component {
  componentDidMount() {
    console.log("props : ", this.props);
    this.state = {
      name: this.props.name,
      description: this.props.description,
      index: this.props.index,
    };
  }

  onSubmit = (event, formValue) => {
    event.preventDefault();
    console.log("form", formValue);
    // props.onSubmit();
  };
  render() {
    return (
      <form className="ui form" onSubmit={this.onSubmit}>
        <div>
          <h1>Edit A Note</h1>
        </div>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
          />
        </div>
        <div className="field">
          <label>Description</label>
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={this.state.description}
          />
        </div>
        <button className="ui button green" type="submit">
          Add Note
        </button>
      </form>
    );
  }
}

export default EditNote;

// onChange={(event) =>
//     setEditDetail({ ...editDetail, name: event.target.name.value })
//   }

// onChange={(event) =>
//     setEditDetail({
//       ...editDetail,
//       description: event.target.description.value,
//     })
//   }
