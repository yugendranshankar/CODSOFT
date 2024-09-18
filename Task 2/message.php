<?php
  // Sanitize inputs to prevent XSS
  $name = htmlspecialchars($_POST['name']);
  $phone = htmlspecialchars($_POST['phone']);
  $email = htmlspecialchars($_POST['email']);
  $message = htmlspecialchars($_POST['message']);

  // Check if email and message fields are not empty
  if (!empty($email) && !empty($message)) {
    
    // Validate email format
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
      
      // Receiver email address
      $receiver = "syugicontact@gmail.com"; // Replace with your actual email address
      
      // Email subject
      $subject = "From: $name <$email>";
      
      // Email body content
      $body = "Name: $name\nEmail: $email\nPhone: $phone\n\nMessage:\n$message\n\nRegards,\n$name";
      
      // Email headers
      $headers = "From: $email\r\n";
      $headers .= "Reply-To: $email\r\n";
      
      // Send the email
      if (mail($receiver, $subject, $body, $headers)) {
         echo "Your message has been sent";
      } else {
         echo "Sorry, failed to send your message!";
      }
    } else {
      echo "Enter a valid email address!";
    }
  } else {
    echo "Email and message fields are required!";
  }
?>
