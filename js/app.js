document.addEventListener('DOMContentLoaded', () => {

    /*Menu movil*/
    const menuMovil = document.querySelector('.nav-movil i')
    const navegacion = document.querySelector('.navegacion')
    menuMovil.addEventListener('click', e => {
        e.preventDefault()

        if (navegacion.classList.contains('activo')) {
            navegacion.classList.remove('activo')
            menuMovil.classList.remove('fa-times')
            menuMovil.classList.add('fa-bars')
        } else {
            navegacion.classList.add('activo')
            menuMovil.classList.remove('fa-bars')
            menuMovil.classList.add('fa-times')
        }

    })

    /* currucel */

    const imgFondo = document.querySelector('.header')

    const img = [
        "hero1",
        "hero2",
        "hero3",
        "hero4"
    ]

    posicion = 0
    setInterval(() => {
        if (posicion >= img.length -1) {
            posicion = 0
        } else {
            posicion++
        }

        imgFondo.style.backgroundImage = `url(../img/${img[posicion]}.jpg)`

    }, 5000);

})