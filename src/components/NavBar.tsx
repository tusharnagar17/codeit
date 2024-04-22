import React from 'react'
import ThemeChanger from './ThemeChanger'
import Image from 'next/image'

const NavBar = () => {
    return (
        <div className='flex justify-around items-center my-8 mx-auto max-w-5xl shadow-sm'>
            <div>
                <Image src="/codeit-logo.png" alt='code-it logo' height={100} width={150} />
            </div>
            <div className='hidden md:flex list-none justify-around items-center'>
                <li className='m-2 py-1 px-4 hover:underline decoration-2 decoration-sky-500 text-xl hover:text-2xl'><a href="#Home">Home</a></li>
                <li className='m-2 py-1 px-4 hover:underline decoration-2 decoration-sky-500 text-xl hover:text-2xl'><a href="#About">About</a></li>
                <li className='m-2 py-1 px-4 hover:underline decoration-2 decoration-sky-500 text-xl hover:text-2xl'><a href="#Services">Services</a></li>
                <li className='m-2 py-1 px-4 hover:underline decoration-2 decoration-sky-500 text-xl hover:text-2xl'><a href="#Projects">Projects</a></li>
                <li className='m-2 py-1 px-4 hover:underline decoration-2 decoration-sky-500 text-xl hover:text-2xl'><a href="#Contact">Contact</a></li>
                <ThemeChanger />

            </div>
        </div>
    )
}

export default NavBar