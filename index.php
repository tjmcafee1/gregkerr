<?php

require_once('mailer_assets/includes/Email.php');
require_once('mailer_assets/includes/UserEmail.php');
header('Content-Type: application/json');


    $name = $_POST['name'];
    $email = $_POST['email'];
    $body = $_POST['field'];
    $message = new UserEmail();
    $message->send_email($name, $email, $body);

if (!$message->send_email()){
    echo 'Message couldn\'t be sent';
} else {
    require 'index.html';
}