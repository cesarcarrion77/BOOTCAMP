
var resultado=0;
function suma(a,b){
    resultado=a+b;
    return resultado;
}
console.log(suma(4,2));

// let AreaCirdulo;
// let radio;
// const pi=3.14;
// radio=prompt("Ingrese el radio:");
// AreaCirdulo=pi*radio*radio;
// console.log(AreaCirdulo);

// const pi=3.14;
// let radio;
// function AreaCirculo(radio){
//     resultado=pi*radio*radio;
//     return resultado;
// }
// ValorRadio=prompt("Ingrese el radio: ");
// console.log(AreaCirculo(ValorRadio));

function notas(calificacion){
    if(calificacion>=13){
        alert("Usted aprobo el curso");
    }
    else if(calificacion<13){
        alert("Usted esta desaprobado");
    }
}
NotaFinal=prompt("Ingrese la nota");
console.log(notas(NotaFinal));

function AreaTriangulo(base,altura){
    let area=base*altura/2;
    return area;
}

let BaseT=prompt("Ingrese la base");
let AlturaT=prompt("Ingrese la altura");

console.log(AreaTriangulo(BaseT,AlturaT));