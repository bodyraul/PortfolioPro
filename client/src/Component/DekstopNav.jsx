import React from 'react'
import LiNavbar from '../ComponentsReutilisables/NavbarComponent/LiNavbar'
import frenchFlag from '../Asset/Img/frenchFlag.png'
import englishFlag from '../Asset/Img/englishFlag.png'
import linkedin from'../Asset/Img/linkdins.png';import mail from'../Asset/Img/mail.png';import github from'../Asset/Img/github.png';
import { useContext } from 'react'
import langueContext from '../context/LangueContext'
import ImgNavbar from '../ComponentsReutilisables/navbar/ImgNavbar';

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
              <ImgNavbar onclick={()=>console.log("linkedin")} source={linkedin} alt={"image linkedin"} ></ImgNavbar>
              <ImgNavbar onclick={()=>console.log("github")} source={github} alt={"image github"} ></ImgNavbar>
              <ImgNavbar onclick={()=>console.log("mail")} source={mail} alt={"image boite mail"} ></ImgNavbar>
            </p> 
            <ImgNavbar onclick={()=>setlangue("francais")} source={frenchFlag} alt={"drapeau Français"} ></ImgNavbar>
            <ImgNavbar onclick={()=>setlangue("anglais")} source={englishFlag} alt={"drapeau Anglais"} ></ImgNavbar>
            </div>
        </div>
    </nav>
  )
}
