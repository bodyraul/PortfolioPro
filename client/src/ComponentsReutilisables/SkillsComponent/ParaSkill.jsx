import React from 'react'

export default function ParaSkill({children,src}) {
  return (
    <p className='sup1400:w-[160px] sup968:w-[135px] flex justify-between items-center w-[100px] '>
        <span className='sup1400:text-[25px]  sup968:text-[20px] text-[12px]'>{children}</span>
        <img className='sup1400:w-[40px] sup968:w-[30px] w-[20px] translate-y-[-1px]' src={src} alt="Logo react" />
    </p>
  )
}
