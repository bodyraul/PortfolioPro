import React from 'react'
import tabImgPresentation from '../../tools/tab/tabPresentation/TabImgPresentation'

export default function ParaPresentation({nb,texte}) {
  return (
    <p className={` sup1400:pr-[50px]  sup968:pr-[30px] ${nb===0? `pb-[5px] sup480:pb-[6px] sup768:pb-[15px]`:`pb-[0]`} flex items-center  transform translate-x-[-4px]`}>
        <img className='h-[20px] mr-[15px]' src={tabImgPresentation.srcImg[nb]} alt={tabImgPresentation.alt[nb]} />
        <span>{texte}</span>
    </p>
  )
}
