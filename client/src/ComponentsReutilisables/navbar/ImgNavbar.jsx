import React from 'react'
import tabImgNav from '../../tools/tab/tabNav.js/TabImgNav'

export default function ImgNavbar({onclick,nb}) {
  return (
     <img onClick={onclick} className='w-[35px] mr-[20px] transition-transform duration-150 ease-in hover:scale-125 hover:cursor-pointer' src={tabImgNav.srcImg[nb]} alt={tabImgNav.alt[nb]} />
  )
}
