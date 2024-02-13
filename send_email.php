<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $tire_size = $_POST['tire-size'];
    $message = $_POST['message'];
    
    $to = "your_email@example.com";
    $subject = "Contact Form Submission";
    $body = "Name: $name\nEmail: $email\nTire Size: $tire_size\nMessage: $message";
    
    // Uncomment the line below to send the email
    // mail($to, $subject, $body);
    
    // Redirect to a thank you page after submission
    header("Location: thank_you.html");
    exit();
}
?>
