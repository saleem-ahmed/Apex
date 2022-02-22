let Button = document.querySelector('.navBtn');
let Open = document.querySelector('#open');
let x = true

function button() {

    if (x == true) {
        Open.style.display = "block";
        x = false
    } else {
        Open.style.display = "none";
        x = true
    }
}

const hamburger = document.querySelector('.hamburger');
    const navLink = document.querySelector('.nav__link');

    hamburger.addEventListener('click', () => {
        navLink.classList.toggle('hide');
    });