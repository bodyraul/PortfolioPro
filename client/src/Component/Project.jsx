import React from 'react'
import Titre from '../ComponentsReutilisables/GlobalComponent/Titre'
import company from "../Asset/Img/company.jpg"
import ParaProject from '../ComponentsReutilisables/ProjectComponent/ParaProject'
import collection  from"../Asset/Img/collection.jpg"
import forum  from"../Asset/Img/forum.jpg"
import github from '../Asset/Img/github.png'
import react from '../Asset/Img/react.png'
import node from '../Asset/Img/node.png'
import tailwind from '../Asset/Img/tailwind.png'
import mongodb from '../Asset/Img/mongodb.png'
import fm from '../Asset/Img/fm.png'

export default function Project() {
  return (
    <div   className='projet bg-belge  '>
        <Titre  color="text-noir" contenu="Project"></Titre>
        <div  className='sup1400:gap-32 sup1400:py-[150px]  sup968:py-[120px] sup968:gap-10 sup968:grid-cols-[repeat(3,1fr)] w-[80%] grid grid-rows-[repeat(3,1fr)] grid-cols-[repeat(1,1fr)] my-0 mx-auto max-w-[1400px] py-[80px] '>
          <ParaProject source={company} srcImg={[github,react,tailwind]} titre="Presentation  of  company" contenu="I built website that showcases the company and its team members." number="un"></ParaProject>
          <ParaProject source={collection} srcImg={[github,react,tailwind,fm]} titre="Display of clothing collection" contenu="I developed a project to present a stylish clothing collection." number="deux"></ParaProject>
          <ParaProject source={forum} srcImg={[github,react,tailwind,node,mongodb]} titre="Creation of Forum" contenu="I created a forum where users can interact on the topic of poker." number="trois"></ParaProject>
        </div>
    </div>
  )
}
