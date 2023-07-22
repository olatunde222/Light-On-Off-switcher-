function changeImage(){
    var image = document.getElementById("image-button");
    if (image.src.match ('lightOn')){
        image.src = 'lightOff.png'
    } else{
        image.src = 'lightOn.png'
    }
}