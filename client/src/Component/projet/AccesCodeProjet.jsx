import React from 'react'
import tabRefParaProjet from '../../tools/tab/tabProjet/tabRefParaProjet'

export default function AccesCodeProjet({nb}) {
  return (
     <p className="sup480:mb-[10px] sup768:mb-[11px] sup1024:mb-[12px]  sup1600:mb-[13px]  mb-[8px]">
        <a className="sup480:text-[20px] sup480:mb-[10px] sup768:text-[23px] sup768:mb-[11px] sup1024:mb-[12px] sup1024:text-[26px] sup1600:text-[30px] sup1600:mb-[13px] text-[17px]  font-bold " target="blank" href={tabRefParaProjet[nb]}>
        acces the code
        </a>
    </p>
  )
}
