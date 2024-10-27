import React, { useState } from 'react'
import handleOtherMethod from '../utils/helper';

const FunctionalComp = () => {
    const [data, setData] = useState("");

    const handleClick = () => {
        setData("Hello");
    }
  return (
    <div>
        <h1>Functional compoent methods testing</h1>
        <button data-testid="btn1" onClick={handleClick} >Update</button>
        <button onClick={handleOtherMethod} >Other Method</button>
        <h2>{data}</h2>
    </div>
  )
}

export default FunctionalComp;