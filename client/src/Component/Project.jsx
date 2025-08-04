import React from 'react'
import Titre from '../ComponentsReutilisables/GlobalComponent/Titre'
import company from "../Asset/Img/company.jpg"
import ParaProject from '../ComponentsReutilisables/ProjectComponent/ParaProject'
import collection  from"../Asset/Img/collection.jpg"
import forum  from"../Asset/Img/forum.jpg" ;import github from '../Asset/Img/github.png';import react from '../Asset/Img/react.png';import node from '../Asset/Img/node.png';import tailwind from '../Asset/Img/tailwind.png';import mongodb from '../Asset/Img/mongodb.png';import fm from '../Asset/Img/fm.png';
import { useContext } from 'react'
import langueContext from '../context/LangueContext'
import tabProjet from '../tools/tab/tabProjet/TabProjet'

export default function Project() {
  const {langue} = useContext(langueContext);
  return (
    <div   className='projet bg-belge  '>
        <Titre  color="text-noir" contenu={langue==="anglais"? "Project": "Projet"}></Titre>
        <div  className='sup1400:gap-32 sup1400:pt-[150px] sup1400:pb-[80px]  sup968:pt-[120px] sup968:pb-[50px] sup968:gap-10 sup968:grid-cols-[repeat(3,1fr)] w-[80%] grid grid-rows-[repeat(3,1fr)] grid-cols-[repeat(1,1fr)] my-0 mx-auto max-w-[1400px] pt-[80px] pb-[10px] '>
          <ParaProject 
            source={company} 
            srcImg={[github,react,tailwind]} 
            titre={langue==="anglais"? tabProjet.titre.ang[0] : tabProjet.titre.fr[0]} 
            contenu={langue==="anglais"? tabProjet.texte.ang[0] : tabProjet.texte.fr[0]} 
            number="un">
          </ParaProject>
          <ParaProject 
            source={collection} 
            srcImg={[github,react,tailwind,fm]} 
            titre={langue==="anglais"? tabProjet.titre.ang[1] : tabProjet.titre.fr[1]} 
            contenu={langue==="anglais"? tabProjet.texte.ang[1] : tabProjet.texte.fr[1]} 
            number="deux">
          </ParaProject>
          <ParaProject 
            source={forum} 
            srcImg={[github,react,tailwind,node,mongodb]} 
            titre={langue==="anglais"? tabProjet.titre.ang[2] : tabProjet.titre.fr[2]} 
            contenu={langue==="anglais"? tabProjet.texte.ang[2] : tabProjet.texte.fr[2]} 
            number="trois">
          </ParaProject>
        </div>
    </div>
  )
}
