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
    <div className='presention sup1400:py-[150px] sup968:py-[120px] w-full bg-belge py-[80px] my-0 mx-auto '>
      <div className='sup1400:mt-[150px] sup968:mt-[120px] sup750:flex sup750:flex-row-reverse sup750:justify-between sup750:items-start mt-[80px] w-[80%]  mx-auto  pl-[20px] max-w-[1400px] relative '>
        <p className='sup750:h-[138px] sup750:translate-y-[12px]  sup968:h-[180px] sup968:translate-y-[18px] sup1400:h-[231px] sup1400:translate-y-[2px]   absolute w-[5px] h-[341px] bg-jaune top-0 left-0'></p>
        <p className='sup1400:size-[235px] sup1400:translate-y-[23px]  sup968:translate-y-[16px] sup968:size-[180px] sup750:mb-0 w-[140px] h-[140px] border-[2px] border-solid border-black rounded-full mb-[50px] translate-y-[13px] '></p>
        <div>

            <p className=' sup1400:pb-[15px] sup1400:text-[70px] sup968:pb-[12px] sup968:text-[50px] text-[30px] font-black pb-[7px] '>
              <span>Péria Aurélien</span>
            </p>
            <p className='sup1400:pb-[10px]  sup1400:text-[35px] sup968:pb-[7px] sup968:text-[30px]  text-[20px] font-bold pb-[5px] ' >
              {langue==="anglais"? tabTextePresentation.ang[0] :tabTextePresentation.fr[0]}
            </p>
            <p className='sup1400:pb-[10px]  sup1400:text-[25px] sup968:pb-[7px] sup968:text-[20px]  text-[12px] pb-[5px] '>
              {langue==="anglais"? tabTextePresentation.ang[1] :tabTextePresentation.fr[1]}
            </p>
            <div className='sup1400:text-[25px] sup968:flex-row sup968:text-[20px] text-[12px]  flex flex-col'>
              <ParaPresentation src={gps} alt={"Logo localisation"} texte={"France, Sannois"}  />
              <ParaPresentation src={voiture} alt={"Logo voiture"} texte={langue==="anglais"? tabTextePresentation.ang[2] :tabTextePresentation.fr[2]}/>
            </div>
        </div>
      </div>
    </div>
  )
}



