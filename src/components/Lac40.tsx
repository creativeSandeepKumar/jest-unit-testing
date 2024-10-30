import React, { useState } from 'react'

const Lac40 = () => {
    const [name, setName] = useState("");
  return (
    <div>
    <input onChange={(e) => setName(e.target.value)} value={name} defaultValue={"anil"} />
</div>
  )
}

export default Lac40