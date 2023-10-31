let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    //ocultar el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Función que aplica las animaciones de las skills
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("figma");
        habilidades[1].classList.add("illustrator");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("htmlcss");
        habilidades[4].classList.add("javascript");
        habilidades[5].classList.add("creatividad");
        habilidades[6].classList.add("pensamiento-critico");
        habilidades[7].classList.add("adaptabilidad");
        habilidades[8].classList.add("trabajo-equipo");
        habilidades[9].classList.add("comunicacion");
    }
}

//detecto el scrolling para aplicar la animación de la barra de skills
window.onscroll = function () {
    efectoHabilidades();
}