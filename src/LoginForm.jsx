import React from 'react'

const LoginForm = () => {

    const handleChange = (e) =>{
        console.log(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        alert("Form Submitted")
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter Username'
            onChange={handleChange}/>
            <button type='submit'>Log In</button>
        </form>
    </div>
  )
}

export default LoginForm