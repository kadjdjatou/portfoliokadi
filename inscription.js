document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("signup-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let isValid = true;

        // Rrenitialisation des messages d'erreur
        document.querySelectorAll(".error-message").forEach(el => el.textContent = "");

        // recupere tous les champs du formulqire
        const firstName = document.getElementById("firstname").value.trim();
        const lastName = document.getElementById("lastname").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const gender = document.getElementById("gender").value;
        const dob = document.getElementById("dob").value;
        const photo = document.getElementById("photo").files.length;

        // definition des expression reguliere pour la validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^[0-9]{10}$/;
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

        // verification des champs et affichage des erreus
        if (firstName === "") {
            showError("firstname", "Le prénom est requis.");
            isValid = false;
        }

        if (lastName === "") {
            showError("lastname", "Le nom est requis.");
            isValid = false;
        }

        if (!emailPattern.test(email)) {
            showError("email", "Veuillez entrer un email valide.");
            isValid = false;
        }

        if (!passwordPattern.test(password)) {
            showError("password", "Le mot de passe doit contenir au moins 8 caractères avec une lettre et un chiffre.");
            isValid = false;
        }

        if (!phonePattern.test(phone)) {
            showError("phone", "Le numéro doit contenir 10 chiffres.");
            isValid = false;
        }

        if (gender === "") {
            showError("gender", "Veuillez sélectionner un genre.");
            isValid = false;
        }

        if (dob === "") {
            showError("dob", "Veuillez entrer une date de naissance.");
            isValid = false;
        }

        if (photo === 0) {
            showError("photo", "Veuillez télécharger une photo.");
            isValid = false;
        }

        // une fois linscription valide
        if (isValid) {
            alert("Bienvenue sur notre site, " + firstName + " !");
            form.reset();
        }
    });

    function showError(inputId, message) {
        document.querySelector(`#${inputId} + .error-message`).textContent = message;
    }
});
