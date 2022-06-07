burger = document.querySelector('.burger')
logo= document.querySelector('.logo')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')



burger.addEventListener('click', ()=>{
    navbar.classList.toggle('h-nav')
    logo.classList.toggle('v-resp')
    navlist.classList.toggle('v-resp')

}) 
contact = document.querySelector('.as')
contact.addEventListener('click', ()=>{
    navbar.classList.toggle('h-nav')
    logo.classList.toggle('v-resp')
    navlist.classList.toggle('v-resp')

}) 