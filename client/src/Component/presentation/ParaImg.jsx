import React from 'react'
import photoProfil from '../../Asset/Img/photoProfil.png'

export default function ParaImg() {
  return (
    <p className='transform sup480:size-[200px] sup480:translate-y-[0px] sup768:mb-0 sup768:size-[205px] sup768:translate-y-[8px] sup1024:translate-y-[2px] sup1024:size-[250px] sup1600:size-[337px] sup1600:translate-y-[16px] size-[150px] border overflow-hidden border-jaune  rounded-full mb-[30px] translate-y-[13px] relative '>
      <img className=' w-[90%]  rounded-full absolute top-[-20%] left-[-4%]' src={photoProfil} alt="" />
    </p>
  
  )
}