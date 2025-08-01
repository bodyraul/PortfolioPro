import React from 'react'
import gps from '../Asset/Img/gps.png'
import voiture from '../Asset/Img/voiture.png'


export default function Presentation() {
  return (
    <div className='presention sup1400:py-[150px] w-full bg-belge py-[120px] my-0 mx-auto'>
      <div className='sup1400:mt-[150px] sup968:mt-[120px] sup750:flex sup750:flex-row-reverse sup750:justify-between sup750:items-start mt-[80px] w-[80%]  mx-auto border-l-[5px] border-l-jaune pl-[20px] max-w-[1400px]'>
        <p className='sup1400:h-[200px] sup1400:w-[200px] sup750:mb-0 w-[140px] h-[140px] border-[2px] border-solid border-black rounded-full mb-[50px]'>
          
        </p>
        <div className=''>
            <p className='sup1400:text-[70px] sup968:text-[50px] text-[30px] font-black pb-[13px] '>Péria Aurélien</p>
            <p className='sup1400:text-[35px] sup968:text-[30px]  text-[20px] font-bold pb-[10px] ' >Front-end Developer</p>
            <p className='sup1400:text-[25px] sup968:text-[20px]  text-[12px] pb-[10px] '>I am looking for professional experience</p>
            <div className='sup1400:text-[25px] sup968:flex-row sup968:text-[20px] text-[12px] pb-[10px] flex flex-col'>
              <p className='sup1400:pr-[50px] sup968:pr-[30px] sup968:pb-0 flex items-center pb-[10px] transform translate-x-[-4px]'>
                <img className='h-[20px] mr-[15px]' src={gps} alt="" />
                <span>France, Sannois</span>
              </p>
              <p className='sup1400:pr-[50px] sup968:pr-[30px] sup968:pb-0 flex items-center pb-[10px] transform translate-x-[-4px]'>
                <img className='h-[20px] mr-[15px]'  src={voiture} alt="" />
                <span>Open to mobility</span>
              </p>
            </div>
        </div>
      </div>
    </div>
  )
}


