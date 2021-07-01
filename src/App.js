import logo from './logo.svg';
import './App.css';
import React from 'react';
import {sqrt,derivative} from 'mathjs'


function App() {
  const [count, setCount] = React.useState(0);
  const [value, setValue] = React.useState(0);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input onChange={(e)=>{
          setCount(e.target.value)
          
        }} placeholder="enter a expression"
        type="string"></input>
        <button onClick={()=>{
         setValue(derivative(count,'x')) 
        }}>derivate</button>
        
        {value.toString()}
        
      </header>
      
    </div>
  );
}

export default App;
