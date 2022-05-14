const form = document.querySelector('#form');
const alerta = document.querySelector('#alerta');

form.onsubmit = (evento) => {
    evento.preventDefault();

    alerta.style.display = "block";

    setTimeout(() => {
        alerta.style.display = "none";
    }, 3000)

}


