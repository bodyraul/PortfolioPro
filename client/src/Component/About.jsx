import React from 'react'
import Titre from '../ComponentsReutilisables/GlobalComponent/Titre'
import ParaAbout from '../ComponentsReutilisables/aboutComponent/ParaAbout'
import { useContext } from 'react'
import langueContext from '../context/LangueContext'
import tabTexteAboutAng from '../tools/tab/tabAbout/TabTexteAboutAng'
import tabTexteAboutFr from '../tools/tab/tabAbout/TabTexteAboutFr'

export default function About() {
  const {langue} = useContext(langueContext);
  
  return (
    <div className='bg-belge w-full'>
      <Titre  color="text-noir" contenu={langue==="anglais"? "About": "Présentation"}></Titre>
      <div className='sup1400:pt-[150px] sup1400:pb-[110px] sup968:pt-[120px] sup968:pb-[80px] w-[80%]  max-w-[1400px] my-0 mx-auto pt-[80px] pb-[40px]'>
        <ParaAbout>{langue==="anglais"? tabTexteAboutAng[0] : tabTexteAboutFr[0]}</ParaAbout>
        <ParaAbout>{langue==="anglais"? tabTexteAboutAng[1] : tabTexteAboutFr[1]}</ParaAbout>
        <ParaAbout>{langue==="anglais"? tabTexteAboutAng[2] : tabTexteAboutFr[2]}</ParaAbout>
      </div>
    </div>
  )
}
