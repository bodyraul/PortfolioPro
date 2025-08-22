import React from 'react'
import github from '../../Asset/Img/github.png'
import mail from '../../Asset/Img/mail.png'
import linkedin from '../../Asset/Img/linkdins.png'

export default function LienNavMobile() {
  return (
    <p className='w-[100%] flex justify-between'>
        <a target="blank"  href="https://www.linkedin.com/in/aur%C3%A9lien-peria-424224187/">
        <img  className='sup768:w-[23px] sup480:w-[21px] w-[19px] hover:cursor-pointer' src={linkedin} alt="" />
        </a>
        <a target="blank"  href="https://github.com/bodyraul">
            <img className='sup768:w-[23px] sup480:w-[21px] w-[19px] hover:cursor-pointer' src={github} alt="" />
        </a>
        <a target="blank"  href="mailto:aurelien.peria@gmail.com">
        <img className='sup768:w-[23px] sup480:w-[21px] w-[19px] hover:cursor-pointer' src={mail} alt="" />
        </a>
    </p>
  )
}
