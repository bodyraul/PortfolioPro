import React from 'react'
import { useContext } from 'react'
import langueContext from '../../context/LangueContext'
import tabTextePresentation from '../../tools/tab/tabPresentation/TabTextPresentation';
import ParaPresentation from '../../ComponentsReutilisables/presentationComponent/ParaPresentation';

export default function ParaTexte() {
    const {langue} = useContext(langueContext);
  return (
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
            <ParaPresentation nb={0} texte={"France, Sannois"}  />
            <ParaPresentation nb={1} texte={langue==="anglais"? tabTextePresentation.ang[2] :tabTextePresentation.fr[2]}/>
        </div>
    </div>
  )
}
