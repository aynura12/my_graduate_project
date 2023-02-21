import React, { useEffect, useState } from 'react'
import axios from "axios";

const Counter = () => {
    const [counter,setCounter]=useState(0)
    const [data, setData] = useState([]);
  const getData = async () => {
    const res = await axios.get("http://localhost:8080/cause");
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
    useEffect(()=>{
        // const timer = setInterval(() => {
        //     setCounter(prevCount => prevCount - 1); 
        //   });
         
    },[])
  return (
    data.map((datas)=>{
        return(<div>{datas.goal},{counter}</div>)
    })
    
  )
}

export default Counter