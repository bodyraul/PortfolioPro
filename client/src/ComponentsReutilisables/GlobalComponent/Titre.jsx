import React from 'react'

export default function Titre({color,contenu}) {
  return (
    <p className='titre font-[FacultyGlyphic] flex items-center justify-center w-full  '>
        <span className= {`sup1400:text-[100px] sup968:text-[70px] sup500:text-[50px]  text-[40px] ${color}`}>{contenu}</span>
    </p>
  )
}