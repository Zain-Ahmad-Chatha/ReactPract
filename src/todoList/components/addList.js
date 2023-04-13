import React from "react";
class AddList extends React.Component {
  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      name: event.target.name.value,
      description: event.target.description.value,
    });
  };
  render() {
    return (
      <form className="ui form" onSubmit={this.onSubmit}>
        <div className="field">
          <label>Name</label>
          <input type="text" name="name" placeholder="Name" />
        </div>
        <div className="field">
          <label>Description</label>
          <input type="text" name="description" placeholder="Description" />
        </div>
        <button className="ui button green" type="submit">
          Add Note
        </button>
      </form>
    );
  }
}

export default AddList;
// {renderUpdateBtn()}

// value={editDetail.description}
// onChange={(event) =>
//   setEditDetail({
//     ...editDetail,
//     description: event.target.description.value,
//   })
// }
