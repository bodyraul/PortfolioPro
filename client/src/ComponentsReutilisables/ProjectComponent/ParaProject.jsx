import whichClass from "../../fonction/projetFonction/WhichClass"
import { useRef } from "react"
import onMouseEnterProjet from "../../fonction/projetFonction/OnMouseEnterProjet";
import onMouseLeaveProjet from "../../fonction/projetFonction/OnMouseLeaveProjet";


export default function ParaProject({source,titre,contenu,number,srcImg}) {
    const paraInvisible = useRef("");
    const btnProjet=useRef("");

    return (
    <div  className={whichClass(number)}>
        <div onMouseEnter={()=>onMouseEnterProjet(paraInvisible,btnProjet)} onMouseLeave={()=>onMouseLeaveProjet(paraInvisible,btnProjet)} style={{boxShadow:"   0 40px 60px -6px black"}} className='hover:cursor-pointer relative mb-[80px] w-full '>
          <img style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}  src={source} alt="" />
          <div  ref={paraInvisible}  className="absolute top-0 left-0 w-full h-full bg-black opacity-30 transform scale-0 rounded-[100%] ">
              
          </div>
          <button ref={btnProjet} className="absolute bg-belge text-black border border-solid border-black text-[25px] top-[85%] left-[70%] transfrom translate-x-[-50%] translate-y-[-50%] rounded-[10px] px-[40px] py-[15px] opacity-0 transition-[border,font-weigt]  duration-100 ease-in hover:border-[3px] hover:font-bold">
              watch
          </button>
        </div>
        <p className="mb-[20px] flex">
          {
            srcImg.map((item,index)=>{
              return(
                <img key={index} className="h-[30px] mr-[15px]" src={item} alt="" />
              )
            })
          }
          
        </p>
        <p className=' sup1400:text-[35px] sup968:text-[30px] text-[20px] font-bold opacity-[0.9] mb-[15px] '> {titre} </p>
        <p className='sup1400:text-[25px] sup968:text-[20px] text-[12px] opacity-[0.8] mb-[15px] '>{contenu} </p>
    </div>
  )
}
