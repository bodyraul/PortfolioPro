import React from 'react'
import { useContext } from 'react'
import langueContext from '../../context/LangueContext'
import tabTexteProjet from '../../tools/tab/tabProjet/TabTexteProjet'

export default function TexteProjet({nb}) {
    const {langue} = useContext(langueContext);
    return (
        <>
            <p className='sup480:text-[20px] sup480:mb-[10px] sup768:text-[23px] sup768:mb-[11px] sup1024:mb-[12px] sup1024:text-[26px] sup1600:text-[30px] sup1600:mb-[13px] text-[17px] font-bold opacity-[0.9] mb-[8px] '>
            {langue==="anglais"?tabTexteProjet.titre.ang[nb] : tabTexteProjet.titre.fr[nb]} 
            </p>
            <p className='sup480:mb-[60px] sup480:text-[15px] sup768:mb-[70px] sup768:text-[18px] sup1024:mb-[80px] sup1024:text-[22px] sup1600:mb-[90px] sup1600:text-[24px] text-[12px] opacity-[0.8] mb-[50px] '>
            {langue==="anglais"?tabTexteProjet.texte.ang[nb] : tabTexteProjet.texte.fr[nb]} 
            </p>
        </>
    )
}
