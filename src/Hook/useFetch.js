import axios from "axios";
import { useState,useEffect } from "react";

const useFetch = (url="")=>{
    const [data,setData] =useState([]);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(false)

    useEffect(()=>{
        async function fetchData(){
            try{
                setLoading(true)
                const response =  await axios(url)
                setData(response.data)
            }catch(error)
            {
                setError(error)
            }finally{
                setLoading(false)
            }
            
        }
        fetchData()

    },[url])
    
    return{data,error,loading}
}

export default useFetch