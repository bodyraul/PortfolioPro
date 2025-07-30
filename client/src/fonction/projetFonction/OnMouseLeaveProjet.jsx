export default function onMouseLeaveProjet(paraInvisible,btnProjet){
      paraInvisible.current.classList.add("disparitionProjet");
      paraInvisible.current.classList.remove("ApparitionProjet");
      btnProjet.current.classList.add("DisparitionBtnProjet");
      btnProjet.current.classList.remove("ApparitionBtnProjet");
    }
    