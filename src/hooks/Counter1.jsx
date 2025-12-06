import React from 'react'

// let counter = 0

import { useState } from 'react'
  // named imports

const Counter1 = () => {

    const [counter,setCounter]=useState(0)

    const decrement =()=>{
        // counter++
        // console.log(counter)
        // setCounter(counter+1)
        setCounter(prev=>prev-1)
    }

     const increment =()=>{
          setCounter(prev=>prev+1)
     }

     const resetValue = ()=>{
        setCounter(0)
     }

  return (
    <div>
        <button onClick={increment} disabled={counter==10}>Incriment</button>

        <button onClick={decrement}>Decriment</button>
        <p>{counter}</p>
        {
            counter==10 && <p style={{color:'red'}}>Maximum Limit Reached 💀</p>
        }

        {
            counter==10 && <button className='reset-btn' onClick={resetValue}>Reset</button>
        }

    </div>
  )
}

export default Counter1