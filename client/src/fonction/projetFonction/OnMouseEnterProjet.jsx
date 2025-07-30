export default  function onMouseEnterProjet(paraInvisible,btnProjet){
      paraInvisible.current.classList.add("ApparitionProjet");
      paraInvisible.current.classList.remove("disparitionProjet");
      btnProjet.current.classList.add("ApparitionBtnProjet");
      btnProjet.current.classList.remove("DisparitionBtnProjet");
    }