const Welcome=({name}) =>{
    return(
        <h1>Hello, {name}</h1>
    )
     
  }
  
  const NameFunc=()=> {
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
      </div>
    );
  }

  const ShowName=({name})=>{
return(
    <div>
        {
          name.map((item,i)=>(   
        <div className="flex justify-center gap-5" key={i}>
            <p>{item.name}</p>
            <p>{item.age}</p>
            <p>{item.city}</p>
        </div>
          ))  
        }
    </div>
      ) 
     
  }
  const names=[
        {
            name:'sabbir',
            age:20,
            city:'dhaka'
        },
        {
            name:'rakib',
            age:20,
            city:'feni'
        },
        {
            name:'sakib',
            age:20,
            city:'bogura'
        } 
  ]




const Func=({title})=>{ 
    return(
   
        <div>
             <h1>{title}</h1>
            <ShowName name={names} />
            
        </div>
       
      
    )
}


const Card = () => {
    return (
        <div>
            <NameFunc/>
            <Func  title='web developer'/>
        </div>
    );
};

export default Card;



