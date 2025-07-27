import React from 'react'
import Titre from '../ComponentsReutilisables/GlobalComponent/Titre'
import react from "../Asset/Img/react.png"
import tailwind from "../Asset/Img/tailwind.png"
import node from "../Asset/Img/node.png"
import mongodb from "../Asset/Img/mongodb.png"
import github from "../Asset/Img/github.png"
import figma from "../Asset/Img/figma.png"
import ParaSkills from '../ComponentsReutilisables/SkillsComponent/ParaSkills'

export default function Skills() {
  return (
    <div className=' skills bg-belge pb-[150px] '>
      <Titre  color="text-noir" contenu=" skills"></Titre>
      <div className='sup968:w-full sup968:flex items-center justify-evenly pt-[150px] '>
        <ParaSkills titre="Front-end" sourceUne={react} contenuUn="React" sourceDeux={tailwind} contenuDeux="Tailwind" marginUne={"sup500:ml-[13px] "} MarginDeux={" sup500:ml-[40px] "} pading={"pl-[30px]"} ></ParaSkills>
        <ParaSkills titre="Back-end" sourceUne={mongodb} contenuUn="MongoDB" sourceDeux={node} contenuDeux="NodeJS" marginUne={"sup500:ml-[60px] "} MarginDeux={" sup500:ml-[30px] "} pading={"pl-[30px]"} ></ParaSkills>
        <ParaSkills titre="Tools" sourceUne={github} contenuUn="Guithub" sourceDeux={figma} contenuDeux="Figma" marginUne={"sup500:ml-[35px] "} MarginDeux={" sup500:ml-[20px] "} pading={"pr-[30px]"} ></ParaSkills>
      </div>
    </div>
  )
}
