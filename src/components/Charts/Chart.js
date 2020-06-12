import React, {useEffect, useState} from 'react'
import { Doughnut, Line,Bar } from 'react-chartjs-2';
import {getDailyStatus} from '../../Api';
import {getDailyStatus2} from '../../Api';


const Chart = () => {

    const [daily,setdaily]=useState([]);
    useEffect(
      () =>{
       async function forData(){
        const myData = await getDailyStatus2();
        console.log(myData);
        //const holdData=myData.data;
        //setdaily(holdData)
  
       }//forData end
       forData();
      } ,[]
    ); //useEffect end
  //console.log(daily);
 const dataDoughChart= daily.map((item)=>item);
  const myLineChart = daily[0] ? (<Line data={{
    labels: daily.map(({ dateModified }) => dateModified),
    datasets: [{
      data: daily.map((data) => data.positive),
      label: 'Infected',
      borderColor: '#3333ff',
      fill: true,
    }, {
      data: daily.map((data) => data.death),
      label: 'Deaths',
      borderColor: 'red',
      backgroundColor: 'rgba(255, 0, 0, 0.5)',
      fill: true,
    },
    ],
  }} />):'loading'; 
//   const myDoughchart = daily[0] ? (<Doughnut data={{key:'name'}}
//      />):null; 

    return(
        <div>
            {/* {myDoughchart} */}
            {myLineChart}
            charts
       </div>

    )
}
export default Chart;