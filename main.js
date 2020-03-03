const burger = document.querySelector('.hamburger');
const burgerMenu = document.querySelector('.menu-mobile');

burger.addEventListener('click', () => {
    const active = burgerMenu.classList.contains('open');
    if (!active) {
        burgerMenu.classList.add('open')
    } else {
        burgerMenu.classList.remove('open');
    }
})