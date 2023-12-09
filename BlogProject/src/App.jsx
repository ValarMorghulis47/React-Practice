import './App.css'
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'
import authService from "./appwrite/auth"
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';
function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const isloggedin= useSelector((state) => state.auth.isloggedin)
  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [isloggedin])
  return (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
        <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
