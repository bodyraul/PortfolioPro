import React from 'react'
import Titre from '../ComponentsReutilisables/GlobalComponent/Titre'
import company from "../Asset/Img/company.jpg"
import ParaProject from '../ComponentsReutilisables/ProjectComponent/ParaProject'
import collection  from"../Asset/Img/collection.jpg"
import forum  from"../Asset/Img/forum.jpg"

export default function Project() {
  return (
    <div   className='projet bg-belge  '>
        <Titre  color="text-noir" contenu="Project"></Titre>
        <div  className='sup1400:gap-32 sup968:gap-10 sup968:grid-cols-[repeat(3,1fr)] w-[80%] grid grid-rows-[repeat(3,1fr)] grid-cols-[repeat(1,1fr)] my-0 mx-auto max-w-[1400px] py-[150px] '>
          <ParaProject source={company} titre="Presentation  of  company" contenu="I built a website using React and Tailwind that showcases the company and its team members." number="un"></ParaProject>
          <ParaProject source={collection} titre="Display of clothing collection" contenu="I developed a responsive website using React and Tailwind  to present a stylish clothing collection." number="deux"></ParaProject>
          <ParaProject source={forum} titre="Creation of Forum" contenu="I created a forum platform with React, Tailwind, Node.JS and MongoDB , focusing on a clean and responsive user interface." number="trois"></ParaProject>
        </div>
    </div>
  )
}
