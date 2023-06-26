function info(id, carta){
    let div = document.getElementById(id);
    var carta = document.getElementById(carta);  
    if (div.style.display == 'flex'){
        div.style.display= 'none';
        carta.style.minHeight= '30vh'
    }else{
        div.style.display= 'flex';
        if (window.innerWidth > 1024){
            carta.style.minHeight= '40vh'
        }else{
            carta.style.minHeight= '60vh'
        }
    }
}