import { useState } from 'react'
import './App.css'
import SnapshotTesting from './components/Lac13';
import Users from './components/classComponents/Users';
import FunctionalComp from './components/Lac14';
import GetByRole from './components/Lac17';
import Lac19 from './components/Lac19';
import Lac20 from './components/Lac20';
import Lac21 from './components/Lac21';
import Lac22 from './components/Lac22';
import Lac23 from './components/Lac23';
import Lac24 from './components/Lac24';
import Lac25 from './components/Lac25';
import Lac26 from './components/classComponents/Lac26';
import Lac27 from './components/Lac27';
import Lac28 from './components/Lac28';
import Lac29 from './components/Lac29';
import Lac30 from './components/Lac30';
import Lac32 from './components/Lac32';
import Lac33 from './components/Lac33';
import Lac34 from './components/Lac34';
import Lac35 from './components/Lac35';
import Lac46 from './components/Lac46';

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState("");
  const [btnData, setBtnData] = useState("");


  return (
    <div>
      {/* <p>First React Test Case</p>
      <input type="text" name="input" value={data} onChange={(e) => setData(e.target.value)} id='inputId' placeholder='this is input' />

      <br />
      <button onClick={() => setBtnData("updated data")}>Update Data</button>
      <br />
      <h1>{btnData}</h1> */}
      {/* <img title='this is image' src="https://img.freepik.com/free-photo/cute-ducks-living-nature_23-2150701987.jpg?t=st=1729954504~exp=1729958104~hmac=9a6e22b4b1395b95d05ac827740cdc8b656f933fac1a234bc672579a0e673871&w=996" alt="" /> */}
      {/* <SnapshotTesting/>
      <FunctionalComp/>
      <Users/> */}
      {/* <GetByRole/> */}
      {/* <Lac19/> */}
      {/* <Lac20/> */}
      {/* <Lac21/> */}
      {/* <Lac22/> */}
      {/* <Lac23/> */}
      {/* <Lac24/> */}
      {/* <Lac25/> */}
      {/* <Lac26/> */}
      {/* <Lac27/> */}
      {/* <Lac28/> */}
      {/* <Lac29/> */}
      {/* <Lac30/> */}
      {/* <Lac32/> */}
      {/* <Lac33/> */}
      {/* <Lac34/> */}
      {/* <Lac35/> */}
      <Lac46/>
    </div>
  )
}

export default App
