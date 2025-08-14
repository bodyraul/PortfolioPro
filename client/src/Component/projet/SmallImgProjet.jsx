import React from 'react'
import tabImgProjet from '../../tools/tab/tabProjet/TabImgProjet'

export default function SmallImgProjet({nb}) {
  return (
    <p className="sup480:mb-[10px] sup768:mb-[11px] sup1024:mb-[12px] sup1600:mb-[13px] mb-[8px] flex">
        {
        tabImgProjet.srcSmallImg[nb].map((item,index)=>{
            return(
            <img key={index} className="sup480:h-[22px] sup480:mr-[20px] sup768:h-[25px] sup768:mr-[22px] sup1024:h-[28px] sup1024:mr-[23px] sup1600:h-[33px] sup1600:mr-[25px] h-[18px] mr-[16px]" src={item} alt="" />
            )
        })
        }
    </p>
  )
}
