import './App.css'
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from "./store/authSlice"
import {dataclear, postdata} from "./store/postSlice"
import { Footer, Header } from './components'
import authService from "./appwrite/auth"
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';
function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const userData = useSelector((state) => state.auth.userData)
  const userStatus = useSelector((state) => state.auth.status)
  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData))
        } else {
          dispatch(logout())
          dispatch(dataclear())
        }
      })
      .finally(() => setLoading(false))
  }, [userStatus])
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
