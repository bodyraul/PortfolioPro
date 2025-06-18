import React from 'react'

export default function ParaLabelInputDeux({boolean,label,input}) {
    const paraUn = "sup1400:mb-[50px] text-white flex flex-col mb-[15px] ";
    const paraDeux = "sup1400:mb-[100px] text-white flex flex-col mb-[50px]  ";
    const inputUn="sup968:py-[15px] sup968:text-[18px]  sup1400:placeholder:text-[21px]  sup1400:py-[20px]  outline-none rounded-[15px] p-[10px] bg-gris opacity-[0.5]";
    const inputDeux="sup968:text-[18px] sup1400:placeholder:text-[21px] outline-none rounded-[15px] p-[10px] pb-[150px] bg-gris opacity-[0.5]";
    return(
        <p className={boolean === "true"? paraUn: paraDeux}>
            <label className='sup968:mb-[14px] sup968:text-[21px]  sup1400:mb-[20px] sup1400:text-[25px] ml-[30px] mb-[5px] ' htmlFor="">{label}</label>
            <input className={boolean==="true"? inputUn : inputDeux} placeholder={input} type="text" />
        </p> 
    )

}

