import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {

    // all functions & states were here before this. 
    //but now liftinng up the states so that parent child relations can exist.

    render() {
        const { on_Reset, on_Delete, on_Decrement, on_Increment, counts } = this.props;// object destructing.
        return (<div>
            <button className="btn btn-primary m-3"
                onClick={on_Reset}>
                Reset
            </button>

            {counts.map(entry => (
                <Counter key={entry.id}
                    onDelete={on_Delete}
                    onIncrement={on_Increment}
                    onDecrement={on_Decrement}
                    counter={entry}
                >
                    <h4>Counter #: {entry.id}</h4>
                </Counter>
            ))}

            <hr className="mt-3" />
            {this.props.counts.map(entry =>
                <ul key={entry.id}> id : {entry.id} -value: {entry.value}</ul>
            )}
        </div>);
    }
}

export default Counters;