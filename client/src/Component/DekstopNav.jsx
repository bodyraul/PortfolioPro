import React from 'react'
import LiNavbar from '../ComponentsReutilisables/NavbarComponent/LiNavbar'
import frenchFlag from '../Asset/Img/frenchFlag.png'
import englishFlag from '../Asset/Img/englishFlag.png'

export default function DekstopNav() {
  return (
    <nav className='navbar fixed w-full'>
        <div className='w-[80%] my-0 mx-auto flex items-center justify-between'>
            <p className='sup1400:text-[27px] text-[22px] flex flex-col '>
                <span>Portfolio</span>
                <span>2025</span>
            </p>
            <div className='sup1400:text-[22px] sup1400:w-[530px] w-[400px] flex items-center justify-between text-[17px] '>
            <LiNavbar>Project</LiNavbar>
            <LiNavbar>Skills</LiNavbar>
            <LiNavbar>About</LiNavbar>
            <LiNavbar>Contact</LiNavbar>
            </div>
            <div className=' flex w-[100px] justify-between' >
            <img className=' hover:cursor-pointer' src={frenchFlag} alt="" />
            <img className='hover:cursor-pointer' src={englishFlag} alt="" />
            </div>
        </div>
    </nav>
  )
}
