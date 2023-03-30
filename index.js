//////////CONSTANTES///////////////////
const mob_button = document.querySelector('.button_mob');
const mob_menu = document.querySelector('.Mob_menu');
const presentacion_button  = document.querySelector('.title_init');
const presentacion = document.querySelector ('.presentacion');
const close_button = document.querySelector('.close_present')




///////////ESCUCHA DE EVENTOS////////////
mob_button.addEventListener('click', activeMobMenu);
presentacion_button.addEventListener('click', activePresentacion);
close_button.addEventListener('click', closePresentacion)



//////////////FUNCION mobile menu/////////////////
const isContPrClosed = containerinit.classList.toggle('inactive')

if(!isContPrClosed){
    containerinit.classList.toggle('inactive');
}
function activeMobMenu(){
    mob_menu.classList.toggle('inactive');  
}
/////////// funcion presentacion/////////////////
function activePresentacion(){
    console.log("sfsfs");
    presentacion.classList.toggle('inactive');
}
/////////////funcion cerrar presentacion////
function closePresentacion(){
    presentacion.classList.add('inactive');
}

