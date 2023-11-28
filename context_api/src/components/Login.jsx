import React from 'react'
import { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setusername]= useState('');
    const [password, setpassword]= useState('');
    const {setuser}= useContext(UserContext);
    const handlesubmit=(e)=>{
        e.preventDefault();
        setuser({username, password})
    }
  return (
    <div>
      <h1>Login</h1>
      <input type="text" name="text" id="text" placeholder='username' value={username} onChange={(e)=> setusername(e.target.value)}/>
      <input type="password" name="pass" id="pass" placeholder='password' value={password} onChange={(e)=> setpassword(e.target.value)}/>
      <button type="submit" onClick={handlesubmit}></button>
    </div>
  )
}

export default Login
