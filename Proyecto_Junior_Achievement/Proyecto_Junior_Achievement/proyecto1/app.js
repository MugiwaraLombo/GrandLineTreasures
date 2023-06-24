function info(id, img){
    let div = document.getElementById(id)
    let imagen = document.getElementById(img)
    if (div.style.display == 'flex'){
        div.style.display = 'none';
        imagen.style.height = '80%';
    }else{
        div.style.display = 'flex';
        div.style.width = '90%'
        imagen.style.height = '50%';
    }
}