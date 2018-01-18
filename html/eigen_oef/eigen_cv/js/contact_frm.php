<?php
// Fetching Values from URL.
$from = $_GET['from'];
$to = $_GET['to'];
$subject = $_GET['subject'];
$text = $_GET['text'];
$email = filter_var($email, FILTER_SANITIZE_EMAIL); // Sanitizing E-mail.
// After sanitization Validation is performed
if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $headers = 'From:' . $from. "\r\n"; // Sender's Email
    $sendmessage= $text;

mail("receiver_email_id@abc.com", $subject, $sendmessage, $headers);
echo "Your Query has been received, We will contact you soon.";
}
} else {
echo "<span>* invalid email *</span>";
}
?>

