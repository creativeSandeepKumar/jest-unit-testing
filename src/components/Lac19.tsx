import React from 'react'

const Lac19 = () => {
  return (
    <div>
        <h1>Multiple item with role</h1>
        <button>Click 1</button>
        <button>Click 2</button>
        <label htmlFor="inp1">Input 1</label>
        <input type="text" id="inp1" />
        <br />
        <label htmlFor="inp2">Input 2</label>
        <input type="text" id="inp2" />
        <br />
        <div role='dummy'>
            Dummy
        </div>

    </div>
  )
}

export default Lac19;