import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState("");
  const [btnData, setBtnData] = useState("");


  return (
    <div>
      <p>First React Test Case</p>
      <input type="text" name="input" value={data} onChange={(e) => setData(e.target.value)} id='inputId' placeholder='this is input' />

      <br />
      <button onClick={() => setBtnData("updated data")}>Update Data</button>
      <br />
      <h1>{btnData}</h1>
      {/* <img title='this is image' src="https://img.freepik.com/free-photo/cute-ducks-living-nature_23-2150701987.jpg?t=st=1729954504~exp=1729958104~hmac=9a6e22b4b1395b95d05ac827740cdc8b656f933fac1a234bc672579a0e673871&w=996" alt="" /> */}
    </div>
  )
}

export default App