
import Card from "./componets/Card"
import Map from "./componets/Map"
import Propes from "./componets/Propes"


function App() {
 
  return (
    <>
      <Card/>
      <Propes name='Sakib Al Hasan' age='36' city='Magura'/>
      <Propes name='Mustafizur '  age='26' city='Shatkhira'/>
      <Propes name='Tawid Hridy '  age='24' city='Bogura'/>
      <Map/>
   
    </>
  )
}

export default App
