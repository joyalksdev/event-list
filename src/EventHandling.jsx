import React from 'react'

const EventHandling = () => {

    const handleClick = (e)=>{
        console.log("You have clicked me")
        console.log(e.target.textContent)
    }

    const handleMouseEnter = ()=>{
        console.log("Entering")
    }

    const handleMouseLeave = ()=>{
        console.log("Leaving")
    }


  return (
    <div>
        <button onClick={handleClick}>Click Me</button>
        <button onClick={()=>{
            alert('Alert!!!')
        }}>Alert Me!</button>

        <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >Mouse Over</button>

    </div>
  )
}

export default EventHandling