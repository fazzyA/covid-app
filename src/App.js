import React, {useEffect,useState} from 'react';
import './App.css';
import {Cards, Chart, Country} from './components'
import getData from './Api'
import SimplePaperCard from './Paper';

function App() {
 const [data,setData]=useState({});
 // const url ='https://api.covid19api.com/summary';
  useEffect(
    () =>{

     async function forData(){
      const myData = await getData();
      console.log(myData.data.Global);
      const holdData=myData.data.Global
      setData(holdData)

     }//forData end
     forData();


    } ,[]
  ); //useEffect end
  return (
    <div className="App">
      <h1>Covid App</h1>
      <SimplePaperCard data={data} />
      {/* <Chart/>
      <Country /> */}
    </div>
  );
}

export default App;
