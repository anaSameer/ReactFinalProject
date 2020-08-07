import React, { Component } from "react";
import "./App.css";
import WorkersCards from './components/WorkersCards';

class App extends Component {
  render() {
    return (
      <div>
        <WorkersCards />
      </div>
    );
  }
}

export default App;