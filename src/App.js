import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './Todos'
import Background from './background.jpeg'



function App() {
  return (
    <div className="App" style={{"backgroundColor":"#be8abf","height":"50%","width":"50%","marginLeft":"25%","borderRadius":"15px"}}>
      <h1>Welcome to TodoApp :)</h1>
      <Todos />
    </div>
  );
}

export default App;
