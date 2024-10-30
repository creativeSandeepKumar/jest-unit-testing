import React, { useState } from 'react'

const Lac39 = () => {
    const [name, setName] = useState("");
  return (
    <div>
        <input onChange={(e) => setName(e.target.value)} defaultValue={"anil"} />
    </div>
  )
}

export default Lac39;