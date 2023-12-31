
import ApiData from "./componets/ApiData"
import ApiFunc from "./componets/ApiFunc"
import Card from "./componets/Card"
import Event from "./componets/Event"
import Map from "./componets/Map"
import Propes from "./componets/Propes"
import Props from "./componets/Props"


function App() {
 
  return (
    <>
      <Card/>
      <Propes name='Sakib Al Hasan' age='36' city='Magura'/>
      <Propes name='Mustafizur '  age='26' city='Shatkhira'/>
      <Propes name='Tawid Hridy '  age='24' city='Bogura'/>
      <Map/>
      <Event/>
      <ApiData/>
      <Props/>
      <ApiFunc/>
    </>
  )
}

export default App
