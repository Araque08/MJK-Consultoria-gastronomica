const form = document.getElementById('form')
form.addEventListener('submit', sendEmail)

const serviceId = 'service_4imuoyo'
const templateId = 'template_iy85eht'
const apikey = '9JADBuaQ_Za_aIDvr'

function sendEmail(event){
    event.preventDefault();
    emailjs.init(serviceId);

    emailjs.sendForm(serviceId,templateId,form,apikey)
        .then((result) => Swal.fire("El mensaje se ha enviado con exito"))
        .catch((error) => {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "No ha sido posible enviar el mensaje",
            });
        });
}




