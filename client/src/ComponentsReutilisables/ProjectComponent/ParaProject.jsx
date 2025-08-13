import whichClass from "../../fonction/projetFonction/WhichClass"
import { useRef } from "react"
import onMouseEnterProjet from "../../fonction/projetFonction/OnMouseEnterProjet";
import onMouseLeaveProjet from "../../fonction/projetFonction/OnMouseLeaveProjet";


export default function ParaProject({source,titre,contenu,number,srcImg}) {
    const paraInvisible = useRef("");
    const btnProjet=useRef("");

    return (
    <div  className={whichClass(number)}>
        <div onMouseEnter={()=>onMouseEnterProjet(paraInvisible,btnProjet)} onMouseLeave={()=>onMouseLeaveProjet(paraInvisible,btnProjet)} style={{boxShadow:"  rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"}} className='sup480:mb-[30px] sup768:mb-[40px] sup1024:mb-[50px] sup1600:mb-[60px]  hover:cursor-pointer relative mb-[20px] w-full '>
          <img   src={source} alt="" />
          <div  ref={paraInvisible}  className="absolute top-0 left-0 w-full h-full bg-black opacity-30 transform scale-0 rounded-[100%] ">
              
          </div>
          <button ref={btnProjet} className="sup480:text-[15px] sup480:px-[12px] sup480:py-[7px] sup768:text-[18px] sup768:px-[15px] sup768:py-[9px] sup768:hover:border-[2px] sup1024:text-[22px] sup1024:px-[18px] sup1024:py-[10px] sup1600:text-[24px] sup1600:px-[20px] sup1600:py-[11px] absolute bg-belge text-black border border-solid border-black  top-[85%] left-[70%] transfrom translate-x-[-50%] translate-y-[-50%] rounded-[10px] px-[10px] py-[5px] text-[12px] opacity-0 transition-all  duration-100 ease-in hover:border-[1px] hover:font-bold">
              watch
          </button>
        </div>
        <p className="sup480:mb-[10px] sup768:mb-[11px] sup1024:mb-[12px] sup1600:mb-[13px] mb-[8px] flex">
          {
            srcImg.map((item,index)=>{
              return(
                <img key={index} className="sup480:h-[22px] sup480:mr-[20px] sup768:h-[25px] sup768:mr-[22px] sup1024:h-[28px] sup1024:mr-[23px] sup1600:h-[33px] sup1600:mr-[25px] h-[18px] mr-[16px]" src={item} alt="" />
              )
            })
          }
          
        </p>
        <p className='sup480:text-[20px] sup480:mb-[10px] sup768:text-[23px] sup768:mb-[11px] sup1024:mb-[12px] sup1024:text-[26px] sup1600:text-[30px] sup1600:mb-[13px] text-[17px] font-bold opacity-[0.9] mb-[8px] '> {titre} </p>
        <p className='sup480:mb-[60px] sup480:text-[15px] sup768:mb-[70px] sup768:text-[18px] sup1024:mb-[80px] sup1024:text-[22px] sup1600:mb-[90px] sup1600:text-[24px] text-[12px] opacity-[0.8] mb-[50px] '>{contenu} </p>
    </div>
  )
}
