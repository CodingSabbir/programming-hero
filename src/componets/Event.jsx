import { useState } from "react";





const Event = () => {
    const [count,setCount]=useState({
        id:24,
        name:'taskin',
        age:33,
    })

    const CuntEvent=()=>{
            setCount(
                prevCount=>({
                ...prevCount,
    
                    id:1,
                    name:'tamim',
                    age:35,
             
                
            }));
    }
    return(
        <>
            <h1 className="text-[25px] font-bold">Count:{count.name}</h1>
            <button onClick={CuntEvent}>Click me</button>
        </>
    )


};

export default Event;











