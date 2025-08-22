import React from 'react'
import frFlag from '../../Asset/Img/frenchFlag.png'
import engFLag from '../../Asset/Img/englishFlag.png'

export default function FlagMobilNav({setlangue}) {
  return (
    <p className='w-[100%] flex justify-evenly'>
        <img onClick={()=>setlangue("francais")} className='sup768:w-[23px] sup480:w-[21px] w-[19px] hover:cursor-pointer' src={frFlag} alt="" />
        <img onClick={()=>setlangue("anglais")} className='sup768:w-[23px] sup480:w-[21px] w-[19px] hover:cursor-pointer' src={engFLag} alt="" />
    </p>
  )
}
