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
            <MovieDisplay movie={count +5}/>
            <MovieDisplay movie={count +50}/>
            </div>
        </>
    )

}

const MovieDisplay=(props)=>{
    return(
        <>
            <h1>Movie Display:{props.movie}</h1>
        </>
    )
}



const obj=[
    {
        name:'tamim',
        age:38,
        city:'chottogram',
    },
    {
        name:'sakib',
        age:35,
        city:'magura',
    },
    {
        name:'fizz',
        age:33,
        city:'shatkhira',
    },
    {
        name:'taskin',
        age:33,
        city:'shatkhira',
    },
]


const ShowData=(props)=>{
        return(
            <>
                <div className="my-20">
                    <h1>{props.name}</h1>
                    <p>{props.age}</p>
                    <p>{props.city}</p>
                </div>
            </>
        )
}


const MyObject=()=>{
    return(
        <>
            
            {
             obj.map((userName,index)=>(
                <ShowData key={index} name={userName.name} city={userName.city} age={userName.age}/>
             ))   
            }
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
       <MyObject/>
            <h1 className="text-[25px] font-bold">Count:{count.name}</h1>
            <button onClick={CuntEvent}>Click me</button>
        </>
    )


};

export default Event;











