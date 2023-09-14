import { useState } from "react";

const MovieCounter=()=>{
const [count,setCount]=useState(0)

const changeValue=(action)=>{
    if(action ==='increment'){
        setCount(count + 1)
    }else if(action ==='decrement' && count > 0){
        setCount(count - 1)
    }
}
    return(
        <>
            <div className="text-center">
            <p className=" text-[25px]" >Number Of Movie:{count}</p>
            <button onClick={()=>changeValue('increment')} className="text-[20px] text-center px-5">Add Movie</button>
            <button onClick={()=>changeValue('decrement')} className="text-[20px] text-center">Remove Movie</button>
            </div>
        </>
    )

}









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
       <MovieCounter/>
            <h1 className="text-[25px] font-bold">Count:{count.name}</h1>
            <button onClick={CuntEvent}>Click me</button>
        </>
    )


};

export default Event;











