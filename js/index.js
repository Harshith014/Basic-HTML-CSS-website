burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navList = document.querySelector('.navlist');
searchNav = document.querySelector('.search-nav');

burger.addEventListener('click', () => {
    navbar.classList.toggle('v-navbar');
    navList.classList.toggle('v-class');
    searchNav.classList.toggle('v-class');
})