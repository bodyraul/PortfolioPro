import React from 'react'
import tabImgPresentation from '../../tools/tab/tabPresentation/TabImgPresentation'

export default function ParaPresentation({nb,texte}) {
  return (
    <p className='sup480:pb-[1px] sup1400:pr-[50px]  sup968:pr-[30px] sup968:pb-0 flex items-center pb-[0px] transform translate-x-[-4px]'>
        <img className='h-[20px] mr-[15px]' src={tabImgPresentation.srcImg[nb]} alt={tabImgPresentation.alt[nb]} />
        <span>{texte}</span>
    </p>
  )
}
