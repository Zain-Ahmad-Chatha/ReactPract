// import { Button } from 'bootstrap';
import React, { Component } from 'react';
class AgainCounter extends Component {
    state = { 
        count:0,
        tags: ['tag1', 'tag2', 'tag3']  // to iterate in react we use map function.
     }
    incrementCount = () => {
        this.setState({count:this.state.count+1})
    }  
    decrementCount = ()=>{
        this.setState({count:this.state.count-1});
    }
    // to get some images use path
    // https://picsum.photos/200;
    
    render() { 
        return (
            <div className='container mt-3'>
            <span style={this.getBadgeColor()}> { this.formatCount() } </span>
            <button className='btn btn-outline-primary' onClick={this.incrementCount}> Increment </button>
            <button className='btn btn-outline-primary ml-2' onClick={this.decrementCount}> Decrement </button>
            <hr/>
            <h4>Using index element.</h4>
            <ul>
                <li key={this.state.tags[0]}> {this.state.tags[0]} </li>
                <li key={this.state.tags[1]}> {this.state.tags[1]} </li>
                <li key={this.state.tags[2]}> {this.state.tags[2]} </li>
            <hr/>
            </ul>

            <h4>Using Map.</h4>

            <ul>
                {this.state.tags.map(tag => <li key={tag}> {tag} </li>)}
            </ul>
            
            </div>
        );
    }
    getBadgeColor(){
        let color = this.state.count===0?{color:'red', margin:'10px'}:{color:'success', margin:'10px'};
        return color;
    }
    formatCount(){
        // when the some code is repeating , prefer to use object destructor
       const {count} = this.state;
        return count===0?'Zero':count;
    }
}
 
export default AgainCounter;


