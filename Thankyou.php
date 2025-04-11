<?php
// Ye check karta hai ke form submit hua hai ya nahi
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Form data process karne ka code yahan ho sakta hai
    // Example: mail send karna, data database mein save karna, etc.
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="thank-you-message">
        <h1>Thank You!</h1>
        <p>Your message has been successfully submitted. We will get back to you shortly.</p>
        <a href="index.php">Go back to homepage</a>
    </div>
</body>
</html>
