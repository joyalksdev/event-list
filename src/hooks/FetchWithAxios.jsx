import React from 'react' 
import { useState, useEffect } from 'react'
import axios from 'axios'

const FetchWithAxios = () => {
    
    const [resourceType, setResourceType] = useState("posts")
    const [items, setItems] =  useState([])

    // asyc await
    useEffect(()=>{
        const fetchData = async()=>{
            try {
                const {data} = await axios.get(`https://jsonplaceholder.typicode.com/${resourceType}`)
                console.log(data)
            } catch (error) {
                console(error)
            }
        }
        fetchData()
    },[resourceType])


  return (
    <div>
      <h1>{resourceType}</h1>

      <button onClick={() => setResourceType("posts")}>Posts</button>
      <button onClick={() => setResourceType("comments")}>Comments</button>
      <button onClick={() => setResourceType("users")}>Users</button>
      <ul>
        {items.map((item)=>(
          <li>{item.title || JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  )
}

export default FetchWithAxios
