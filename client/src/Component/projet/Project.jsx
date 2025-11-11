import React from 'react'
import Titre from '../../ComponentsReutilisables/GlobalComponent/Titre'
import ParaProject from '../../ComponentsReutilisables/ProjectComponent/ParaProject'
import { useContext } from 'react'
import langueContext from '../../context/LangueContext'

export default function Project() {
  const {langue} = useContext(langueContext);
  return (
    <div   className='projet bg-belge  '>
        <Titre  color="text-noir" contenu={langue==="anglais"? "Project": "Projet"}></Titre>
        <div className='sup480:pt-[100px] sup480:pb-[20px] sup768:pt-[110px] sup1024:pt-[120px] sup1024:gap-10 sup1024:grid-cols-[repeat(3,1fr)] sup1600:pt-[130px] w-[80%] grid grid-rows-[repeat(3,1fr)] grid-cols-[repeat(1,1fr)] my-0 mx-auto max-w-[1400px] pt-[80px] pb-[10px] '>
          <ParaProject nb={0}/>
          <ParaProject nb={1}/>
          <ParaProject nb={2}/>
        </div>
    </div>
  )
}
