import React from 'react'
import LiNavbar from '../ComponentsReutilisables/NavbarComponent/LiNavbar'
import frenchFlag from '../Asset/Img/frenchFlag.png'
import englishFlag from '../Asset/Img/englishFlag.png'
import bird from '../Asset/Img/birds.png'
import { useContext } from 'react'
import langueContext from '../context/LangueContext'


export default function DekstopNav() {
  const {langue,setlangue} = useContext(langueContext);
  
  return (
    <nav className='navbar fixed w-full z-40 py-[20px] '>
        <div className='w-[80%] my-0 mx-auto flex items-center justify-between'>
            <div className='sup1400:text-[22px] w-full flex items-center justify-center text-[17px] '>
            <p></p>
            <LiNavbar>{langue==="anglais"? "Project":"Projet"}</LiNavbar>
            <LiNavbar>{langue==="anglais"? "Skills":"Compétences"}</LiNavbar>
            <LiNavbar>{langue==="anglais"? "About":"A propos"}</LiNavbar>
            <LiNavbar>{langue==="anglais"? "Contact":"Contact"}</LiNavbar>
            <p className='px-[50px] flex'>
              <img className='w-[30px] mr-[20px] transition-transform duration-150 ease-in hover:scale-125 hover:cursor-pointer' src={bird} alt="" />
              <img className='w-[30px]  mr-[20px] transition-transform duration-150 ease-in hover:scale-125 hover:cursor-pointer' src={bird} alt="" />
              <img className='w-[30px] mr-[20px] transition-transform duration-150 ease-in hover:scale-125 hover:cursor-pointer' src={bird} alt="" />
            </p>
            <img onClick={()=>setlangue("francais")} className='w-[35px] mr-[20px] transition-transform duration-150 ease-in hover:scale-125 hover:cursor-pointer' src={frenchFlag} alt="" />
            <img onClick={()=>setlangue("anglais")} className='w-[35px] mr-[20px] transition-transform duration-150 ease-in hover:scale-125 hover:cursor-pointer' src={englishFlag} alt="" />
            </div>
        </div>
    </nav>
  )
}
