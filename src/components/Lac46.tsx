import React, { useEffect, useState } from 'react'

const Lac46 = () => {
    const [apiData, setApiData] = useState([]);

    const getData = async() => {
        let result = await fetch("https://jsonplaceholder.typicode.com/users");
        result = await result.json();
        console.log("check result",  result)
        setApiData(result);
    }

    useEffect(() => {
        getData();
    }, []);

    console.log(apiData);
    

  return (
    <div>
        <h1>Api Calling</h1>
        <ul>
            {apiData?.map((items) => (
                <li key={items?.id}>{items?.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default Lac46;