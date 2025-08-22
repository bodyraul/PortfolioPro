import React from 'react'
import scrollInToo from '../../fonction/navFonction/ScrollFonction'

export default function LienSujetSiteMobilNav({langue}) {
  return (
    <>
        <span onClick={()=>scrollInToo(".projet")} className='sup768:text-[17px] sup480:text-[15px] text-[12px] hover:cursor-pointer' >
            {langue==="francais"?"Projet":"Project"}
        </span>
        <span onClick={()=>scrollInToo(".skills")} className='sup768:text-[17px] sup480:text-[15px] text-[12px] hover:cursor-pointer'>
            {langue==="francais"?"Compétences":"Skills"}
        </span>
        <span onClick={()=>scrollInToo(".presention")} className='sup768:text-[17px] sup480:text-[15px] text-[12px] hover:cursor-pointer'>
            {langue==="francais"?"Présentation":"About"}
        </span>
    </>
  )
}
