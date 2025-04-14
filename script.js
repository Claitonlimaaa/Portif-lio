document.addEventListener("DOMContentLoaded", function() {
    particlesJS("portfolio", {
        "particles": {
            "number": {
                "value": 100,
                "density": { 
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle"
            },
            "opacity": {
                "value": 0.5
            },
            "size": {
                "value": 3
            },
            "move": {
                "enable": true,
                "speed": 3
            }
        }
    });
});
 


let btnMenu = document.getElementById("btnmenu");
let menu = document.getElementById("Menumobile");
let overlaymenu = document.getElementById("overlay-menu");

btnMenu.addEventListener('click', () => {
    menu.classList.add('abrirmenu');
});
menu.addEventListener('click', () => {
    menu.classList.remove('abrirmenu');
});
overlaymenu.addEventListener('click', () => {
    menu.classList.remove('abrirmenu');
});