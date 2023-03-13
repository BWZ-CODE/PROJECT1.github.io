//////////CONSTANTES///////////////////
const mob_button = document.querySelector('.button_mob');
const mob_menu = document.querySelector('.Mob_menu');




///////////ESCUCHA DE EVENTOS////////////
mob_button.addEventListener('click', activeMobMenu);



//////////////FUNCIONES/////////////////
const isContPrClosed = containerinit.classList.toggle('inactive')

if(!isContPrClosed){
    containerinit.classList.toggle('inactive');
}


function activeMobMenu(){
    mob_menu.classList.toggle('inactive');  
}



