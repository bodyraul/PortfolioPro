import React from 'react'
import hamburger from '../../Asset/Img/hamburger.png'

export default function MobileNav() {
  return (
    <nav className='navbar fixed w-full'>
        <div className='w-[95%] my-0 mx-auto flex items-center justify-between'>
            <p className='sup1400:text-[27px] text-[22px] flex flex-col '>
                <span>Portfolio</span>
                <span>2025</span>
            </p>
            <img className='w-[20px] hover:cursor-pointer ' src={hamburger} alt="" />
        </div>
    </nav> 
  )
}
