import React from 'react';
import './App.css';
import Submit from "./components/Submit"

class App extends React.Component {
  
  render() {
  return (
    <div className="App">
      <h1>Heather's To Do List</h1>
      <Submit />
    </div>
  );
}
}


export default App;