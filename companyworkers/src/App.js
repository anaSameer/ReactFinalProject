import React, { Component } from "react";
import "./App.css";
import WorkersCards from './components/WorkersCards';
//import WorkerDetails from './components/WorkerDetails';

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