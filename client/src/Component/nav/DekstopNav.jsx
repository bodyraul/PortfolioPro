import React from 'react'
import LiNavbar from '../../ComponentsReutilisables/NavbarComponent/LiNavbar'
import { useContext } from 'react'
import langueContext from '../../context/LangueContext';
import ImgNavbar from '../../ComponentsReutilisables/navbar/ImgNavbar';
import scrollInToo from '../../fonction/navFonction/ScrollFonction';

export default function DekstopNav() {
  const {langue,setlangue} = useContext(langueContext);

  return (
    <nav className='navbar fixed w-full z-40 py-[20px] bg-black text-belge'>
        <div className='w-[80%] my-0 mx-auto flex items-center justify-between '>
            <div className='sup1600:text-[25px] w-full flex items-center justify-center text-[19px] '>
            <p></p>
              <LiNavbar onclick={()=>scrollInToo(".projet")} >{langue==="anglais"? "Project":"Projet"}</LiNavbar>
              <LiNavbar onclick={()=>scrollInToo(".skills")} >{langue==="anglais"? "Skills":"Compétences"}</LiNavbar>
              <LiNavbar onclick={()=>scrollInToo(".presention")} >{langue==="anglais"? "About":"Présentation"}</LiNavbar>
            <p className='px-[50px] flex'>
              <ImgNavbar nb={0} ></ImgNavbar>
              <ImgNavbar nb={1} ></ImgNavbar>
              <ImgNavbar nb={2} ></ImgNavbar>
            </p> 
            <ImgNavbar onclick={()=>setlangue("francais")} nb={3} ></ImgNavbar>
            <ImgNavbar onclick={()=>setlangue("anglais")} nb={4} ></ImgNavbar>
            </div>
        </div>
    </nav>
  )
}
