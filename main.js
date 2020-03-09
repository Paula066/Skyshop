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

const input = document.getElementById('pass');

const password = "Macius jest super";
const message = "masz racje!"
const div = document.querySelector('.message');
input.addEventListener('input', (e) => {
    console.log(e.target.value);
    if (password === e.target.value) {
        div.textContent = message;
    } else {
        div.textContent = "";
    }

})