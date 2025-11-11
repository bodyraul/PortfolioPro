import React from 'react'
import hamburger from '../../Asset/Img/hamburger.png'
import croix from '../../Asset/Img/close.png'
import UseAfficheMobilNav from '../../CustomHoocks/nav/UseAfficheMobilNav'
import LienSujetSiteMobilNav from './LienSujetSiteMobilNav'
import LienNavMobile from './LienNavMobile'
import FlagMobilNav from './FlagMobilNav'

export default function MobileNav() {
  
  const  {setactive,x,burger,nav,langue,setlangue}=UseAfficheMobilNav();

  return (
    <nav className='navbar fixed w-full my-0 mx-0 z-50 '>
        <div className=' w-[95%] my-0 mx-auto flex items-center justify-end pt-[15px] relative '>
            <img onClick={()=>setactive(true)} ref={burger} className=' absolute w-[20px] hover:cursor-pointer top-[170%] right-[12px] transition-all duration-150 ease-in z-50' src={hamburger} alt="" />
            <img onClick={()=>setactive(false)} ref={x} className=' absolute top-[27px] right-[18px] w-[20px] hidden hover:cursor-pointer transform translate-x-[50px] opacity-0 transition-all duration-150 ease-in  z-50' src={croix} alt="" />
            <div ref={nav} className=' absolute pt-[10px] h-[280px] w-[140px] top-[150%] hidden flex-col justify-evenly items-center transform translate-x-[80px] opacity-0 transition-all duration-150 ease-in z-40 bg-black text-belge rounded-[10px]'>
                <LienNavMobile langue={langue} />
                <LienSujetSiteMobilNav/>
                <FlagMobilNav setlangue={setlangue} />
            </div>
        </div>
    </nav> 
  )
}
