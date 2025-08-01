import React from 'react'

export default function ParaSkills({titre,sourceUne,contenuUn,sourceDeux,contenuDeux,pading}) {
  return (
    <div className='sup500:w-[300px] sup968:w-[200px] sup1400:w-[300px] flex flex-col items-center justify-between w-[180px] pb-[50px] border border-black'>
        <p className='sup1400:pb-[65px] pb-[50px] bg-red-400'>
            <span className={`sup1400:text-[40px]  sup500:text-[32px] text-[28px] text-noir font-bold ${pading}`}>{titre}</span>
        </p>
        <div className='sup500:flex-row flex flex-col items-center justify-between w-full border border-red-400'>
          <div className='sup500:flex-col flex flex-row items-start justify-between w-full mb-[30px] '>
            <div className='flex flex-col items-center border border-blue-400'>
              <img className='sup1400:w-[40px]  w-[30px] ' src={sourceUne} alt="" />
              <p className='sup1400:pt-[15px]  sup1400:text-[24px]  sup500:text-[20px]  text-[18px] text-noir text-center w-full'>{contenuUn}</p>
            </div>
          </div>
          <div className='sup500:flex-col flex flex-row items-start justify-between w-full mb-[30px] '>
            <div className='flex flex-col items-center border border-blue-400'>
              <img className='sup1400:w-[40px]  w-[30px] ' src={sourceDeux} alt="" />
              <p className='sup1400:pt-[15px]  sup1400:text-[24px]  sup500:text-[20px]  text-[18px] text-noir text-center w-full'>{contenuDeux}</p>
            </div>
          </div>
        </div>
    </div>
  )
}
