

// var musicaAudio =document.getElementById("musica");

    // function reproduccion(){
    //     musicaAudio.play();
    // }

    let sonido = new Audio("./audio/Morat.mp3");
    // function reproduccion(){
    //     sonido.play();
    // }

    reproducir.addEventListener("click",function(){
        
        sonido.volume =0.1;
        sonido.loop = true;
        sonido.playbackRate = 1; //0 al 4 
        sonido.play();
    })

    parar.addEventListener("click",function(){
        sonido.pause();
        sonido.currentTime=0; /*inicia en el segundo que se le indica(0)*/
    })

    pausa.addEventListener("click",function(){
        sonido.pause();
    })