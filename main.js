let logo = document.getElementById('artByMeLogo');
let navbar = document.getElementById('mainNavbar');
let closeButton = document.getElementById('closeNavbar')

logo.addEventListener('click', showNavbar);
closeButton.addEventListener('click', hideNavbar);


function showNavbar(){
    navbar.classList.remove('nav');
    navbar.classList.add('navOpen');
}
function hideNavbar(){
    navbar.classList.add('nav');
    navbar.classList.remove('navOpen');
}