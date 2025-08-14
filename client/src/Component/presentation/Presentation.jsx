import React from 'react'
import TraitJaune from './TraitJaune'
import ParaImg from './ParaImg'
import ParaTexte from './ParaTexte'

export default function Presentation() {
  return (
    <div className='presention sup480:pt-[100px] sup480:pb-[60px] sup768:pt-[110px] sup768:pb-[70px] sup1024:pt-[120px] sup1024:pb-[80px] sup1600:pt-[130px] sup1600:pb-[90px] w-full bg-belge pt-[80px] pb-[50px] my-0 mx-auto '>
      <div className=' sup480:mt-[100px] sup768:mt-[110px] sup768:flex sup768:flex-row-reverse sup768:justify-between sup768:items-start sup1024:mt-[120px] sup1600:mt-[130px] mt-[80px] w-[80%]  mx-auto  pl-[20px] max-w-[1400px] relative '>
        <TraitJaune/>
        <ParaImg/>
        <ParaTexte/>
      </div>
    </div>
  )
}



