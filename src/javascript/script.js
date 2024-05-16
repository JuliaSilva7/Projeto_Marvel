let imagens = ['src/assets/Mimages.jfif', 'src/assets/marvel3.jfif', 'src/assets/marvel2.jfif', 'src/assets/marvel4.webp', 'src/assets/Marvel.png'];
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

const btnMobile = document.querySelector("#botaoMob")

function Menu(){
    //Declarando a variavel e pegando o id
    const navbar=document.querySelector("nav")
    navbar.classList.toggle("active")
}
/*evento que ao clicar vai chamar a função menu */
btnMobile.addEventListener("click", Menu)
