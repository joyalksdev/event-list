import React, { useState, useEffect } from 'react'

const FetchData = () => {
const [resourceType, setResourceType] = useState("posts")
const [items, setItems] =  useState([])

// will execute during the component load and re-render

  // useEffect(() => {
  //   console.log("Render")
  // })

  // will execute on first load and change in resourceType
  //  useEffect(() => {
  //   console.log("Render")
  // },[resourceType])

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))
      .catch(error=> console.error(error)
      )
  },[resourceType])

  return (
    <div>
      <h1>{resourceType}</h1>

      <button onClick={() => setResourceType("posts")}>Posts</button>
      <button onClick={() => setResourceType("comments")}>Comments</button>
      <button onClick={() => setResourceType("users")}>Users</button>
      <ul>
        {items.map((item)=>(
          <li key={item.id}>{item.title || JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  )
}

export default FetchData
