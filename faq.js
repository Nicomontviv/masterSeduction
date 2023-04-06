const faqButtons = document.querySelectorAll('button[id^="faq-btn-"]'); //selecciona todos los botones que tienen un id que comienza con "faq-btn-"

faqButtons.forEach(button => { //itera sobre todos los botones y agrega un evento de escucha para cada uno
  button.addEventListener('click', toggleAnswer); //agrega un evento de escucha para el click en el botón, que ejecutará la función toggleAnswer
});

function toggleAnswer() {
    const answerId = this.getAttribute('id').replace('btn', 'answer'); //obtiene el id del botón actual y lo cambia por el id correspondiente de la respuesta
    const answer = document.getElementById(answerId); //selecciona la respuesta correspondiente
    answer.classList.toggle('hidden'); //alterna la clase "hidden" para mostrar u ocultar la respuesta
  }
  