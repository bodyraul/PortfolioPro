import React from 'react'

export default function LiNavbar({children}) {
  return (
    <li className='list-none hover:cursor-pointer transition-transform duration-150 ease-in hover:scale-125'>{children}</li>
  )
}
