import React from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';
// import Counter from './components/counter';

class App extends React.Component {

  state = { 
    count:[
        {id:1, value:4},
        {id:2, value:0},
        {id:3, value:0},
        {id:4, value:0}
    ]
 }
 handle_deleteBtn = (deleteIDS)=>{
   console.log('calling from child..');
    const array = this.state.count.filter(c => c.id !== deleteIDS);
    this.setState({count:array})
}
handle_resetBtn = () => {
    const arr = this.state.count.map(c => {
        c.value = 0;
        return c;
    })
    this.setState({count:arr});
}
handle_increment = (counter) => {
    const array = [...this.state.count];
    const index = array.indexOf(counter);
    array[index] = {...counter}
    array[index].value++;
    this.setState({count:array});
 }
 handle_decrement = (dec)=>{
    const copy = [...this.state.count];
    const index = copy.indexOf(dec);
    copy[index]= {...dec};
    copy[index].value--;
    this.setState({count:copy});
 }

//  callAPI() {
//   fetch("http://localhost:4200/test")
//       .then(res => res.text())
//       .then(res => this.setState({ apiResponse: res }));
// }

// componentWillMount() {
//   this.callAPI();
// }

render(){
  return (
    <React.Fragment>
      <NavBar
      totalCounts={this.state.count.filter(c => c.value>0).length}
      > </NavBar>
      <main className="container">
        <Counters
          counts={this.state.count}
          on_Reset={this.handle_resetBtn}
          on_Delete={this.handle_deleteBtn}
          on_Increment={this.handle_increment}
          on_Decrement={this.handle_decrement}
        />
      </main>

      {/* <form action="../../post" method="post" 
              className="form">
          <button type="submit">Connected?</button>
        </form> */}

    </React.Fragment>
    );//end return
  } //end render
}//end class


export default App;
