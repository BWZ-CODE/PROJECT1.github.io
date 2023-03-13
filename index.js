//////////CONSTANTES///////////////////
const mob_button = document.querySelector('.button_mob');
const mob_menu = document.querySelector('.container_mob_menu');




///////////ESCUCHA DE EVENTOS////////////
mob_button.addEventListener('click', toggleMobMenu);



//////////////FUNCIONES/////////////////
function toggleMobMenu(){   
    mob_menu.classList.toggle('inactive');
}



