import React from 'react'

export default function ParaSkills({titre,sourceUne,contenuUn,sourceDeux,contenuDeux,pading,transfromUn,transfromDeux,transfromTrois,transfromQuatre}) {
  return (
    <div className='sup500:w-[300px] sup968:w-[200px] sup1400:w-[300px] flex flex-col items-center justify-between w-[180px] pb-[50px] '>
        <p className='sup1400:pb-[80px] pb-[50px]'>
            <span className={`sup1400:text-[40px]  sup500:text-[32px] text-[28px] text-noir font-bold ${pading}`}>{titre}</span>
        </p>
        <div className='sup500:flex-row flex flex-col items-center justify-evenly w-full'>
        <p className='sup500:flex-col flex flex-row items-start justify-evenly w-full mb-[30px] '>
            <img className={`sup1400:w-[50px] ${transfromTrois} w-[30px] ${transfromUn}`} src={sourceUne} alt="" />
            <span className='sup1400:pt-[25px]  sup1400:text-[24px]  sup500:text-[20px]  text-[18px] text-noir w-[50px]'>{contenuUn}</span>
        </p>
        <p className=' sup500:flex-col  flex flex-row items-end justify-evenly w-full mb-[30px] '>
            <img className={`sup1400:w-[50px] ${transfromQuatre} w-[35px] transform ${transfromDeux}`} src={sourceDeux} alt="" />
            <span className='sup1400:pt-[25px]  sup1400:text-[24px]  sup500:text-[20px] text-[18px] text-noir w-[50px] '>{contenuDeux} </span>
        </p>
        </div>
    </div>
  )
}
