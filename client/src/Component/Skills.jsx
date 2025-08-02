import React from 'react'
import Titre from '../ComponentsReutilisables/GlobalComponent/Titre'
import react from "../Asset/Img/react.png";import tailwind from "../Asset/Img/tailwind.png";import node from "../Asset/Img/node.png";import mongodb from "../Asset/Img/mongodb.png";import github from "../Asset/Img/github.png";import fm from "../Asset/Img/fm.png";
import TitreSkill from '../ComponentsReutilisables/SkillsComponent/TitreSkill'
import ParaSkill from '../ComponentsReutilisables/SkillsComponent/ParaSkill'
import { useContext } from 'react'
import langueContext from '../context/LangueContext'

export default function Skills() {
  const {langue} = useContext(langueContext);
  return (
    <div className=' skills bg-belge  w-full'>
      <Titre  color="text-noir" contenu={langue==="anglais"? "Skills": "Compétences"}></Titre>
      <div className='sup1400:h-[1250px] sup968:h-[1000px] sup968:py-[80px] py-[40px] flex flex-col justify-evenly w-[80%] h-[600px]  my-0 mx-auto max-w-[1400px]'>
        <div className='h-[27%] flex flex-col justify-evenly'>
          <TitreSkill>Front-end</TitreSkill>
          <ParaSkill src={react} >React</ParaSkill>
          <ParaSkill src={tailwind} >Tailwind</ParaSkill>
        </div>
        <div className='h-[27%] flex flex-col justify-evenly'>
          <TitreSkill>Back-end</TitreSkill>
          <ParaSkill src={node} >Node.js</ParaSkill>
          <ParaSkill src={mongodb} >MongoDB</ParaSkill>
        </div><div className='h-[27%] flex flex-col justify-evenly'>
          <TitreSkill>{langue==="anglais"? "Tools": "Outils"}</TitreSkill>
          <ParaSkill src={github} >Github</ParaSkill>
          <ParaSkill src={fm} >FramerM</ParaSkill>
        </div>
      </div>
    </div>
  )
}
