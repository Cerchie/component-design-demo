import React from 'react';
import logo from './logo.svg';
import Dice from './Dice'
import './App.css';

function App() {
  return (
    <div className="App">
      <Dice numDice={9} maxVal={6}/>
    </div>
  );
}

export default App;
