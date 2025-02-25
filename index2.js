document.getElementById("signup").addEventListener("submit", function(event) {
    event.preventDefault();

    let Prenom = document.getElementById("prenom").value.trim();
    let lastname = document.getElementById("lastname").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let gender = document.getElementById("gender").value;
    let dob = document.getElementById("dob").value;
    let profilePic = document.getElementById("profile-pic").value;

    let errors = [];

    if (Prenom === "" || nom === "") {
        errors.push(".");
    }

   
