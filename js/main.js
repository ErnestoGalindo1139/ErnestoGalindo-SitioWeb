document.addEventListener('DOMContentLoaded', function () {
    iniciarApp();
})

function iniciarApp() {
    navegacionFija();
}

function navegacionFija() {
    const barra = document.querySelector('.navbar');
    const sobreMi = document.querySelector('.sobreMi');
    const body = document.querySelector('body');

    window.addEventListener('scroll', function () {
        if (sobreMi.getBoundingClientRect().bottom < 0) {
            barra.classList.add('fijo');
            body.classList.add('body-scroll');
        } else {
            barra.classList.remove('fijo');
            body.classList.remove('body-scroll');
        }
    });
}


