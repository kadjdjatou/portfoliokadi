<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sécurisation des champs (on empêche les caractères dangereux)
    $firstname = htmlspecialchars($_POST['firstname']);
    $lastname = htmlspecialchars($_POST['lastname']);
    $email = htmlspecialchars($_POST['email']);
    $password = htmlspecialchars($_POST['password']);
    $phone = htmlspecialchars($_POST['phone']);
    $gender = htmlspecialchars($_POST['gender']);
    $dob = htmlspecialchars($_POST['dob']);

    // Traitement de la photo
    if (isset($_FILES['photo']) && $_FILES['photo']['error'] === 0) {
        $photo_name = $_FILES['photo']['name'];
        $photo_tmp = $_FILES['photo']['tmp_name'];

        // On crée un chemin de destination : dossier "uploads/" + nom du fichier
        $destination = "uploads/" . $photo_name;

        // On déplace le fichier vers ce dossier
        move_uploaded_file($photo_tmp, $destination);

        $photo_url = $destination;
    } else {
        $photo_url = null;
    }

    // Affichage du récapitulatif
    echo "<h1>Récapitulatif de l'inscription</h1>";
    echo "<p><strong>Prénom :</strong> $firstname</p>";
    echo "<p><strong>Nom :</strong> $lastname</p>";
    echo "<p><strong>Email :</strong> $email</p>";
    echo "<p><strong>Mot de passe :</strong> $password</p>";
    echo "<p><strong>Téléphone :</strong> $phone</p>";
    echo "<p><strong>Genre :</strong> $gender</p>";
    echo "<p><strong>Date de naissance :</strong> $dob</p>";

    if ($photo_url) {
        echo "<p><strong>Photo :</strong><br>";
        echo "<img src='$photo_url' alt='Photo de profil' width='150'></p>";
    } else {
        echo "<p>Aucune photo reçue.</p>";
    }

} else {
    echo "<p>Aucune donnée reçue.</p>";
}
?>
