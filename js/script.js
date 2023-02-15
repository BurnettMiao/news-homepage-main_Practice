const menuBtnOpen = document.querySelector('.menu-btn');
const menuBtnClose = document.querySelector('.menu-btn-close');
const navbar = document.querySelector('.nav-bar');
const overlay = document.querySelector('.overlay');

menuBtnOpen.addEventListener('click', function () {
  navbar.classList.add('active');
  overlay.classList.add('active');
  menuBtnClose.classList.add('active');
});

menuBtnClose.addEventListener('click', function () {
  navbar.classList.remove('active');
  overlay.classList.remove('active');
  menuBtnClose.classList.remove('active');
});
