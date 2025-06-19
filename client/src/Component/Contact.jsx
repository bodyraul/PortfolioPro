import React from 'react'
import bird from "../Asset/Img/bird.png"
import ParaLabelInputUn from './ComponentReutilisable/ParaLabelInputUn'
import ParaLabelInputDeux from './ComponentReutilisable/ParaLabelInputDeux'
import ImgContact from './ComponentReutilisable/ImgContact'
import Titre from './ComponentReutilisable/Titre'

export default function Contact() {
  return (
    <div className='contact  bg-noir'>
      <Titre  color="text-white" contenu="Contact"></Titre>
      <section className='sup968:flex-row sup968:justify-around flex flex-col items-center justify-between w-full  py-[100px] '>
        <div className='sup968:w-[50%] sup968:max-w-[800px] w-[90%]   '>
            <div className='sup1400:pb-[50px] flex items-center justify-between pb-[15px] '>
                <ParaLabelInputUn placeholder="Name Surname" label="Name"></ParaLabelInputUn>
                <ParaLabelInputUn placeholder="Name@gmail.com" label="Mail"></ParaLabelInputUn>
            </div>
            <ParaLabelInputDeux boolean="true" label="Objet" input="Meeting, Project" ></ParaLabelInputDeux>
            <ParaLabelInputDeux boolean="false" label="Message" input="Hello, may i contact you for..."></ParaLabelInputDeux>
            <button className='sup1400:text-[40px] text-white text-[25px] w-[100%]  border-[2px] border-solid border-white rounded-[25px] pb-[15px]  '> Validation </button>
        </div>
        <div className="sup968:w-[45%] sup968:flex sup968:flex-col sup968:items-center sup968:max-w-[700px]   ">
            <p className='sup1400:text-[90px]  sup968:text-[60px] text-white text-[40px] pb-[100px] '>
                Any question ? <br></br>Contact me !
            </p>
            <p className='sup968:pb-[70px] flex justify-around pb-[100px] '>
                <ImgContact src={bird} alt=""></ImgContact>
                <ImgContact src={bird} alt=""></ImgContact>
                <ImgContact src={bird} alt=""></ImgContact>
                <ImgContact src={bird} alt=""></ImgContact>
            </p>
        </div>
      </section>
    </div>
  )
}
