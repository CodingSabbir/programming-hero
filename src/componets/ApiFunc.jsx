import { useEffect, useState } from "react";


const UserData = () => {
    const [useData, setData]=useState([])
    useEffect(()=>{
      (async()=>{
     const res= await  fetch('https://jsonplaceholder.typicode.com/posts') 
     const data= await res.json()
     setData(data)
      })()
    },[])

    const mainData=useData.slice(3,10)
    return (
        <div>
          
            { 
                mainData.map((item,i)=>(
                   
                    <h1 key={i}>{item.id}</h1>
                   
                   ))
            }
    
        </div>
    );
};





const ApiFunc = () => {
    return (
        <div>
            <UserData/>
        </div>
    );
};

export default ApiFunc;


