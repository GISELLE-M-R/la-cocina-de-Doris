function showConfirmation(event) {
    event.preventDefault(); // Evita el envío por defecto del formulario
    const name = document.getElementById('name').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const numberPeople = document.getElementById('numberPeople').value;

    const confirmationMessage = `Reservation confirmed!\n\nName: ${name}\nLast Name: ${lastName}\nEmail: ${email}\nDate: ${date}\nNumber of People: ${numberPeople}`;
    alert(confirmationMessage);
}
function mostrarConfimacion(event) {
    event.preventDefault(); // Evita el envío por defecto del formulario
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const correo = document.getElementById('correo').value;
    const fecha = document.getElementById('fecha').value;
    const num_personas = document.getElementById('num_personas').value;

    const confirmationMessage = `Reservacion confirmada!\n\nnombre: ${nombre}\napellido: ${apellido}\ncorreo: ${correo}\nfecha: ${fecha}\nNúmero de Personas: ${num_personas}`;
    alert(confirmationMessage);
}
