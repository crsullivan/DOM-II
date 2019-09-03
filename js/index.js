// Your code goes here
const navBar = document.querySelectorAll('nav');
const navLink = document.querySelectorAll('nav .nav-link');

// navLink.addEventListener('click', e => {
    
  console.log(navBar);
  console.log(navLink);

  navLink[0].addEventListener('click', e => {console.log('link is clicked'); e.preventDefault();})
  navLink[1].addEventListener('click', e => {console.log('link is clicked'); e.preventDefault();})
  navLink[2].addEventListener('click', e => {console.log('link is clicked'); e.preventDefault();})
  navLink[3].addEventListener('click', e => {console.log('link is clicked'); e.preventDefault();})