// function toggleMenu() {
//   var hamburger = document.querySelector('.hamburger');
//   var menu = document.querySelector('.menu');
//   hamburger.classList.toggle('active');
//   menu.classList.toggle('active');
// }
// get elements
// const navbarToggle = document.querySelector('.navbar-toggle');
// const navbarMenu = document.querySelector('.navbar-menu');

// navbarToggle.addEventListener('click', () => {
//   navbarToggle.classList.toggle('open');
//   navbarMenu.classList.toggle('open');
// });

// navbarMenu.addEventListener('mouseleave', () => {
//   navbarToggle.classList.remove('open');
//   navbarMenu.classList.remove('open');
// });

const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
  const currentSection = Math.round(window.scrollY / window.innerHeight);
  sections.forEach((section, index) => {
    if (index === currentSection) {
      section.classList.add('active');
    }
    else {
      section.classList.remove('active');
      }
      });
      });