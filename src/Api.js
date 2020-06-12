import axios from 'axios'
const url='https://api.covid19api.com/' //covid api
const url2='https://covidtracking.com/api' //covid api daily

export const getData=async ()=>{
    try{
        const res = await axios.get(`${url}/summary`)
        return res
    }
    catch(error){
        console.log(error)

    }
}//get data func end
export const getCountry=async ()=>{
    try{
        const res = await axios.get(`${url}/countries`)
        return res
    }
    catch(error){
        console.log(error)

    }
}//getCountry func end

export const getDailyStatus=async ()=>{
    try{
        const res = await axios.get(`${url2}/states/daily/`)
        return res
    }
    catch(error){
        console.log(error)

    }
}//getDailyStatus func end
export const getDailyStatus2=async ()=>{
    try{
        const res = await axios.get({
            "method":"GET",
            "url":"https://covid-19-live-stats.p.rapidapi.com/livestats",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"covid-19-live-stats.p.rapidapi.com",
            "x-rapidapi-key":"203c76f2c3mshbebf654e42562f2p113197jsn3ae0378922a2",
            "useQueryString":true
            }
            })
        return res
    }
    catch(error){
        console.log(error)

    }
}//getDailyStatus2 func end
