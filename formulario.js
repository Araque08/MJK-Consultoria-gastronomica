const form = document.getElementById('form');

const serviceId = 'service_4imuoyo';
const templateId = 'template_iy85eht';
const publicKey = '9JADBuaQ_Za_aIDvr';  // clave pública (NO private key)

// Inicializamos EmailJS (fuera del submit)
emailjs.init(publicKey);

form.addEventListener('submit', sendEmail);

function sendEmail(event) {
    event.preventDefault();

    emailjs.sendForm(serviceId, templateId, form, publicKey)
        .then(() => {
        Swal.fire("✅ Mensaje enviado con éxito");
        form.reset(); // limpiar formulario después de enviar
        })
        .catch((error) => {
        console.error(error);
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No ha sido posible enviar el mensaje",
        });
    });
}





