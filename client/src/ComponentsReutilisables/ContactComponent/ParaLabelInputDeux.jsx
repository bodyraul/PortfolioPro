import React from 'react'
import tabPara from '../../tools/tab/tabParaLabelInputDeux/TabPara';
import tabInput from '../../tools/tab/tabParaLabelInputDeux/TabInput';

export default function ParaLabelInputDeux({boolean,label,input}) {
    return(
        <p className={boolean === "true"? tabPara[0]: tabPara[1]}>
            <label className='sup968:mb-[14px] sup968:text-[21px]  sup1400:mb-[20px] sup1400:text-[25px] ml-[30px] mb-[5px] ' htmlFor="">{label}</label>
            <input  className={boolean==="true"? tabInput[0] : tabInput[1]} placeholder={input} type="text"  />
        </p> 
    )

}

