const navbar = document.querySelector('.navbar');
const homeIcon = document.querySelector('.fa-house');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 50) {
    navbar.classList.add('navbar-scrolled');
    homeIcon.getElementsByClassName.color = '#fff';
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
});

const menuBar = document.querySelector('.menu-bar');
const navbarNew = document.querySelector('.nav-tab');
const closeMenu = document.querySelector('.close-menu');

menuBar.addEventListener('click',function(){
    navbarNew.style.display = 'flex';
})

closeMenu.addEventListener('click',function(){
  navbarNew.style.display = 'none';
})