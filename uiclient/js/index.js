import { HttpFetch } from "./modules/HttpFetch.js";
import { UIBuilder } from "./modules/UIBuilder.js";
function hola(a){
    console.log('Datos listos' + a)
}


const httpFetch = new HttpFetch('http://localhost:3000');
httpFetch.obtenerUI('', (datos) => {
    UIBuilder.build(datos);
    /*
    const contenedor = document.getElementById("main_container");
    datos.panels.forEach(element => {
        const div = document.createElement('div');
        div.setAttribute('class', element.cssData);
        contenedor.appendChild(div)
    });
    */
});
