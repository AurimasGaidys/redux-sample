import React, { Component } from "react";
import "./App.css";

import Users from "./components/users";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Assignment by Aurimas Gaidys</h2>
        </div>
        <div className="App-intro">
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
