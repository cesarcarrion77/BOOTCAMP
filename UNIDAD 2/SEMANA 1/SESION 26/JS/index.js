var numero=0;
while(numero<=4){
    console.log("Hola");
    numero=numero+1;
}
//reto 1
let npar=0;
while(npar<=100){
    
    console.log(npar);
    npar=npar+2;
}

//reto 2
let x=1;
while(x<=12){
    console.log(x);
    x=x+2;
}

//reto 3
let y=1;
while(y<=12){
    console.log(y);
    y=y+1;
}

//reto 4
var juegos=["minecraft","Fifa",20,50,36]

let i=0;
while(i<=(juegos.length-1)){
    console.log(juegos[i])
    i=i+1; 
}
let valor=0;
do{
    console.log(valor);
    valor=valor+1;
}
while(valor<=5);


let dato;

//const patron =/hola/;//patron de una palabra especifica
//const patron =/hola[0-9]/;  //partrones de una palabra con un numero
//const patron = /^[0-9]+$/; //patrones con numeros
//const patron =/hola[0-9]mundo/;//patron palabra,un numero,palabra
const patron=/hols[0-9]+mundo/;//patron palabra, varios numeros, palabra

do{
    dato = prompt("Ingresa tu edad: ");
}
while(!patron.test(dato))