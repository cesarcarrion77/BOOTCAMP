function resta(a,b){
    return a-b;
    
}
console.log(resta(5,4));

function suma(num1,num2){
    return num1+num2;

    
}
console.log(suma(20,5));//num1=20 y num2=5

function mult(n1,n2){
    return n1*n2;
}
console.log(mult(20,5));

function div(d1,d2){
    return d1/d2;
}
console.log(div(20,5));

function op(x1,x2,x3){
    return x1+x2-x3;
}
console.log(op(7,5,10));

function mensaje(a,b){
    if((a+b)>10){
        return "La suma es mayor a 10";
    
    }
    else{
        return "No es mayor a 10";
    }
}
console.log(mensaje(7,5));

function mensaje2(a,b){
    if((a*b)>10){
        return "el producto es mayor a 10";
    
    }
    else{
        return "No es mayor a 10";
    }
}
console.log(mensaje2(7,5));