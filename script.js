const filtroCasal = () => {
    document.getElementById("cinema").style.display = "block";
    document.getElementById("restaurante").style.display = "block";
    document.getElementById("parqueAquatico").style.display = "none";
    document.getElementById("bar").style.display = "none";
    document.getElementById("boliche").style.display = "none";
    document.getElementById("parque").style.display = "none";
    document.getElementById("patinacao").style.display = "none";
    document.getElementById("show").style.display = "none";
    document.getElementById("natacao").style.display = "none";  
}

const filtroSozinho = () => {
    document.getElementById("show").style.display = "block";
    document.getElementById("natacao").style.display = "block";
    document.getElementById("parqueAquatico").style.display = "none";
    document.getElementById("bar").style.display = "none";
    document.getElementById("boliche").style.display = "none";
    document.getElementById("parque").style.display = "none";
    document.getElementById("patinacao").style.display = "none";
    document.getElementById("cinema").style.display = "none";
    document.getElementById("restaurante").style.display = "none";  
}

const filtroFamilia = () => {
    document.getElementById("parqueAquatico").style.display = "block";
    document.getElementById("parque").style.display = "block";
    document.getElementById("patinacao").style.display = "block";
    document.getElementById("cinema").style.display = "none";
    document.getElementById("bar").style.display = "none";
    document.getElementById("boliche").style.display = "none";
    document.getElementById("restaurante").style.display = "none";
    document.getElementById("show").style.display = "none";
    document.getElementById("natacao").style.display = "none";  
}

const filtroAmigos = () => {
    document.getElementById("bar").style.display = "block";
    document.getElementById("boliche").style.display = "block";
    document.getElementById("cinema").style.display = "none";
    document.getElementById("restaurante").style.display = "none";
    document.getElementById("parqueAquatico").style.display = "none";
    document.getElementById("parque").style.display = "none";
    document.getElementById("patinacao").style.display = "none";
    document.getElementById("show").style.display = "none";
    document.getElementById("natacao").style.display = "none";  
}
