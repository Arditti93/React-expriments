import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    //part 1
    button: 0,
    //part2
    button1: 0,
    //part3
    addressBook: [
    {name: "Adam Smith", number: 1232345678},
    {name: "Ben Simons", number: 2039872345},
    {name: "Alex Arditti", number: 1714568642},
    ],
    newName: '',
    newNumber: '',
    //part4 
    toDolist: [
    {task: "Eat Pretzels", date: "23.1.2020"},
    {task: "Watch Cricket", date: "12.1.2020"},
    {task: "make a to-do-lst", date: "23.1.2020"},
    ],
    newTask: '',
    newDate: '',
  }
  //part 1
  incrementer = () => {
    console.log("incrementer was clicked")
    this.setState({
      ...this.state,
      button: this.state.button + 1
    })

  } 
  //part 2
  incrementer1 = () => {
    console.log("incrementer1 was clicked")
    this.setState({
      ...this.state,
      button1: this.state.button1 + 1
    })

  }
  decrementer1 = () => { 
    if(this.state.button1 === 0){
      this.setState({
          button1:0
      });
    }else {
      this.setState(prevState => ({
          button1: prevState.button1 - 1
      }));
    }
  }
  //part3
  updateName = (event) => {
    this.setState ({
      ...this.state,
      // updateAddressBook: event.target.value 
      newName: event.target.value,
    })
  } 

  updateNumber = (event) => {
    this.setState ({
      ...this.state,
      newNumber: event.target.value,
    })
  }

  savecontact = (event) => {
    event.preventDefault ()
    this.setState ({
      ...this.state,
      addressBook: [...this.state.addressBook, {name: this.state.newName, number: this.state.newNumber}]
    })
  }
  //part4
  updateTask = (event) => {
    event.preventDefault ()
    this.setState ({
      ...this.State,
      newTask: event.target.value,
    })
  } 
  updateDate = (event) => {
    event.preventDefault ()
    this.setState ({
      ...this.State,
      newDate: event.target.value,
    })
  } 
  saveNew = (event) => { 
    event.preventDefault ()
    this.setState ({
      ...this.state,
      toDolist: [...this.state.toDolist, {task: this.state.newTask, date: this.state.newDate }]
    })
  }

  removeTask = (event, index1) => {
    event.preventDefault ()
    this.setState ({
    ...this.state, 
    toDolist: [...this.state.toDolist].slice(index1, -1),
    })
  }

  render(){
    //part3
    const allPersons = this.state.addressBook.map( (person, index) => {
      return <p key={index}>NAME - {person.name}  NUMBER - 0{person.number}</p>

    })
    //part4
    const list = this.state.toDolist.map( (item, index1) => {
      return <p key={index1}>To do - {item.task} <br /> complete by - {item.date} <button onClick={this.removeTask}>Remove</button></p> 
    })
    return (
      <>
        <div className="Part1">
          <h1>Count: {this.state.button}</h1>
          <button onClick={this.incrementer}>increment by 1</button>
        </div>
        <div className="Part2">
          <h1>Count: {this.state.button1}</h1>
          <button onClick={this.incrementer1}>increment</button>
          <button onClick={this.decrementer1}>decrement</button>
        </div>
        <div className="Part3">
          {/* {this.state.updateAddressBook.name} */}
          {allPersons}
          <input type="text" name="updateName" placeholder="Enter a name"
          onChange={this.updateName} 
          />
          <input type="text" name="updateNumber" placeholder="Enter a number"
          onChange={this.updateNumber} 
          />
          <button onClick={this.savecontact}>Update</button>
        </div>
        <div className="Part4">
          {list}
          <input type="text" name="updateTask" placeholder="To Do"
          onChange={this.updateTask}
          />
          <input type="text" name="updateDate" placeholder="Complete By"
          onChange={this.updateDate}
          />
          <button onClick={this.saveNew}>Update</button>
        </div>

        <div className="calculator">

          
        </div>
      </>
    ) 

  }
}



export default App;
