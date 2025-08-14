import React from 'react'
import tabImgSkill from '../../tools/tab/tabSkill/TabImgSkill'

export default function ParaSkill({nb,children}) {
  return (
    <p className='sup480:w-[95px] sup480:pb-[11px] sup768:w-[110px] sup1024:w-[130px] sup1600:w-[150px] flex justify-between items-center w-[82px] pb-[9px]'>
        <span className='sup480:text-[15px] sup768:text-[18px] sup1024:text-[22px] sup1600:text-[24px] text-[12px]'>{children}</span>
        <img className='sup480:w-[20px] sup768:w-[25px] sup1024:w-[28px] sup1600:w-[33px] w-[18px] translate-y-[-1px]' src={tabImgSkill[nb]} alt="Logo react" />
    </p>
  )
}
