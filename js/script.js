
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const response = document.getElementById("formResponse");

        response.textContent =
            "Thank you! Your form has been completed successfully. This is a demonstration; no message has been sent.";

        contactForm.reset();
    });
}
