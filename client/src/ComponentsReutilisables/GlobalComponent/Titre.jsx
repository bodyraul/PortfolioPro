import React from 'react'

export default function Titre({color,contenu}) {
  return (
    <div className='titre font-[FacultyGlyphic] flex items-center justify-start w-[80%] max-w-[1400px] my-0 mx-auto  '>
        <div className=' w-auto relative'>
          <p className='sup1400:w-[20%] sup968:w-[50px] w-[35px] h-full absolute border-b-[3px] border-jaune' ></p>
          <span className= {`sup480:text-[40px] sup768:text-[50px] sup1024:text-[60px] sup1600:text-[70px] text-[30px] ${color}`}>{contenu}</span>
        </div>
    </div>
  )
}