import React, { useState } from 'react'

const Lac38 = () => {
    const [checkdata, setCheckdata] = useState(false);
  return (
    <div>
        <button onClick={() => setCheckdata(true)} >Click Me</button>
        {checkdata && (
            <div>Hello World</div>
        )}
    </div>
  )
}

export default Lac38;