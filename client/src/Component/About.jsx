import React from 'react'
import Titre from '../ComponentsReutilisables/GlobalComponent/Titre'
import ParaAbout from '../ComponentsReutilisables/aboutComponent/ParaAbout'
import { useContext } from 'react'
import langueContext from '../context/LangueContext'
import tabTexteAbout from '../tools/tab/tabAbout/TabTexteAbout'

export default function About() {
  const {langue} = useContext(langueContext);
  
  return (
    <div className='bg-belge w-full'>
      <Titre  color="text-noir" contenu={langue==="anglais"? "About": "Présentation"}></Titre>
      <div className='sup1400:pt-[150px] sup1400:pb-[110px] sup968:pt-[120px] sup968:pb-[80px] w-[80%]  max-w-[1400px] my-0 mx-auto pt-[80px] pb-[40px]'>
        <ParaAbout>
          {langue==="anglais"? tabTexteAbout.ang[0] : tabTexteAbout.fr[0]}
        </ParaAbout>
        <ParaAbout>
          {langue==="anglais"? tabTexteAbout.ang[1] : tabTexteAbout.fr[1]}
        </ParaAbout>
        <ParaAbout>
          {langue==="anglais"? tabTexteAbout.ang[2] : tabTexteAbout.fr[2]}
        </ParaAbout>
         <ParaAbout>
          {langue==="anglais"? tabTexteAbout.ang[3] : tabTexteAbout.fr[3]}
        </ParaAbout>
      </div>
    </div>
  )
}

