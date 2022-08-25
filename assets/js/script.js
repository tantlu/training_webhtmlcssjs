'use strict';
//add Event on Element
const addEventOnElem = function (elem, type, callback) {
    if (elem.length >1) {
        for (let i = 0; i<elem.length; i++) {
            elem[i].addEventListener(type, callback)
        }
    } else {
        elem.addEventListener(type, callback)
    }
}

//navbar toggler
const navbar = document.querySelector("[data-navbar]");
const navbarTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const togglerNavbar = function(){
    navbar.classList.toggle("active");
    overlay.classList.toggle('active');
}

addEventOnElem(navbarTogglers, "click", togglerNavbar);

const closeNavbar = function(){
    navbar.classList.remove("active");
    overlay.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);


//header and back to top show when scroll down to 100px
const header = document.querySelector("[data-header]");
const backToBtn = document.querySelector("[data-back-top-btn]");
const headerActive = function(){
    if (window.scrollY > 100){
        header.classList.add("active");
        backToBtn.classList.add("active")
    } else{
        header.classList.remove("active");
        backToBtn.classList.remove("active")
    }
}
addEventOnElem(window, "scroll", headerActive)