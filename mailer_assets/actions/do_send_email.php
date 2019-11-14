<?php
/**
 * Created by PhpStorm.
 * User: Ashley Neal and Hansan Hung
 * Date: 10/23/2019
 * Time: 11:12 PM
 */

require_once('../includes/Email.php');
require_once('../includes/UserEmail.php');
header('Content-Type: application/json');

$name = $_POST['name'];
$email = $_POST['email'];
$body = $_POST['field'];
$message = new UserEmail();
$message->send_email($name, $email, $body);



