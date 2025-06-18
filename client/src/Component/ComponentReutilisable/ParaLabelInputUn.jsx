import React from 'react'

export default function ParaLabelInputUn({placeholder,label}) {
  return (
    <p className=' text-white flex flex-col  w-[45%] '>
        <label className='sup968:mb-[14px] sup968:text-[21px] sup1400:mb-[20px] sup1400:text-[25px] ml-[30px] mb-[5px] ' htmlFor="">{label}</label>
        <input className='sup968:py-[15px] sup968:text-[18px] sup1400:placeholder:text-[21px]  sup1400:py-[20px] outline-none rounded-[15px] p-[10px] bg-gris opacity-[0.5]' placeholder={placeholder} type="text" />
    </p> 
  )
}
