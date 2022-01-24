// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // if (links.classList.contains("show-links")) {
  //   links.classList.remove("show-links");
  // } else {
  //   links.classList.add("show-links");
  // }
  links.classList.toggle("show-links");
});


// ********** close nav links ************
links.addEventListener("click", function () {
 //  linksContainer.classList.toggleClass("show-links");
 // const linksHeight = showlinks.getBoundingClientRect().height;
 // const containerHeight = linksContainer.getBoundingClientRect().height;
 // if (containerHeight === 0) {
 //   linksContainer.style.height = `${linksHeight}px`;
 // } else {
 //   linksContainer.style.height = 0;
 // }
 // console.log(linksContainer.getBoundingClientRect());
    links.classList.remove("show-links");
});



// ********** show and hide navbar on scroll ************
var lastScrollTop;
navbar = document.getElementById('nav');
window.addEventListener('scroll',function(){
var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
if(scrollTop > lastScrollTop){
navbar.style.top='-25rem';
}
else{
navbar.style.top='0';
}
lastScrollTop = scrollTop;
});


// ********** set date ************
// select span
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

