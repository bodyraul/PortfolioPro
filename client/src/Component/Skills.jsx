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
    <div className=' skills bg-belge  w-full'>
      <Titre  color="text-noir" contenu=" skills"></Titre>
      <div className='sup1400:pt-[150px] sup968:pt-[120px] sup968:flex w-[80%] items-center justify-between pt-[80px]  my-0 mx-auto max-w-[1400px] '>
        <ParaSkills titre="Front-end" sourceUne={react} contenuUn="React" sourceDeux={tailwind} contenuDeux="Tailwind" transfromUn={"sup500:translate-x-[14px]"} transfromDeux={"sup500:translate-x-[11px]"} transfromTrois={"sup1400:translate-x-[12px]"} transfromQuatre={"sup1400:translate-x-[25px]"} pading={"pl-[30px]"} ></ParaSkills>
        <ParaSkills titre="Back-end" sourceUne={mongodb} contenuUn="MongoDB" sourceDeux={node} contenuDeux="NodeJS" transfromUn={"sup500:translate-x-[35px]"} transfromDeux={"sup500:translate-x-[10px]"} transfromTrois={"sup1400:translate-x-[32px]"} transfromQuatre={"sup1400:translate-x-[16px]"} pading={"pl-[30px]"} ></ParaSkills>
        <ParaSkills titre="Tools" sourceUne={github} contenuUn="Guithub" sourceDeux={figma} contenuDeux="Figma" transfromUn={"sup500:translate-x-[27px]"} transfromDeux={"sup500:translate-x-[0px]"} transfromTrois={"sup1400:translate-x-[19px]"} transfromQuatre={"sup1400:translate-x-[6px]"} pading={"pr-[30px]"} ></ParaSkills>
      </div>
    </div>
  )
}
