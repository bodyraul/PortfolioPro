import React from 'react'
import gps from '../Asset/Img/gps.png'
import voiture from '../Asset/Img/voiture.png'
import ParaPresentation from '../ComponentsReutilisables/presentationComponent/ParaPresentation'
import { useContext } from 'react'
import langueContext from '../context/LangueContext'
import tabTextePresentation from '../tools/tab/tabPresentation/TabTextPresentation'

export default function Presentation() {
  const {langue} = useContext(langueContext);
  return (
    <div className='presention sup480:pt-[100px] sup480:pb-[60px] sup768:pt-[110px] sup768:pb-[70px] sup1024:pt-[120px] sup1024:pb-[80px] sup1600:pt-[130px] sup1600:pb-[90px] w-full bg-belge pt-[80px] pb-[50px] my-0 mx-auto '>
      <div className=' sup480:mt-[100px] sup768:mt-[110px] sup768:flex sup768:flex-row-reverse sup768:justify-between sup768:items-start sup1024:mt-[120px] sup1600:mt-[130px] mt-[80px] w-[80%]  mx-auto  pl-[20px] max-w-[1400px] relative '>
        <p className='sup480:h-[calc(100%-8px)] sup480:top-[2px] sup768:h-[calc(100%-19px)] sup768:top-[10px] sup1024:h-[calc(100%-24px)] sup1024:top-[14px] sup1600:h-[calc(100%-26px)] sup1600:top-[15px] absolute w-[5px] h-[calc(100%-18px)] bg-jaune top-[13px] left-0'></p>
        <p className='sup480:size-[155px] sup480:translate-y-[0px] sup768:mb-0 sup768:size-[190px] sup768:sup480:translate-y-[6px] sup1600:size-[220px] sup1600:translate-y-[3px] size-[140px] border-[2px] border-solid border-black rounded-full mb-[50px] translate-y-[13px] '></p>
        <div>
            <p className='sup480:text-[25px] sup480:pb-[9px] sup768:text-[30px] sup768:pb-[12px] sup1024:text-[35px] sup1024:pb-[14px] sup1600:text-[40px] sup1600:pb-[16px] text-[20px] font-black pb-[7px] '>
              <span>Péria Aurélien</span>
            </p>
            <p className='sup480:text-[20px] sup480:pb-[9px] sup768:text-[23px] sup768:pb-[12px] sup1024:text-[26px] sup1024:pb-[14px] sup1600:text-[30px] sup1600:pb-[16px] text-[17px] font-bold pb-[7px] ' >
              {langue==="anglais"? tabTextePresentation.ang[0] :tabTextePresentation.fr[0]}
            </p>
            <p className='sup480:text-[15px] sup480:pb-[9px] sup768:text-[18px] sup768:pb-[12px] sup1024:text-[22px] sup1024:pb-[14px] sup1600:text-[24px] sup1600:pb-[16px] text-[12px] pb-[7px] '>
              {langue==="anglais"? tabTextePresentation.ang[1] :tabTextePresentation.fr[1]}
            </p>
            <div className='sup480:text-[15px] sup768:text-[18px] sup1024:text-[22px] sup1024:flex-row sup1600:text-[24px] text-[12px]  flex flex-col'>
              <ParaPresentation src={gps} alt={"Logo localisation"} texte={"France, Sannois"}  />
              <ParaPresentation src={voiture} alt={"Logo voiture"} texte={langue==="anglais"? tabTextePresentation.ang[2] :tabTextePresentation.fr[2]}/>
            </div>
        </div>
      </div>
    </div>
  )
}



