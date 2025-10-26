import React from 'react'
import photoProfil from '../../Asset/Img/photoProfil.png'

export default function ParaImg() {
  return (
    <p className='transform sup480:size-[200px] sup480:translate-y-[0px] sup768:mb-0 sup768:size-[205px] sup768:translate-y-[8px] sup1024:translate-y-[2px] sup1024:size-[250px] sup1600:size-[337px] sup1600:translate-y-[16px] size-[150px] border overflow-hidden border-jaune  rounded-full mb-[30px] translate-y-[13px] relative '>
      <img className=' sup480:scale-[2.3] sup480:top-[50%] sup768:scale-[1] sup768:top-[-20%] sup768:left-[-6%] w-full  rounded-full absolute top-[50%] left-[-20%] scale-[2.3]' src={photoProfil} alt="" />
    </p>
  
  )
}