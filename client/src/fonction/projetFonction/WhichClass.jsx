export default function whichClass  (number){
       if(number==="un"){
          return "sup1024:col-start-1 sup1024:col-end-3 row-start-1 row-end-2 col-start-1 col-end-2  flex flex-col items-start justify-evenly"
        }
        if(number==="deux"){
          return "sup1024:col-start-2 sup1024:col-end-4 row-start-2 row-end-3 col-start-1 col-end-2    flex flex-col items-start justify-evenly"
        }
          return "sup1024:col-start-1 sup1024:col-end-3 row-start-3 row-end-4 col-start-1 col-end-2  flex flex-col items-start justify-evenly"
    }