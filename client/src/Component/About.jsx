import React from 'react'
import Titre from '../ComponentsReutilisables/GlobalComponent/Titre'
import ParaAbout from '../ComponentsReutilisables/aboutComponent/ParaAbout'
import { useContext } from 'react'
import langueContext from '../context/LangueContext'

export default function About() {
  const {langue,setlangue} = useContext(langueContext);
  return (
    <div className='bg-belge w-full'>
      <Titre  color="text-noir" contenu="About"></Titre>
      <div className='sup1400:pt-[150px] sup1400:pb-[110px] sup968:pt-[120px] sup968:pb-[80px] w-[80%]  max-w-[1400px] my-0 mx-auto pt-[80px] pb-[40px]'>
        <ParaAbout>{langue==="anglais"? "Hi, I'm Aurélien. I take a lot of pleasure when I code.":"Hey, moi c'est Aurélien. je prends beaucoup de plaisir quand je code"}</ParaAbout>
        <ParaAbout>I have a particular appetite for <span className='text-jaune font-bold '>Front-end </span> development, as it allows me to express my creativity while regularly facing new learning experiences.</ParaAbout>
        <ParaAbout>That's why I enjoy replicating website <span className='text-jaune font-bold '>integrations </span> that I discover, especially when they feature interesting <span className='text-jaune font-bold'>UI </span> or <span className='text-jaune font-bold'>UX </span>.</ParaAbout>
      </div>
    </div>
  )
}
