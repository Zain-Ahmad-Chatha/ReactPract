import React from "react";

class Counter extends React.Component {
  // anotherState = {
  //     count:20,
  //     Firstname:'zain',
  //     LastName:'hassan'
  // }
  // state={
  // value:this.props.counter.value
  // tags:[
  //     {id:1,nm:'TagName 1'},
  //     {id:2,nm:'TagName 2'}
  // ]
  // };

  render() {
    return (
      <div className="mx-3 mt-3">
        {/* <h3>{this.props.children}</h3> */}

        <h4>Count# : {this.props.counter.id}</h4>
        <span style={{ fontSize: 20 }} className={this.getBatch()}>
          {this.formatCount()}
        </span>

        {/* <span className="mx-2">
                {this.anotherState.count}
            </span> */}
        <button
          className="btn btn-primary"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          +
        </button>

        <button
          className="btn btn-primary mx-1"
          onClick={() => this.props.onDecrement(this.props.counter)}
        >
          -
        </button>

        <button
          className="btn btn-danger btn-sm mx-1"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>

        {/* <ul>
             {this.state.tags.map(tag => <li key={tag.id}>{tag.id} - {tag.nm}</li>)}
            </ul> */}
      </div>
    );
  }
  //  deleteBtn = () =>{
  //      console.log('calling delete');
  //  }
  //  decrement = () =>{
  //      this.setState({count:this.state.value--})
  //  }

  getBatch() {
    let classes = "m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const countt = this.props.counter.value;
    return countt === 0 ? "Zero" : countt;
  }
}

export default Counter;
