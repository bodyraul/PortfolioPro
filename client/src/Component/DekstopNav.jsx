import React from 'react'
import LiNavbar from '../ComponentsReutilisables/NavbarComponent/LiNavbar'
import frenchFlag from '../Asset/Img/frenchFlag.png'
import englishFlag from '../Asset/Img/englishFlag.png'
import bird from '../Asset/Img/birds.png'


export default function DekstopNav() {
  return (
    <nav className='navbar fixed w-full z-40 py-[20px] '>
        <div className='w-[80%] my-0 mx-auto flex items-center justify-between'>
            <div className='sup1400:text-[22px] w-full flex items-center justify-center text-[17px] '>
            <LiNavbar>Project</LiNavbar>
            <LiNavbar>Skills</LiNavbar>
            <LiNavbar>About</LiNavbar>
            <LiNavbar>Contact</LiNavbar>
            <p className='px-[50px] flex'>
              <img className='w-[30px] mr-[20px] transition-transform duration-150 ease-in hover:scale-125 hover:cursor-pointer' src={bird} alt="" />
              <img className='w-[30px]  mr-[20px] transition-transform duration-150 ease-in hover:scale-125 hover:cursor-pointer' src={bird} alt="" />
              <img className='w-[30px] mr-[20px] transition-transform duration-150 ease-in hover:scale-125 hover:cursor-pointer' src={bird} alt="" />
            </p>
            <img className='w-[35px] mr-[20px] transition-transform duration-150 ease-in hover:scale-125 hover:cursor-pointer' src={frenchFlag} alt="" />
            <img className='w-[35px] mr-[20px] transition-transform duration-150 ease-in hover:scale-125 hover:cursor-pointer' src={englishFlag} alt="" />
            </div>
        </div>
    </nav>
  )
}
