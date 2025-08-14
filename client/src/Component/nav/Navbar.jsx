import React from 'react'
import DekstopNav from './DekstopNav';
import MobileNav from './MobileNav';
import UseWindowSize from '../../CustomHoocks/globalHoocks/UseWindowSize'

export default function Navbar() {
  const size =UseWindowSize();

   if(size.width<=968){
      return(
        <MobileNav/>
      )
    }
    if(size.width>968){
      return(
        <DekstopNav/>
    )
  }
}
