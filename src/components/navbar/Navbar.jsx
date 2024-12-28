import React, { useState } from 'react'
import logo from "../../assets/icons/navbar_logo.png"
import burgerOpen from "../../assets/icons/burger_open.png"
import burgerClose from "../../assets/icons/burger_close.png"
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate();
    const [burger, setBurger] = useState(false);

    const burgerMenu = () => {
        setBurger(!burger);
    }

    const LoginPage = () => {
        navigate("/login")
    }

  return (
    <nav className='container'>
        <div className='relative bg-[#074799] rounded-b-lg desktop:min-h-[10vh] py-[10px] px-[20px] flex items-center justify-between'>
            <div className='flex items-center'>
                <img className='w-[65px] phone:w-[50px]' src={logo} alt="todoList" />
                <p className='text-[1.4rem] phone:text-[1rem]'>Todo App</p>
            </div>
            <div className='flex items-center gap-[20px] justify-between font-sans'>
                <div className='text-[1.2rem] tablet:hidden phone:hidden'>
                    <a className='py-[10px] px-[10px] rounded-lg' href="/">Home</a>
                    <a className='py-[10px] px-[10px] rounded-lg' href="/about">About us</a>
                </div>
                <button className='font-sans py-[7px] rounded-lg px-[20px] text-[1rem] phone:text-[0.8rem] phone:py-[5px] phone:px-[15px] transition-all duration-300 ease-in-out text-black bg-white hover:bg-gray-300 hover:scale-[0.9]' onClick={LoginPage}>Login</button>
                <button className='desktop:hidden laptop:hidden' onClick={burgerMenu}>
                    <img className={`w-[30px] transition-transform duration-500 ease-in-out ${burger ? '-rotate-90 scale-90' : 'rotate-0 scale-100'}`} src={burger ? burgerClose : burgerOpen} alt="open close" />
                </button>
            </div>
        </div>
        <div className={`absolute font-poppins font-bold not-italic bg-[white] rounded-t-lg min-h-[150px] flex flex-col text-center items-center ${burger ? 'top-15 opacity-100' : '-top-full opacity-0'} transition-all duration-500 ease-in-out text-[black] desktop:hidden laptop:hidden w-full`}>
            <a className='py-[7px] px-[10px] shadow-custom w-full transition-all duration-300 ease-in-out hover:bg-gray-100' href="/">Home</a>
            <a className='py-[7px] px-[10px] shadow-custom w-full transition-all duration-300 ease-in-out hover:bg-gray-100' href="/about">About us</a>
        </div>
    </nav>
  )
}

export default Navbar
