import createElement from "./createElement.js";
import modifyClassNames from "./modifyClassNames.js";
import simpleInputValidation from "./simpleInputValidation.js";



export default function sendEmail(event) {
    event.preventDefault();
    if(simpleInputValidation([this.elements[0], this.elements[1], this.elements[2]])) {
    const contactModalOuter = document.querySelector('.modal-body.outer');
    const contactModalInner = document.querySelector('.modal-body.inner');
    const sendBtn = document.querySelector('#contact-send');

    const spinner = createElement("div", "loader-spinner");
    const responseMessage = createElement("h2", ["mt-3", "mb-3"], "style", "text-align: center")

    modifyClassNames(contactModalInner, "d-none");

    contactModalOuter.append(spinner);

     emailjs.sendForm('service_dep495r', 'template_wcki7aq', this)
        .then(function() {
            sendBtn.remove()
            spinner.remove("loading-spinner");
            responseMessage.innerText = "Email sent... Redirecting"
            contactModalOuter.append(responseMessage);
            setTimeout(pageReload, 1000);
            console.log('SUCCESS!');
        }, function(error) {
            sendBtn.remove()
            spinner.remove("loading-spinner");
            responseMessage.innerText = "Something went wrong... Redirecting"
            contactModal.append(responseMessage);
            setTimeout(pageReload, 1000);
            console.log('FAILED...', error);
        });
    }
}

function pageReload() {
    location.reload()
}
