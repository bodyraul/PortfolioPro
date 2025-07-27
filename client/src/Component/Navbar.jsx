import React from 'react'
import LiNavbar from '../ComponentsReutilisables/NavbarComponent/LiNavbar'

export default function Navbar() {

  return (
    <nav className='navbar fixed w-full'>
        <div className='w-[80%] my-0 mx-auto flex items-center justify-between'>
            <p className='w-[20%] text-[30px] '>
                Portfolio 2025
            </p>
            <div className='w-[1000px] flex items-center justify-between text-[20px] '>
               <LiNavbar>Projet</LiNavbar>
               <LiNavbar>Skills</LiNavbar>
               <LiNavbar>About</LiNavbar>
               <LiNavbar>Contact</LiNavbar>
            </div>
        </div>
    </nav>
  )
}
