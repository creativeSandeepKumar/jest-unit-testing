import React, { useEffect, useState } from 'react'

const Lac35 = () => {
    const [datafound, setDatafound] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setDatafound(true)
        }, 2000);
     
    }, [])
    
  return (
    <div>
    <h2>Lac 35</h2>
    {datafound ? <button>Login</button> : <button>Logout</button>}
</div>
  )
}

export default Lac35;