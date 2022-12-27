document.getElementById("msg").addEventListener("keyup",function(){
    this.value = this.value.toUpperCase();
})
//Creando el abecedario
var letras="ABCDEFGHIJKLMNOPQRSTUVWXYZ"; ///letra x e la formula

var desplazamiento= 10;

function encriptar(){

    var passSistema= "g4iHQP43%5d9";
    var msgError = "Error en la contraseña, vuelve a intentarlo";
    var password = document.getElementById("pass").value;
    var mensaje = document.getElementById("msg").value;

    var ResultadoEncriptado="";

    if(password === passSistema){
        document.getElementById("error").innerHTML=" ";

        for( let i=0; i<mensaje.length; i++){
            //validando que sea una letra

            if( letras.indexOf(mensaje[i])!=-1){
                //conversion a codigo CESAR
                var asciiEncriptado = mensaje.charCodeAT(i);
                var formulaCesar=(asciiEncriptado - 65 + desplazamiento) % 26 + 65;

                var nuevaletra = String.fromCharCode(formulaCesar);

                ResultadoEncriptado = ResultadoEncriptado + nuevaletra;

            }
            else{
                ResultadoEncriptado = ResultadoEncriptado + mensaje[i];
            }
        }

        document.getElementById("demo1").innerHTML = ResultadoEncriptado;

    }
    else{
        document.getElementById("error").innerHTML =msgError;
    }
}

function desencriptar(){

}