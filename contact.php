<?php
// Define your email address where the form submissions should be sent
$to = "alexis.mendoza.tech@gmail.com"; // Replace with your email address

// Check if form data has been submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);

    // Create the email subject and body
    $subject = "New Contact Form Submission from: " . $name;
    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Phone: $phone\n";
    $body .= "Message:\n$message";

    // Additional email headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        // If email sent successfully
        echo "<h1>Thank you, your message has been sent successfully!</h1>";
    } else {
        // If email sending failed
        echo "<h1>Sorry, something went wrong. Please try again later.</h1>";
    }
} else {
    // Redirect back to the form if not a POST request
    header("Location: index.html");
    exit;
}
?>
