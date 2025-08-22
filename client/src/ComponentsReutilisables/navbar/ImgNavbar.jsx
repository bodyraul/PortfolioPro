import React from 'react'
import tabImgNav from '../../tools/tab/tabNav/TabImgNav'

export default function ImgNavbar({onclick,nb}) {
  return ( 
      <a target="blank"  href={tabImgNav.ref[nb]}>
        <img onClick={onclick} className='sup1024:w-[28px] sup1600:w-[35px] w-[35px] mr-[20px] transition-transform duration-150 ease-in hover:scale-125 hover:cursor-pointer' src={tabImgNav.srcImg[nb]} alt={tabImgNav.alt[nb]} />
      </a>
  )
}
