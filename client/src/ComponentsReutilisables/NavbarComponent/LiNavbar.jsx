import React from 'react'

export default function LiNavbar({children,onclick}) {
  return (
    <span onClick={onclick} className='list-none hover:cursor-pointer transition-transform duration-150 ease-in hover:scale-125 mr-[60px] '>{children}</span>
  )
}
