import React from 'react'

export default function ParaAbout({children}) {
  return (
    <p className={`sup480:text-[15px] sup480:pb-[14px] sup768:text-[18px] sup768:pb-[16px] sup1024:text-[22px] sup1024:pb-[18px] sup1600:text-[24px] sup1600:pb-[20px] text-[12px] pb-[12px]`}>{children}</p>
  )
}
