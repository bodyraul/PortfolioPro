

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
      <div className='sup480:pt-[100px] sup768:pt-[110px] sup1024:pt-[120px] sup1600:pt-[130px] pt-[80px]  flex flex-col justify-between w-[80%] mx-auto max-w-[1400px] '>
        <div className='sup480:pb-[25px] sup768:pb-[30px] sup1024:pb-[40px] sup1600:pb-[50px] flex flex-col justify-evenly pb-[20px]'>
          <TitreSkill>Front-end</TitreSkill>
          <ParaSkill src={react} >React</ParaSkill>
          <ParaSkill src={tailwind} >Tailwind</ParaSkill>
        </div>
        <div className='sup480:pb-[25px] sup768:pb-[30px] sup1024:pb-[40px] sup1600:pb-[50px]  flex flex-col justify-evenly pb-[20px]'>
          <TitreSkill>Back-end</TitreSkill>
          <ParaSkill src={node} >Node.js</ParaSkill>
          <ParaSkill src={mongodb} >MongoDB</ParaSkill>
        </div><div className='sup480:pb-[25px] sup768:pb-[30px] sup1024:pb-[40px] sup1600:pb-[50px] flex flex-col justify-evenly pb-[20px]'>
          <TitreSkill>{langue==="anglais"? "Tools": "Outils"}</TitreSkill>
          <ParaSkill src={github} >Github</ParaSkill>
          <ParaSkill src={fm} >FramerM</ParaSkill>
        </div>
      </div>
    </div>
  )
}

