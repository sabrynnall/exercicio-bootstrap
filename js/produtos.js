const myModal = document.getElementById('myModal');
const myInput = document.getElementById('myInput');
const excluir = document.querySelector('#excluir');
const alertaSucess = document.querySelector('#alerta-sucess');

function alertar (evento) {
  evento.preventDefault();

  alertaSucess.style.display = "block";

  setTimeout(() => {
      alertaSucess.style.display = "none";
  }, 3000)
}

excluir.addEventListener("click", alertar);  

// myModal.addEventListener('shown.bs.modal', function () {
//   myInput.focus()
// })