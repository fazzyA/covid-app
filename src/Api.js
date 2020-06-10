import Axios from 'axios'
const url='https://covid19.mathdro.id/api' //covid api
const getData=async()=>{
    try{
        const res = await Axios.get(url)
        return res
    }
    catch(error){

    }

}//get data func end
export default getData;