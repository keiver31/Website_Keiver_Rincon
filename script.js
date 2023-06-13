let menuVisible = false;

//Funcion que oculta o muestra el menu

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que seleccione una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}


//Funcion que aplica las animaciones de las habilidades
function efectoHabilides() { 
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[2].classList.add("c");
    }
}

//detecto el scrolling para aplicar la animación de la barra de habilidades
window.onscroll = function(){
    efectoHabilides();
}