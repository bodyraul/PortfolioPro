import React from 'react'
import Titre from '../../ComponentsReutilisables/GlobalComponent/Titre'
import ParaAbout from '../../ComponentsReutilisables/aboutComponent/ParaAbout'
import { useContext } from 'react'
import langueContext from '../../context/LangueContext'
import tabTexteAbout from '../../tools/tab/tabAbout/TabTexteAbout'

export default function About() {
  const {langue} = useContext(langueContext);
  
  return (
    <div className='bg-belge w-full'>
      <Titre  color="text-noir" contenu={langue==="anglais"? "About": "Présentation"}></Titre>
      <div className='sup480:pt-[80px] sup480:pb-[50px] sup768:pt-[90px] sup768:pb-[60px] sup1024:pt-[100px] sup1024:pb-[70px] sup1600:pt-[110px] sup1600:pb-[80px] w-[80%]  max-w-[1400px] my-0 mx-auto pt-[70px] pb-[50px] '>
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
        <ParaAbout>
          {langue==="anglais"? tabTexteAbout.ang[4] : tabTexteAbout.fr[4]}
        </ParaAbout>
      </div>
    </div>
  )
}

