import axios from 'axios'
const url='https://api.covid19api.com/summary' //covid api

const getData=async ()=>{
    try{
        const res = await axios.get(url)
        return res
    }
    catch(error){
        console.log(error)

    }

}//get data func end
export default getData;