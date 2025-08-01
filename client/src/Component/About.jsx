import React from 'react'
import Titre from '../ComponentsReutilisables/GlobalComponent/Titre'

export default function About() {
  return (
    <div className='bg-belge w-full'>
      <Titre  color="text-noir" contenu="About"></Titre>
      <div className='sup1400:py-[150px] sup968:py-[120px] w-[80%]  max-w-[1400px] my-0 mx-auto py-[80px]'>
        <p className='sup1400:text-[25px] sup968:text-[20px]  text-[12px] pb-[20px] '>Hi, I'm Aurélien. I take a lot of pleasure when I code.</p>
        <p className='sup1400:text-[25px] sup968:text-[20px]  text-[12px] pb-[20px] '>I have a particular appetite for <span className='text-jaune'>Front-end </span> development, as it allows me to express my creativity while regularly facing new learning experiences.</p>
        <p className='sup1400:text-[25px] sup968:text-[20px]  text-[12px] pb-[20px] '>That's why I enjoy replicating website <span className='text-jaune'>integrations </span> that I discover, especially when they feature interesting <span className='text-jaune'>UI </span> or <span className='text-jaune'>UX </span>.</p>
      </div>
    </div>
  )
}
