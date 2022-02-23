

let hamburger = document.querySelector('.hamburger');
let close = document.querySelector('.close');
let menu = document.querySelector('.nav__links');
let menuIcon = document.querySelector('.menu-icon');

function openClose() {
  if (!menu.classList.contains('active')) {
    menu.classList.add('active');
    menuIcon.style.display = 'none';
    close.style.display = 'block';
  }

  else {
    menu.classList.remove('active');
    menuIcon.style.display = 'block';
    close.style.display = 'none';
  }
}

hamburger.addEventListener('click', openClose);