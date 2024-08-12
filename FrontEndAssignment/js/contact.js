document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    // Function to reset the form fields
    function resetFormFields() {
        contactForm.reset();
    }

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the default form submission behavior

        // Get form data
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Create an object to store the form data
        const formData = {
            name,
            email,
            message,
        };

        // Convert the form data object to a JSON string
        const formDataJSON = JSON.stringify(formData);

        // Store the form data in local storage
        localStorage.setItem("contactFormData", formDataJSON);

        // Store the form data in session storage
        sessionStorage.setItem("contactFormData", formDataJSON);

        alert("Form data submitted and saved in local storage and session storage.");

        // Reset the form fields
        resetFormFields();
    });
});
