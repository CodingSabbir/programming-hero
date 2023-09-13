
const Propes = ({name,age,city}) => {
   
    return (
        <>
            <div className="px-20 py-5 text-[22px] font-mono">
                <h1>Name:{name}</h1>
                <p>Age:{age}</p>
                <p>City:{city}</p>
            </div>
        </>
    );
};


export default Propes;