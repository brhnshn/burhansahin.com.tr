document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
  
    hamburger.addEventListener('click', function() {
      menu.classList.toggle('active');
    });
  });


const hamburgerButton = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');
hamburgerButton.addEventListener('click', () => {
  menu.classList.toggle('active');
});


