import React from 'react'

const Lac21 = () => {
  return (
    <div>
        <h1>RTL Query: getLabelByText</h1>
        <label htmlFor="user-name">Username</label>
        <input type="text" id="user-name" defaultValue={"Sandeep"} />
        <br />
        <label htmlFor="skills">Skills</label>
        <input type="checkbox" id="skills" defaultChecked={true} />
    </div>
  )
}

export default Lac21;