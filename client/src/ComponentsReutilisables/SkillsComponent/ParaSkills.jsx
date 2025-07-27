import React from 'react'

export default function ParaSkills({titre,sourceUne,contenuUn,sourceDeux,contenuDeux,pading,marginUne,MarginDeux}) {
  return (
     <div className='sup500:w-[300px] flex flex-col items-center justify-between w-[180px] pb-[50px] '>
        <p className='sup1400:pb-[80px] pb-[50px]'>
            <span className={`sup1400:text-[40px]  sup500:text-[32px] text-[28px] text-noir font-bold ${pading}`}>{titre}</span>
        </p>
        <div className='sup500:flex-row flex flex-col items-center justify-evenly w-full'>
        <p className='sup500:flex-col flex flex-row items-center justify-evenly w-full mb-[30px] '>
            <img className={`sup1400:w-[50px] w-[30px] ${marginUne}`} src={sourceUne} alt="" />
            <span className='sup1400:pt-[25px]  sup1400:text-[24px]  sup500:text-[20px]  text-[18px] text-noir w-[50px]'>{contenuUn}</span>
        </p>
        <p className=' sup500:flex-col  flex flex-row items-center justify-evenly w-full mb-[30px] '>
            <img className={`sup1400:w-[50px] w-[35px] ${MarginDeux}`} src={sourceDeux} alt="" />
            <span className='sup1400:pt-[25px]  sup1400:text-[24px]  sup500:text-[20px] text-[18px] text-noir w-[50px] '>{contenuDeux} </span>
        </p>
        </div>
    </div>
  )
}
