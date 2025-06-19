import React, { useEffect, useState } from 'react'
import { useRef } from 'react';

export default function ParaProject({source,titre,contenu,number}) {
    const classref=useRef("");
    const [first, setfirst] = useState(true);

    useEffect(() => {
     if(number==="un"){
      classref.current="sup968:col-start-1 sup968:col-end-3 row-start-1 row-end-2 col-start-1 col-end-2  flex flex-col items-start justify-evenly"
      console.log("un")
      setfirst(!first)
      return;
     }
     if(number==="deux"){
      classref.current="sup968:col-start-2 sup968:col-end-4 row-start-2 row-end-3 col-start-1 col-end-2    flex flex-col items-start justify-evenly"
       console.log("deux")
       setfirst(!first)
       return;
     }
      classref.current="sup968:col-start-1 sup968:col-end-3 row-start-3 row-end-4 col-start-1 col-end-2  flex flex-col items-start justify-evenly"
         console.log("trois")
         setfirst(!first)
    }, [])
    
    return (
    <div  className={classref.current} >
        <img style={{boxShadow:"   0 40px 60px -6px black"}} className='mb-[35px] ' src={source} alt="" />
        <p className=' sup1400:text-[35px] sup968:text-[30px] text-[25px] font-bold opacity-[0.9] mb-[30px] '> {titre} </p>
        <p className='sup1400:text-[25px] sup968:text-[20px] text-[15px] opacity-[0.8] mb-[30px] '>{contenu} </p>
    </div>
  )
}
