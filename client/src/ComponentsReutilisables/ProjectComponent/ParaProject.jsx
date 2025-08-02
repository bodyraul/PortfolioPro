import whichClass from "../../fonction/projetFonction/WhichClass"
import { useRef } from "react"
import onMouseEnterProjet from "../../fonction/projetFonction/OnMouseEnterProjet";
import onMouseLeaveProjet from "../../fonction/projetFonction/OnMouseLeaveProjet";


export default function ParaProject({source,titre,contenu,number,srcImg}) {
    const paraInvisible = useRef("");
    const btnProjet=useRef("");

    return (
    <div  className={whichClass(number)}>
        <div onMouseEnter={()=>onMouseEnterProjet(paraInvisible,btnProjet)} onMouseLeave={()=>onMouseLeaveProjet(paraInvisible,btnProjet)} style={{boxShadow:"  rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"}} className='sup1400:mb-[50px] sup968:mb-[40px] hover:cursor-pointer relative mb-[20px] w-full '>
          <img   src={source} alt="" />
          <div  ref={paraInvisible}  className="absolute top-0 left-0 w-full h-full bg-black opacity-30 transform scale-0 rounded-[100%] ">
              
          </div>
          <button ref={btnProjet} className="sup1400:text-[25px] sup1400:px-[18px] sup1400:py-[9px] sup968:text-[20px] sup968:px-[15px] sup968:py-[7px] sup968:hover:border-[2px] absolute bg-belge text-black border border-solid border-black  top-[85%] left-[70%] transfrom translate-x-[-50%] translate-y-[-50%] rounded-[10px] px-[10px] py-[5px] text-[12px] opacity-0 transition-all  duration-100 ease-in hover:border-[1px] hover:font-bold">
              watch
          </button>
        </div>
        <p className="sup968:mb-[15px] mb-[5px] flex">
          {
            srcImg.map((item,index)=>{
              return(
                <img key={index} className="sup1400:h-[30px] sup1400:mr-[25px] sup968:h-[25px] sup968:mr-[20px] h-[20px] mr-[15px]" src={item} alt="" />
              )
            })
          }
          
        </p>
        <p className=' sup1400:text-[35px] sup968:text-[30px] sup968:mb-[15px] text-[20px] font-bold opacity-[0.9] mb-[5px] '> {titre} </p>
        <p className='sup1400:text-[25px] sup968:text-[20px] text-[12px] opacity-[0.8] mb-[50px] '>{contenu} </p>
    </div>
  )
}
