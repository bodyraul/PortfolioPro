
export default function scrollInToo(texte){
     document.querySelector(`${texte}`).scrollIntoView({
        behavior: 'smooth'
    });
}