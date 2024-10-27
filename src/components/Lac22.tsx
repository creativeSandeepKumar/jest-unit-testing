import React from 'react'

const Lac22 = () => {
  return (
    <div>
        <h1>RTL Query: getAllLabelByText</h1>
        <label htmlFor="user-name1">Username</label>
        <input type="text" id="user-name1" defaultValue={"Sandeep"} />
        <br />
        <label htmlFor="user-name2">Username</label>
        <input type="text" id="user-name2" defaultValue={"Sandeep"} />
        <br />
        <label htmlFor="user-name3">Username</label>
        <input type="text" id="user-name3" defaultValue={"Sandeep"} />
        <br />

        <label htmlFor="skills1">Skills</label>
        <input type="checkbox" id="skills1" defaultChecked={true} />
        <br />
        <label htmlFor="skills2">Skills</label>
        <input type="checkbox" id="skills2" defaultChecked={true} />
        <br />
        <label htmlFor="skills3">Skills</label>
        <input type="checkbox" id="skills3" defaultChecked={true} />
        <br />
    </div>
  )
}

export default Lac22