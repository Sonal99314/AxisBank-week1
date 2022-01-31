//import logo from './logo.svg';
//import './App.css';
/*
import ContentBox from "./components/ContentBox";
import ContentBoxinput from "./components/ContentBoxinput";
import StudentTable from "./components/StudentTable";
import Table from "./components/Table";
import day4 from "./Day4";

function App() {
  const studentList=[
    {slno:"1",
    name:"sonal",
    gender:"female"},
    {slno: "2",
  name:"neha",
gender:"female"},

];
  return (
    <div>
      
    
     <ContentBox message="From props message 3"/>
      <ContentBoxinput/>
      <Table/>
      <StudentTable  data={studentList}/>
      <ExampleComponent data="data">
       <>
        <h2>Hello World</h2>
        </>
      </ExampleComponent>
      
    </div>
    
    
  );
}

export default App;*/

//Activity 2 //increment and decrement

import React, { Component } from 'react';
import Day4 from './components/Day4';
//import day4 from "./Day4";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  }
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <div>
        <button onClick={this.IncrementItem}>Click to increment the value</button>
        <button onClick={this.DecreaseItem}>Click to decrease the value </button>
        <button onClick={this.ToggleClick}>
        { this.state.show ? 'Hide number' : 'Show number' }
        </button>
        { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
   
      </div>
    );
  }
}

export default App;