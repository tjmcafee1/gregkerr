<?php
/**
 * Created by PhpStorm.
 * User: clzni
 * Date: 10/28/2019
 * Time: 5:04 PM
 */

class UserEmail
{
    public function send_email($name, $email, $body)
    {
        $kerr_email = "greg.kerr@pcc.edu";
        $subject = "Email to Greg Kerr from User: " . $name; /* ReplCE WITH GREG'S EMAIL */
        $from = "GK Site: " . $name . " <" . $email . ">";
        $body_email = "From: " . $name . " Email: " . $email . " Message: " . $body;
        $user_email = new Email($kerr_email, $from, $subject, $body_email);
        $user_email->send();
    }
}