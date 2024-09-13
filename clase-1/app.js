document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const dob = document.getElementById('dob').value;
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    let valid = true;

    // resetear errores 
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('dobError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';

    // validaciones de todos los campos
    if (name === '') {
        valid = false;
        document.getElementById('nameError').textContent = 'Name is required';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailRegex.test(email)) {
        valid = false;
        document.getElementById('emailError').textContent = 'Please enter a valid email';
    }

    if (dob === '') {
        valid = false;
        document.getElementById('dobError').textContent = 'Date of birth is required';
    } else {
        const birthDate = new Date(dob);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
        const dayDifference = today.getDate() - birthDate.getDate();

        if (age < 18 || (age === 18 && (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)))) {
            valid = false;
            document.getElementById('dobError').textContent = 'You must be at least 18 years old';
        }
    }

    if (password.length < 6) {
        valid = false;
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long';
    }

    if (password !== confirmPassword) {
        valid = false;
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
    }

    //si pasa todas las validaciones carga el formulario
    if (valid) {
        alert('Form submitted successfully!');
    }

});



//aumenta el contrsate de la pagina
let clickeado = 0;

document.querySelector('.contrast').addEventListener('click', function(event) {
    clickeado = !clickeado
    if(clickeado){
        document.body.classList.add('contrast-body');
        document.querySelector('.btn').classList.add('contrast-btn-primary');
    }
    else
    {
        document.body.classList.remove('contrast-body');
        document.querySelector('.btn').classList.remove('contrast-btn-primary');    
    }
    
});
