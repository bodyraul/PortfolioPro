import React from 'react'

export default function Titre({color,contenu}) {
    const classSpan=`sup1400:text-[100px] text-[60px] ${color}`;
  return (
    <p className='titre sup1400:pb-[130px] font-[FacultyGlyphic] flex items-center justify-center w-full pb-[70px] '>
        <span className= {classSpan}>{contenu}</span>
    </p>
  )
}