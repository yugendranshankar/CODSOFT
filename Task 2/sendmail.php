<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
        exit;
    }

    // Mail setup
    $to = "syugicontact@example.com";  // Replace with your email
    $subject = "New message from $name";
    $body = "Name: $name\nPhone: $phone\nEmail: $email\n\nMessage:\n$message";

    // Headers
    $headers = "From: $email";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "success";
    } else {
        echo "There was a problem sending the email.";
    }
}
?>
