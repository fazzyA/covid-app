import React, {useEffect} from 'react';
import './App.css';
import {Card, Chart, Country} from './components'
// import getData from './Api'
import axios from 'axios';
function App() {
  const url ='https://api.covid19api.com/summary';
useEffect(()=>{
  axios.get(url)
 .then(res => {
 console.log(res);
})
},[])
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
