import React from 'react'

const Lac34 = () => {
    const login = false;
  return (
    <div>
        <h2>Lac 34</h2>
        {login ? <button>Login</button> : <button>Logout</button>}
    </div>
  )
}

export default Lac34;