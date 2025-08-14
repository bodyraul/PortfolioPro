import React from 'react'
import LiNavbar from '../../ComponentsReutilisables/NavbarComponent/LiNavbar'
import { useContext } from 'react'
import langueContext from '../../context/LangueContext';
import ImgNavbar from '../../ComponentsReutilisables/navbar/ImgNavbar';

export default function DekstopNav() {
  const {langue,setlangue} = useContext(langueContext);

  return (
    <nav className='navbar fixed w-full z-40 py-[20px] '>
        <div className='w-[80%] my-0 mx-auto flex items-center justify-between'>
            <div className='sup1400:text-[22px] w-full flex items-center justify-center text-[17px] '>
            <p></p>
            <LiNavbar>{langue==="anglais"? "Project":"Projet"}</LiNavbar>
            <LiNavbar>{langue==="anglais"? "Skills":"Compétences"}</LiNavbar>
            <LiNavbar>{langue==="anglais"? "About":"Présentation"}</LiNavbar>
            <LiNavbar>{langue==="anglais"? "Contact":"Contact"}</LiNavbar>
            <p className='px-[50px] flex'>
              <ImgNavbar onclick={()=>console.log("linkedin")} nb={0} ></ImgNavbar>
              <ImgNavbar onclick={()=>console.log("github")} nb={1} ></ImgNavbar>
              <ImgNavbar onclick={()=>console.log("mail")} nb={2} ></ImgNavbar>
            </p> 
            <ImgNavbar onclick={()=>setlangue("francais")} nb={3} ></ImgNavbar>
            <ImgNavbar onclick={()=>setlangue("anglais")} nb={4} ></ImgNavbar>
            </div>
        </div>
    </nav>
  )
}
