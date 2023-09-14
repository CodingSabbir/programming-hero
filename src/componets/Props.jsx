const PropsData=(props)=>{
    console.log(props)
    return(
        <>
            <div className="border-2 w-[300px] border-red-500 px-10 mt-3">
                <h2>ID:{props.id}</h2>
                <p>Name:{props.name}</p>
                <p>Age:{props.age}</p>
            </div>
        </>
    )
}
const age=[20,22,23]
const id=[1,2,3]
const names=['Sabbir','Sakib','Sohan','tamim']
const Props = () => {
    return (
        <>
          {
            names.map((name,index)=>(
            <PropsData name={name} id={id[index]} age={age[index]}/>
            ))
          }
         
        </>
    );
};

export default Props;



  