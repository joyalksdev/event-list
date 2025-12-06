import React from 'react'

const TaskNew = () => {

    const taskList = [
        {id:1,name:'a'},
        {id:2,name:'b'},
        {id:3,name:'c'}
    ]

  return (
    <div>
        <ul>
            {
                taskList.map((task)=>(
                    <li key={task.id}>{task.name}</li>  
                ))
            }
        </ul>
    </div>
  )
}

export default TaskNew