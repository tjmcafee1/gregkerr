<?php
/**
 * Created by PhpStorm.
 * User: clzni
 * Date: 10/23/2019
 * Time: 11:07 PM
 */
require_once('../Mail-1.4.1/Mail-1.4.1/Mail.php');

class Email
{

    // IN PROGRESS
    const HOST = 'ssl://smtp.gmail.com';
    const PORT = '465';
    const USERNAME = 'cpoissant12@gmail.com';
    const PASSWORD = 'Moonpie0427!';

    private $to;
    private $body;
    private $subject;
    private $result;
    private $from;

    public function __construct($to, $from, $subject, $body)
    {
        $this->to = $to;
        $this->from = $from;
        $this->subject = $subject;
        $this->body = $body;
        $this->from = $from;
    }

    public function send()
    {
        $headers = ['To' => $this->to,
            'From' => $this->from,
            'Subject' => $this->subject,
            'MIME-Version' => '1.0',
            'Content-Type' => 'text/html; charset=utf-8'];

        $transport = ['host' => Email::HOST,
            'port' => Email::PORT,
            'username' => Email::USERNAME,
            'password' => Email::PASSWORD,
            'auth' => TRUE];

        $smtp = Mail::factory('smtp', $transport);

        $this->result = $smtp->send($this->to, $headers, $this->body);
    }

    public function get_status()
    {
        return $this->result;
    }
}