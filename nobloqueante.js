//obtiene la fecha en milisengundos
let myTime = Date.now()
//Agregamos 3 segundos a la fecha
const endTime = myTime +3000
//funcion que imprime 2
function printTwo(){
    console.log(2)
}

console.log(1)

while (myTime<endTime){
    myTime  = Date.now()
}
//este codigo manda al event Loop la funcion 
setTimeout(printTwo,0)

console.log(3)