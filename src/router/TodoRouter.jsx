import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from '../pages/MainPage'
import AboutPage from '../pages/AboutPage'
import Login from '../components/auth/Login'

function TodoRouter() {
  return (
    <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/about' element={<AboutPage />}/>
        <Route path='/login' element={<Login />}/>
    </Routes>
  )
}

export default TodoRouter