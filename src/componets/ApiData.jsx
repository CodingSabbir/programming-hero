import { useEffect, useState } from "react";


const ApiData = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
            (async()=>{
                const response= await fetch('https://jsonplaceholder.typicode.com/users')
                const data= await response.json()
                setData(data)
            })()
    },[])
    return (
        <>
            <div>
                {
                    data.map((userData,index)=>(  
                        
                        <ul key={index}>
                            <li>{userData.name}</li>
                            <li>{userData.id}</li>
                        </ul>
                        
                        ))
                }
                <h1 className="text-[22px]">Dynamic:{data.length}</h1>
            </div>
            
        </>
    );
};

export default ApiData;