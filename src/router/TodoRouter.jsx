import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from '../pages/MainPage'

function TodoRouter() {
  return (
    <Routes>
        <Route path='/' element={<MainPage />}/>
    </Routes>
  )
}

export default TodoRouter