let dropdown = document.querySelector('.menu'), // vai ser minha ul//
submenu = document.querySelector ('.submenu'), //minha ul li ul 
buttonClick = document.querySelector('.check-button'), //meu butão 
hamburger = document.querySelector ('.menu-icon');
//disparar um função collback 
buttonClick.addEventListener ('click', () =>{
    //adcionar classe CSS
    dropdown.classList.toggle('show-dropdown');
    if (submenu){
    submenu.classList.toggle('show-dropdown');
    }
    hamburger.classList.toggle('animate-button');

})