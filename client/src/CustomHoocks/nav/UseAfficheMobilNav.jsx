import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import langueContext from '../../context/LangueContext';

export default function UseAfficheMobilNav() {
  const [active, setactive] = useState();
  const x = useRef("");
  const burger = useRef("");
  const nav = useRef("");
  const {langue,setlangue} = useContext(langueContext);

  useEffect(() => {
    if(active===true){
      burger.current.style.transform ="translateX(30px)";
      burger.current.style.opacity ="0";
      x.current.style.display ="block";
      nav.current.style.display ="flex";
      setTimeout(() => {
          x.current.style.transform ="translateX(5px)";
          x.current.style.opacity ="1";
          nav.current.style.transform ="translateX(0px)";
          nav.current.style.opacity ="1";
      }, 10);
      setTimeout(() => {
        burger.current.style.display ="none";
      }, 150);
    }
    if(active===false){
      burger.current.style.display ="block";
      x.current.style.transform ="translateX(30px)";
      x.current.style.opacity ="0";
      nav.current.style.transform ="translateX(80px)";
      nav.current.style.opacity ="0";
       setTimeout(() => {
        burger.current.style.transform ="translateX(0px)";
        burger.current.style.opacity ="1";
      }, 10);
      setTimeout(() => {
         x.current.style.display ="none";
        nav.current.style.display ="none";
      }, 150);
    }
  }, [active,setactive])

  return {setactive,x,burger,nav,langue,setlangue}

}
