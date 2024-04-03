// JavaScript code goes here
const hamburgerIcon = document.querySelector('.hamburger-icon');
const menuLinks = document.querySelector('.menu-links');

hamburgerIcon.addEventListener('click', () => {
    menuLinks.classList.toggle('open');
});

const projectModalButtons = document.querySelectorAll('.project-modal');
const modal = document.querySelector('.modal');
const overlay = document.getElementById('overlay');
const closeButton = document.querySelector('.close-button');

projectModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        modal.style.display = 'block';
        overlay.style.display = 'block';
    });
});

overlay.addEventListener('click', () => {
    modal.style.display = 'none';
    overlay.style.display = 'none';
});

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
    overlay.style.display = 'none';
});
