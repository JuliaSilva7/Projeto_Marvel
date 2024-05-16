let imagens = ['/src/assets/marvel.png', '/src/assets/marvel2.png', '/src/assets/marvel4.png'];
let index = 0;
let time =3000;

function slideShow() {
    document.getElementById('imgBanner').src = imagens[index];
    index++;

    if (index == imagens.length) {
        index = 0;
    }
    setTimeout('slideShow()', time);
}

slideShow();
