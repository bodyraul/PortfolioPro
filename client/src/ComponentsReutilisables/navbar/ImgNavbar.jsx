import React from 'react'

export default function ImgNavbar({onclick,source,alt}) {
  return (
     <img onClick={onclick} className='w-[35px] mr-[20px] transition-transform duration-150 ease-in hover:scale-125 hover:cursor-pointer' src={source} alt={alt} />
  )
}
