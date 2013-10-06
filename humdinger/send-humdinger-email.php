<?php


$theirEmail = $_POST['email'];
$subject1 = 'Thank you!';
$message1 = 'Thanks for signing up for Humdinger! Unfortunately, our private beta is full right now. We\'ll shoot you an email when we\'re ready to release!';
$headers1 = 'From: humdinger.mobile@gmail.com' . "\r\n" .
    'Reply-To: humdinger.mobile@gmail.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

$ourEmail = 'humdinger.mobile@gmail.com';
$subject2 = 'flahertyb.com/humdinger/index.html';
$message2 = 'Email submission from '.$theirEmail;
$headers2 = 'From: humdinger.mobile@gmail.com' . "\r\n" .
    'Reply-To: humdinger.mobile@gmail.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

if (mail($theirEmail, $subject1, $message1, $headers1)) {
echo('<p>Message delivered.</p>');
}
else {
echo('<p>Message delivery to them failed...</p>');
}

if (mail($ourEmail, $subject2, $message2, $headers2)) {
echo('<p>Message delivered.</p>');
}
else {
echo('<p>Message delivery to us failed...</p>');
}
?>
