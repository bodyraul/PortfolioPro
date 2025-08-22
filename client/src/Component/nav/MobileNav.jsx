import React from 'react'
import hamburger from '../../Asset/Img/hamburger.png'
import croix from '../../Asset/Img/croixNoir.png'
import UseAfficheMobilNav from '../../CustomHoocks/nav/UseAfficheMobilNav'
import LienSujetSiteMobilNav from './LienSujetSiteMobilNav'
import LienNavMobile from './LienNavMobile'
import FlagMobilNav from './FlagMobilNav'

export default function MobileNav() {
  
  const  {setactive,x,burger,nav,langue,setlangue}=UseAfficheMobilNav();

  return (
    <nav className='navbar fixed w-full my-0 mx-0 z-50 '>
        <div className='sup768:pt-[15px] sup768:w-[95%] w-[80%] my-0 mx-auto flex items-center justify-end pt-[15px] relative '>
            <img onClick={()=>setactive(true)} ref={burger} className='sup480:w-[20px] absolute w-[15px] hover:cursor-pointer top-[100%] transition-all duration-150 ease-in z-50' src={hamburger} alt="" />
            <img onClick={()=>setactive(false)} ref={x} className='sup480:w-[30px] absolute w-[25px] hidden hover:cursor-pointer top-[80%]  transform translate-x-[50px] opacity-0 transition-all duration-150 ease-in  z-50' src={croix} alt="" />
            <div ref={nav} className=' sup480:h-[250px] sup480:pt-[10px] sup480:w-[100px] sup768:w-[120px] absolute  h-[220px] w-[80px] top-[150%] hidden flex-col justify-evenly items-center transform translate-x-[80px] opacity-0 transition-all duration-150 ease-in z-40 '>
                <LienNavMobile langue={langue} />
                <LienSujetSiteMobilNav/>
                <FlagMobilNav setlangue={setlangue} />
            </div>
        </div>
    </nav> 
  )
}
