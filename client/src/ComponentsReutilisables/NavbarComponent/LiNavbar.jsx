import React from 'react'
import onMouseEnterNavbar from '../../fonction/NavbarFonction/OnMouseEnterNavbar'
import onMouseLeaveNavbar from '../../fonction/NavbarFonction/OnMouseLeaveNavbar'

export default function LiNavbar({children}) {
  return (
    <li onMouseEnter={(e)=>onMouseEnterNavbar(e)} onMouseLeave={(e)=>onMouseLeaveNavbar(e)} className='list-none hover:cursor-pointer transition-transform duration-150 ease-in'>{children}</li>
  )
}
