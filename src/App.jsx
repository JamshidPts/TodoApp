import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import TodoRouter from './router/TodoRouter'

function App() {
  return (
    <>
    <BrowserRouter future={{v7_startTransition: true, v7_relativeSplatPath: true}}>
      <TodoRouter />
    </BrowserRouter>
    </>
  )
}

export default App