import React from 'react'

export default function ParaPresentation({src,alt,texte}) {
  return (
    <p className='sup1400:pr-[50px]  sup968:pr-[30px] sup968:pb-0 flex items-center pb-[5px] transform translate-x-[-4px]'>
        <img className='h-[20px] mr-[15px]' src={src} alt={alt} />
        <span>{texte}</span>
    </p>
  )
}
