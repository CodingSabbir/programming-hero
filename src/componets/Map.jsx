

const Map = () => {

    const obj=[
        {   
            id:10,
            name:'sabbir',
            cgp:3.85,
        },
        {   
            id:11,
            name:'sohan',
            cgp:3.75,
        },
        {   
            id:12,
            name:'jakir',
            cgp:3.95,
        }
   ]

    const ComponetMap=({object})=>{
        return (
            <div>
                <p>ID: {object.id}</p>
                <p>Name: {object.name}</p>
                <p>CGP: {object.cgp}</p>
            </div>
        );
    }
    
    return (
        <>
        <div>
            {
                obj.map((student,i)=>(
                    <div key={i}><ComponetMap object={student}/></div>
                ))
            }
        </div>
          
        </>
    );
};

export default Map;


