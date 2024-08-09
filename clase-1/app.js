const button = document.querySelector('#change-btn');
button.addEventListener('click', () => {

    const img = document.querySelector('img');
    img.classList.toggle('img-rotada')
    const form = document.querySelector('form');
    form.classList.toggle('form-contraste');
    const body = document.querySelector('body');
    body.classList.toggle('body-oscuro');
});

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    if (form.checkValidity()) {
        const input = document.querySelector('#nombre');
        alert('Formulario enviado, muchas gracias ' + input.value);
    }
});
