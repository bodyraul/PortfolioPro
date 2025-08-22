import React from 'react'
import { useRef } from 'react'
import onMouseEnterProjet from '../../fonction/projetFonction/OnMouseEnterProjet';
import onMouseLeaveProjet from '../../fonction/projetFonction/OnMouseLeaveProjet';
import tabImgProjet from '../../tools/tab/tabProjet/TabImgProjet';
import tabRefBtnProjet from '../../tools/tab/tabProjet/tabRefBtnProjet';

export default function BigImgProjet({nb}) {
    const paraInvisible = useRef("");
    const btnProjet=useRef("");
    return (
        <div onMouseEnter={()=>onMouseEnterProjet(paraInvisible,btnProjet)} onMouseLeave={()=>onMouseLeaveProjet(paraInvisible,btnProjet)} style={{boxShadow:"  rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"}} className='sup480:mb-[30px] sup768:mb-[40px] sup1024:mb-[50px] sup1600:mb-[60px]  hover:cursor-pointer relative mb-[20px] w-full '>
            <img   src={tabImgProjet.srcBigImg[nb]} alt="" />
            <div  ref={paraInvisible} style={{boxShadow:"  rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"}}  className="absolute top-0 left-0 w-full h-full bg-black opacity-30 transform scale-0 rounded-[100%] ">
                
            </div>
            <a ref={btnProjet} className='"sup480:text-[15px] sup480:px-[12px] sup480:py-[7px] sup768:text-[18px] sup768:px-[15px] sup768:py-[9px] sup768:hover:border-[2px] sup1024:text-[22px] sup1024:px-[18px] sup1024:py-[10px] sup1600:text-[24px] sup1600:px-[20px] sup1600:py-[11px] absolute bg-belge text-black border border-solid border-black  top-[85%] left-[70%] transfrom translate-x-[-50%] translate-y-[-50%] rounded-[10px] px-[10px] py-[5px] text-[12px] opacity-0 transition-all  duration-100 ease-in hover:border-[2px] hover:font-bold"' 
            target='blanck' href={tabRefBtnProjet[nb]}>
            Watch
            </a>
        </div>
    )
    }
