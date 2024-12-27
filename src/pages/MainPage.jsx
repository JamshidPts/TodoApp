import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Home from '../components/home/Home'

function MainPage() {
  return (
    <>
    <header>
      <Navbar />
    </header>
    <main className='container'>
      <section>
        <Home />
      </section>
    </main>
    </>
  )
}

export default MainPage