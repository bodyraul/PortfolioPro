import React from 'react'

export default function Titre({color,contenu}) {
  return (
    <div className='titre font-[FacultyGlyphic] flex items-center justify-start w-[80%] max-w-[1400px] my-0 mx-auto  '>
        <div className=' w-auto relative'>
          <p className='sup1400:w-[20%] sup968:w-[50px] w-[35px] h-full absolute border-b-[3px] border-jaune' ></p>
          <span className= {`sup1400:text-[80px] sup968:text-[70px] sup500:text-[50px]  text-[40px] ${color}`}>{contenu}</span>
        </div>
    </div>
  )
}