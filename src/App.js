import React, { Component } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';
import Instruction from './Components/Instruction';

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <Instruction/>
      <SearchBar/>   
      </div>
    );
  }
}

export default App;
