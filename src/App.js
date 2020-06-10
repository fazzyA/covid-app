import React from 'react';
import './App.css';
import {Card, Chart, Country} from './components'

function App() {
  return (
    <div className="App">
      <h1>Covid App</h1>
      <Card />
      <Chart />
      <Country />
    </div>
  );
}

export default App;
