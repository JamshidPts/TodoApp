import React from 'react'
import logo from "../../assets/icons/navbar_logo.png"

function Navbar() {
  return (
    <nav className='container'>
        <div className='bg-[#074799] rounded-b-lg desktop:min-h-[10vh] py-[10px] px-[30px] flex items-center justify-between'>
            <div className='flex items-center'>
                <img className='desktop:w-[70px]' src={logo} alt="todoList" />
                <p className='desktop:text-[1.4rem] p-[10px]'>Todo App</p>
            </div>
            <div className='flex gap-[20px] text-[1.3rem] font-sans'>
                <a className='py-[10px] px-[20px] border border-[#074799] focus:outline-none focus:border focus:border-[red] rounded-lg' href="/">Home</a>
                <a className='py-[10px] px-[20px] border border-[#074799] focus:outline-none focus:border focus:border-[red] rounded-lg' href="/about">About us</a>
            </div>
            <div className='flex gap-[20px] font-sans'>
                <button className='py-[5px] px-[20px] border rounded-lg text-[17px] transition-all duration-300 ease-in-out hover:border-[red] focus:outline-none focus:border-[red] hover:scale-110'>Login</button>
                <button className='py-[5px] px-[20px] border rounded-lg text-[17px] transition-all duration-300 ease-in-out hover:border-[red] focus:outline-none focus:border-[red] hover:scale-110'>Register</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar