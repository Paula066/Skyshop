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


const buttonBurger = document.querySelector('.hamburger2');
const mobileMenu = document.querySelector('.mobile-menu2');

buttonBurger.addEventListener('click', function() {
    const active = mobileMenu.classList.contains('open');

    if (!active) {
        mobileMenu.classList.add('open');
    } else {
        mobileMenu.classList.remove('open');
    }
})