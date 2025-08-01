import React from 'react'
import Titre from '../ComponentsReutilisables/GlobalComponent/Titre'
import react from "../Asset/Img/react.png"
import tailwind from "../Asset/Img/tailwind.png"
import node from "../Asset/Img/node.png"
import mongodb from "../Asset/Img/mongodb.png"
import github from "../Asset/Img/github.png"
import fm from "../Asset/Img/fm.png"
import ParaSkills from '../ComponentsReutilisables/SkillsComponent/ParaSkills'

export default function Skills() {
  return (
    <div className=' skills bg-belge  w-full'>
      <Titre  color="text-noir" contenu=" skills"></Titre>
      <div className='sup1400:py-[150px] sup1400:h-[1250px] sup968:h-[1000px] sup968:py-[120px] py-[80px] flex flex-col justify-evenly w-[80%] h-[600px]  my-0 mx-auto max-w-[1400px]'>
        <div className='h-[27%] flex flex-col justify-evenly'>
          <p className='sup1400:text-[40px]  sup968:text-[32px] text-[28px] text-noir font-medium'>
              Front-end
          </p>
          <p className='sup1400:w-[160px] sup968:w-[135px] flex justify-between w-[120px] '>
            <span className='sup1400:text-[24px]  sup968:text-[20px] text-[18px]'>React</span>
            <img className='sup1400:w-[40px] sup968:w-[30px] w-[25px] ' src={react} alt="" />
          </p>
          <p className='sup1400:w-[160px]  sup968:w-[135px] flex justify-between w-[120px] '>
            <span className='sup1400:text-[24px]  sup968:text-[20px] text-[18px]'>Tailwind</span>
             <img className='sup1400:w-[40px]  sup968:w-[30px] w-[25px] '  src={tailwind} alt="" />
          </p>
        </div>
        <div className='h-[27%] flex flex-col justify-evenly'>
          <p className='sup1400:text-[40px]  sup968:text-[32px] text-[28px] text-noir font-medium'>
              Back-end
          </p>
          <p className='sup1400:w-[160px] sup968:w-[135px] flex justify-between w-[120px] '>
            <span className='sup1400:text-[24px]  sup968:text-[20px] text-[18px]'>Node.js</span>
            <img className='sup1400:w-[40px] sup968:w-[30px] w-[25px] ' src={node} alt="" />
          </p>
          <p className='sup1400:w-[160px]  sup968:w-[135px] flex justify-between w-[120px] '>
            <span className='sup1400:text-[24px]  sup968:text-[20px] text-[18px]'>MongoDb</span>
             <img className='sup1400:w-[40px]  sup968:w-[30px] w-[25px] '  src={mongodb} alt="" />
          </p>
        </div>
        <div className='h-[27%] flex flex-col justify-evenly'>
          <p className='sup1400:text-[40px]  sup968:text-[32px] text-[28px] text-noir font-medium'>
              Tools
          </p>
          <p className='sup1400:w-[160px] sup968:w-[135px] flex justify-between w-[120px] '>
            <span className='sup1400:text-[24px]  sup968:text-[20px] text-[18px]'>Github</span>
            <img className='sup1400:w-[40px] sup968:w-[30px] w-[25px] ' src={github} alt="" />
          </p>
          <p className='sup1400:w-[160px]  sup968:w-[135px] flex justify-between w-[120px] '>
            <span className='sup1400:text-[24px]  sup968:text-[20px] text-[18px]'>FramerM</span>
             <img className='sup1400:w-[40px]  sup968:w-[30px] w-[25px] '  src={fm} alt="" />
          </p>
        </div>
      </div>
    </div>
  )
}
