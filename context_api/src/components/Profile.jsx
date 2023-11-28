import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user}= useContext(UserContext);
  if (!user){ return (<div>Please Login</div>)}

  return (<div>welcome {user.username} and {user.password}</div>)
}

export default Profile
